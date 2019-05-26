var menuHeight = document.getElementById('menu').offsetHeight,
    header = document.querySelector('header');
    header.style.marginTop = menuHeight + 'px';


//=========================
var product = Array.from(document.querySelectorAll('main .wrapper-product .list-product .product'));
var productHeight = product[0].offsetHeight;

for (let index = 1; index < product.length; index++) {
    if(productHeight < product[index].offsetHeight){
        var productHeight = product[index].offsetHeight;
    }
    console.log(productHeight);
    
}
product.forEach(
    function(el){
        el.style.height = productHeight + 'px';
    }
)


//===========================




getContainer = document.querySelectorAll('main .hm-container.wow');
getContainer.forEach(
    function(el, idx){
        getItem = Array.from(el.querySelectorAll('.item'));
        getItem.forEach(
            function(el1,idx1){
                var delay = 0.3 * idx1 + 0.3    ;
                el1.setAttribute('data-wow-delay', delay + 's');
                // el1.setAttribute('data-wow-iteration', '10')
                el1.classList.add('wow')
                el1.classList.add('fadeInDown')
            }
        )
    }
)



//==============================================
var indicators = Array.from(document.querySelectorAll('header .wrapper-indicators')),
    indicatorActive = document.querySelector('header .wrapper-indicators .indicator.active'),
    indicator = Array.from(document.querySelectorAll('header .wrapper-indicators .indicator')),

    title = Array.from(document.querySelectorAll('header .title')),
    titleActive = document.querySelector('header .title.active'),

    buyBtn = Array.from(document.querySelectorAll('header .buy')),
    buyBtnActive = document.querySelector('header .buy.active'),

    slide = document.querySelectorAll('header .slide .slide-img'),
    slideActive = document.querySelector('header .slide .slide-img.active');
   
var slideIndex;
function showSlide(){
    var i;
    for (i = 0; i < indicator.length; i++){
        indicator[i].classList.remove('active');
        title[i].classList.remove('active');
        buyBtn[i].classList.remove('active');
        slide[i].classList.remove('active');
    }

indicator[slideIndex].classList.add('active');
title[slideIndex].classList.add('active');
buyBtn[slideIndex].classList.add('active');
slide[slideIndex].classList.add('active');
slideIndex++;

if(slideIndex > indicator.length -1){
    slideIndex = 0
}
setTimeout(showSlide, 10000);
}
showSlide(slideIndex = 0);
    
function currentSlide(n) {
    showSlide(slideIndex = n);
}


indicators.forEach(
    function(el, index){
        var indicator = el.querySelectorAll('.indicator');
        indicator.forEach(
        function(el1, index1){
            el1.addEventListener('click', function(){
                var indicatorActive = el.querySelector('.indicator.active'),
                    buyBtnActive = document.querySelector('header .buy.active'),
                    slideActive = document.querySelector('header .slide .slide-img.active'),
                    titleActive = document.querySelector('header .title.active');
                indicatorActive.classList.remove('active');
                el1.classList.add('active');

                buyBtnActive.classList.remove('active');
                buyBtn[index1].classList.add('active');

                titleActive.classList.remove('active');
                title[index1].classList.add('active');

                slideActive.classList.remove('active');
                slide[index1].classList.add('active');
            })
        })
    }
)

function showMenu(){
    var menu = document.querySelector('nav .menu');
    if(Array.from(menu.classList).indexOf('active') == -1){
        menu.classList.add('active');
    }else{
        menu.classList.remove('active');
    }
}

new WOW().init();