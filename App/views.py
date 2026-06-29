
from django.contrib.auth.models import User
from django.http import HttpResponse,JsonResponse
from django.contrib import messages
from django.shortcuts import render, redirect, get_object_or_404, get_list_or_404
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib.auth.decorators import login_required, user_passes_test
from django.urls import reverse
from django.db.models import Q, F, Sum
import random, time, datetime, requests
from decimal import Decimal, InvalidOperation
from django.contrib.auth.hashers import make_password, check_password
from django.db import transaction
from . models import *
import re
from django.conf import settings
from django.core.cache import cache

# for emails
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
import threading
from celery import shared_task

# Create your views here.

# deffine speruser function
def IsSuperuser(user):
    return user.is_superuser


# redirect user if not superuser
def CheckUser(view_func):
    return user_passes_test(
        IsSuperuser,
        login_url='dashboard',
        redirect_field_name=None
    )(view_func)


# celery task for sending email asynchronously
@shared_task(bind=True, max_retries=3)
def SendEmailTask(self, subject, html, email):
    import logging
    logger = logging.getLogger(__name__)

    try:
        logger.info(f"Sending email to {email}")

        from django.core.mail import EmailMultiAlternatives

        msg = EmailMultiAlternatives(
            subject=subject,
            body="This email requires HTML support.",
            to=[email]
        )
        msg.attach_alternative(html, "text/html")
        msg.send()

    except Exception as exc:
        logger.error(f"Failed to send email to {email}: {exc}")
        raise self.retry(exc=exc, countdown=60)


# for sending function
def SendMail(user, template_name, email_subject, extra_context=None):
    # name = user.get_full_name() or user.username
    recipient_email = user

    context = {
        # "name": name,
        "email": recipient_email,
    }

    if extra_context:
        context.update(extra_context)

    html_content = render_to_string(template_name, context)

    def send_mail():
        try:
            msg = EmailMultiAlternatives(
                subject=email_subject,
                body=html_content,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[recipient_email],
            )

            msg.attach_alternative(html_content, "text/html")

            result = msg.send(fail_silently=False)

            print("EMAIL SENT:", result)

        except Exception as e:
            print("EMAIL ERROR:", str(e))

    threading.Thread(
        target=send_mail
    ).start()


# logout user out after 24 hours
def AutoLogout(request, timeout_day = 1):
    # timeout_minues = timeout_hour * 60 # for 12 hour
    timeout_minues = timeout_day * 24 * 60 # for 24 hour
    now = datetime.datetime.now()
    try:
        last_activity = request.session['last_activity']
        last_activity = datetime.datetime.fromisoformat(last_activity)
        if(now - last_activity).total_seconds() / 60 > timeout_minues:
            logout(request)
    except KeyError:
        pass
    # request.session['last_active']=datetime.datetime.now()
    request.session['last_activity'] = now.isoformat()


# logout function
def UserLogout(request):
    user = request.user

    # logout user once
    logout(request)
    messages.success(
        request,
        "You have been logged out successfully"
    )

    return redirect("index")


