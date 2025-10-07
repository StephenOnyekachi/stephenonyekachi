
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.mymenu');
    if (window.scrollY > 50) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
});

window.addEventListener('scroll', slide);
function slide(){
    var reavels = document.querySelectorAll('.slidetop');
    
    for(var i = 0; i < reavels.length; i++){

        var windowheight = window.innerHeight;
        var reaveltop = reavels[i].getBoundingClientRect().top;
        var reavelpoint = 60;

        if(reaveltop < windowheight - reavelpoint){
            reavels[i].classList.add('active');
        }
        else{
            reavels[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', leftslide);
function leftslide(){
    var reavels = document.querySelectorAll('.slideleft');
    
    for(var i = 0; i < reavels.length; i++){

        var windowheight = window.innerHeight;
        var reaveltop = reavels[i].getBoundingClientRect().top;
        var reavelpoint = 60;

        if(reaveltop < windowheight - reavelpoint){
            reavels[i].classList.add('active');
        }
        else{
            reavels[i].classList.remove('active');
        }
    }
}

