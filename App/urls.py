

from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index, name='index'),
    path('login/', views.UserLogin, name='login'),
    path('signup/', views.Signup, name='signup'),
    path('logout/', views.UserLogout, name='logout'),

    path('samples/', views.Samples, name='samples'),
    path('store/', views.Stores, name='store'),

    path('dashboard/', views.Dashboard, name='dashboard'),
    path('addsample/', views.AddSample, name='addsample'),
    path('editsample/<int:pk>/', views.EditSample, name='editsample'),
    path('deletesample/<int:pk>/', views.DeleteSample, name='deletesample'),

    path('item/', views.Items, name='item'),
    path('addstore/', views.AddStore, name='addstore'),
    path('editstore/<int:pk>/', views.EditStore, name='editstore'),
    path('deletestore/<int:pk>/', views.DeleteStore, name='deletestore'),

    path('mail/', views.Mail, name='mail'),
]

