'use strict';


 



///Сделай функцию, которая принимает массив любых целых чисел,
/// которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};






if(!document.querySelector(`body`).matches(`._touch`)){

function bodyCheck() {
    if(isMobile.any() && window.innerWidth > 768){
        $(`body`).removeClass(`_pc`);
        $(`body`).addClass(`_touch`);
    }
    else if(window.innerWidth <= 768){
        $(`body`).removeClass(`_pc`);
        $(`body`).addClass(`_touch`);
    }
    else{
        $(`body`).removeClass(`_touch`);
        $(`body`).addClass(`_pc`);
    }      
}

bodyCheck();
    $(window).resize(bodyCheck);
}



document.addEventListener("DOMContentLoaded", function() {



});




const evenImages= document.querySelectorAll(`.block-fruit_even .block-fruit__image`);


let animItems = document.querySelectorAll(`.anim-item`);

if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll);

    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let anim = window.innerHeight - animHeight / animStart;
            if (animHeight > window.innerHeight) {
                anim = window.innerHeight - window.innerHeight / animStart;
            }
            if (pageYOffset > animItemOffset - anim && pageYOffset < animItemOffset + animHeight) {
                animItem.classList.add(`_active`);
            }
            else {
                if (!animItem.classList.contains(`anim-no-hide`)) {
                    animItem.classList.remove(`_active`);
                }
            }

        }
        function offset(elem) {
            const rect = elem.getBoundingClientRect();
            const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;
            return { left: rect.left + scrollX, top: rect.top + scrollY }
        }
    }
    animOnScroll();

}











$(`.header__burger`).click(function(){
    $(`body`).toggleClass(`_lock`);
    $(this).toggleClass(`_active`);
    $(`.bg_fon`).toggleClass(`_active`);
    $(`.menu`).toggleClass(`_active`);
});

$(window).resize(function(){
    $(`body`).removeClass(`_lock`);
    $(`.header__burger`).removeClass(`_active`);
    $(`.bg_fon`).removeClass(`_active`);
    $(`.menu`).removeClass(`_active`);  
});

let arrowItems = document.querySelectorAll(`.arrow`);



if($(window).width() < 768){

    $(`.arrow`).off(`click`);

    $(`.arrow`).click(function (e) {
        $(this).toggleClass(`_active`);
        $(this).parent().find(`.menu__sub-list`).toggleClass(`_active`).slideToggle();
    });
    
}
else{
    $(`.arrow`).off(`click`);

    $(`.arrow`).click(function (e) {
        $(this).toggleClass(`_active`);
        $(this).parent().find(`.menu__sub-list`).toggleClass(`_active`);
    });      
}

$(window).resize(function(){

    if($(window).width() < 768){

        $(`.arrow`).off(`click`);

        $(`.arrow`).click(function (e) {
            $(this).toggleClass(`_active`);
            $(this).parent().find(`.menu__sub-list`).toggleClass(`_active`).slideToggle();
        });
        
    }
    else{
        $(`.arrow`).off(`click`);
$(`.arrow`).parent().find(`.menu__sub-list`).attr(`style`,"");
        $(`.arrow`).click(function (e) {
            $(this).toggleClass(`_active`);
            $(this).parent().find(`.menu__sub-list`).toggleClass(`_active`);
        });      
    }
});



function openPop(elem){
    const windowO = window.innerWidth;

    const wrap = document.querySelector(`.wrapper`).offsetWidth;
    console.log(`${window.innerWidth} - ${document.querySelector(`.wrapper`).offsetWidth}`);

    const scrollBar = windowO - wrap; 
    $(`.popup-block__item`).removeClass(`_active`).parent().removeClass(`_active`);

    $(`.paddingRight`).each(function(){
        $(this).css("padding-right",`${scrollBar}px`);
        console.log(elem);
    });

    $(`#${elem}`).addClass(`_active`).parent().addClass(`_active`);
    $(`body`).addClass(`_lock`).css("padding-right",`${scrollBar}px`);

}
function closePop() {
const windowO = window.innerWidth;

    const wrap = document.querySelector(`.wrapper`).offsetWidth;
    console.log(`${window.innerWidth} - ${document.querySelector(`.wrapper`).offsetWidth}`);

    const scrollBar = windowO - wrap; 
    $(`.paddingRight`).each(function(){
        $(this).css("padding-right",`${0}px`);
    });
    $(`body`).removeClass(`_lock`).css("padding-right",`${0}px`);
    $(`.popup-block__item`).removeClass(`_active`).parent().removeClass(`_active`);   
}

$(`.popup-link`).on(`click`,function(e) {
    const link = $(this).attr(`href`).replace(`#`,``);
    openPop(link);
 
    $(`#${link}`).on(`click`,function(e){
     if(!(e.target.closest(`.popup-block__content`))){
         closePop();
     }
    });
     return false; 
 });
 
 $(`.popup-block__close`).on(`click`,function(){
     closePop();
 });