# login function
def UserLogin(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:

            login(request, user)

            if user.is_superuser:
                messages.success(request, f"Welcome back {user.username}")
                return redirect('dashboard')

            messages.success(request, f"Welcome back {user.username}")
            return redirect('dashboard')
        
        messages.error(request, 'Incorrect username or password, please try again')
        return redirect('login')
    
    context={}

    return render(request,"login.html",context)
    # return HttpResponse('welcome to django')


# user signup
def Signup(request):
    if request.method == "POST":
        username = request.POST.get("username", "").strip()
        email = request.POST.get("email", "").strip().lower()
        password = request.POST.get("password")

        # verifing password
        if password:
            
            # # checking if email already exist
            # if User.objects.filter(email=email).exists():
            #     messages.error(request, 'Email have been used, try another email')
            #     return redirect("signup")
            
            # checking if username already exist
            if User.objects.filter(username=username).exists():
                messages.error(request, "Username already exists")
                return redirect("signup")
                
            # to prevent error occurance while creating account
            with transaction.atomic():
                
                # creating user
                profile = User.objects.create_user(
                    username=username,
                    email=email,
                    password=password,
                )
                
            # calling sending mail functionn here after creating account
            try:
                subject = 'Welcome to 🍽️ SBW Maison'
                extra_context = {
                    'user': profile
                }
                SendMail(profile, 'mails/welcomeMail.html', subject, extra_context)
            except Exception as e:
                print("EMAIL ERROR:", e)

            messages.success(
                request, f'you successfully created an with 🍽️ SBW Maison"{username}"'
            )
            return redirect("login")

        return redirect("signup")
    
    return render(request,"signup.html")


# for inex or landing page
def Index(request):

    context = {
        
    }
    return render(request, 'index.html', context)
    # return HttpResponse('welcome to django')


# for samples
def Samples(request):

    allsamples = Sample.objects.all().order_by('-id')

    context = {
        'allsamples':allsamples,
    }
    return render(request, 'samples.html', context)
    # return HttpResponse('welcome to django')


# for samples
def Stores(request):

    allitems = Store.objects.all().order_by('-id')

    context = {
        'allitems':allitems,
    }
    return render(request, 'store.html', context)
    # return HttpResponse('welcome to django')


# for user or admin dashboard
@login_required(login_url='login')
@CheckUser
def Dashboard(request):

    # get all samples
    samples = Sample.objects.all().order_by('-id')

    context = {
        'samples':samples,
    }

    return render(request, 'admin/adminpage.html', context)


# for adding samples
@login_required(login_url='login')
@CheckUser
def AddSample(request):

    # # get user
    if request.method == "POST":
        image = request.FILES.get('image')
        name = request.POST.get('title')
        link = request.POST.get('link')
        description = request.POST.get('description')

        # to prevent error occurance while creating account
        with transaction.atomic():

            Sample.objects.create(
                user=request.user,
                image=image,
                name=name,
                link=link,
                description=description,
            )

            messages.success(request, f"{name}, was added successfully")
            return redirect('dashboard')

    context = {}

    return render(request, 'admin/addsample.html', context)


# for editing samples
@login_required(login_url='login')
@CheckUser
def EditSample(request, pk):

    sample = get_object_or_404(Sample, id=pk)

    # # get user
    if request.method == "POST":
        image = request.FILES.get('image')
        name = request.POST.get('title')
        link = request.POST.get('link')
        description = request.POST.get('description')

        # to prevent error occurance while creating account
        with transaction.atomic():

            if image:
                sample.image=image
            if name:
                sample.name=name
            if link:
                sample.link=link
            if description:
                sample.description=description

            sample.save()
            messages.success(request, f"{name}, was edited successfully")
            return redirect('dashboard')

    context = {
        'sample':sample,
    }

    return render(request, 'admin/edit.html', context)


# for deleting samples
@login_required(login_url='login')
@CheckUser
def DeleteSample(request, pk):

    sample = get_object_or_404(Sample, id=pk)
    sample.delete()
    messages.success(request, f"{sample.name}, was deleted successfully")
    return redirect('dashboard')


# for user or admin dashboard
@login_required(login_url='login')
@CheckUser
def Items(request):

    # get all samples
    items = Store.objects.all().order_by('-id')

    context = {
        'items':items,
    }

    return render(request, 'admin/items.html', context)


# for adding samples
@login_required(login_url='login')
@CheckUser
def AddStore(request):

    # getting category and status
    category = Store.CATEGORY_CHOICES
    status = Store.STATUS_CHOICES

    # # get user
    if request.method == "POST":
        image = request.FILES.get('image')
        name = request.POST.get('title')
        number = request.POST.get('number')
        description = request.POST.get('description')
        status = request.POST.get('status')
        category = request.POST.get('category')

        # to prevent error occurance while creating account
        with transaction.atomic():

            if number:
                number = re.sub(r'\D', '', number)
                if number.startswith('0'):
                    number = number[1:]
                # elif number.startwith('+'):
                #     number = number[1:]

            Store.objects.create(
                user=request.user,
                image=image,
                name=name,
                number=number,
                description=description,
                status=status,
                category=category
            )

            messages.success(request, f"{name}, was added successfully")
            return redirect('item')

    context = {
        'category':category,
        'status':status,
    }

    return render(request, 'admin/addstore.html', context)


# for editing samples
@login_required(login_url='login')
@CheckUser
def EditStore(request, pk):

    item = get_object_or_404(Store, id=pk)

    # # get user
    if request.method == "POST":
        image = request.FILES.get('image')
        name = request.POST.get('title')
        link = request.POST.get('number')
        description = request.POST.get('description')

        # to prevent error occurance while creating account
        with transaction.atomic():

            if image:
                item.image=image
            if name:
                item.name=name
            if link:
                item.link=link
            if description:
                item.description=description

            item.save()
            messages.success(request, f"{name}, was edited successfully")
            return redirect('item')

    context = {
        'item':item,
    }

    return render(request, 'admin/editstore.html', context)


# for deleting samples
@login_required(login_url='login')
@CheckUser
def DeleteStore(request, pk):

    item = get_object_or_404(Store, id=pk)
    item.delete()
    messages.success(request, f"{item.name}, was deleted successfully")
    return redirect('item')


# for sending mails to admin
def Mail(request):

    if request.method == 'POST':
        mail = request.POST.get("mail")
        subject = request.POST.get("subject")
        note = request.POST.get("note")

        # calling sending mail functionn here after creating account
        subject = subject
        extra_context={
            'note':note
        }
        SendMail(mail, 'mails/mail.html', subject, extra_context)

    return redirect('/')

