'use strict';

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

let sliderImage = new Swiper(`.swiper`, {
    // стрелки
    navigation: {
        nextEl: `.image-slider-next.swiper-button-next`,
        prevEl: `.image-slider-prev.swiper-button-prev`,
    },
    /*  pagination: {
         el: `.swiper-pagination`,
          type:`bullets`,
          clickable: true,
          dynamicBullets: true,
  
          renderBullet: function (index, className) {
              return `<span class="` + className + `">` + (index + 1) + `</span>`;
          } ,
         // фракции
           type:'fraction', 
          renderFraction:function(currentClass,totalClass){
              return `Фото <span class="` + currentClass + `"></span>` +
               ` из ` + `<span class=` + totalClass +
                `"></span`;
          }, 
         // Прогрессбар
          type: `progressbar`, 
     }, */
    
    simulateTouch: true,
    touchRatio: 1,
    grabCursor: true,

    slideToClickedSlide: false,
    /* hashNavigation: {
        watchState: true,
    }, */
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
     mousewheel: { //прокрутка колесом мыши
        sensitivity: 1,
/*          eventsTarget: ".image-slider",
 */      }, 
    autoHeight: false, // слайдер подстраивается под высоту контента
    slidesPerView: 3, /// количество слайдом на показ
    watchOverflow: true, //если слайдов меньше чем указано slidesPerView откличает слайдер
    spaceBetween: 20, //Пространство между слайдами
    slidesPerGroup: 1, // количество пролистываемых слайдов
    /* centeredSlides:true, */ // делает слайд по центру
    initialSlide: 1, // стартовый слайд
    /* grid: {
        rows: 1,
    }, *///мультирядность
    loop: true,// бесконечность
    loopedSlides: 3, //кол-во дублирующих слайдов нужно методом тыка вручную узнать нужное значение
    freeMode: false, //включает режим прокрутки без фиксация

    /* autoplay:{
    delay:1000,
    stopOnLastSlide:true,
        disableOnInteraction:false,
    
    }, */
    speed: 800, // скорость прокрутки
    /* direction:`vertical`, */ // вкл вертикальный режим прокрутки

    effect: `slide`, // эффекты переключения слайдов
    /* coverflowEffect:{// дополнение к fade
    rotate:20,
    stretch:50,
    slideShadows:true,
    }, */


    breakpoints: {///адаптив
        280: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
    preloadImages: false,
    watchSlidesProgress: true,// слежка за видимыми слайдами         для значения slidesPerView auto или больше 1
    watchSlidesVisibility: true,// добавление класса видимым слайдам для значения slidesPerView auto или больше 1

    /* zoom:{
        maxRatio:5,// максимальное увеличение
        minRatio:1,// минимальное увеличение
    } */

});

let swiper2 = new Swiper(`.image-in-slider`, {
    grabCursor: true,
    pagination: {
        el: `.swiper-pagination`,
        clickable: true,
    },
    spaceBetween:1,
    navigator:true,
    nested:true, // корректная работа перетаскивания\свайпа для дочернего элемента
});



const textSlider = new Swiper(`.text-slider`,{
slidesPerView:1,
spaceBetween:20,
effect: `slide`,
speed:800,
breakpoints: {///адаптив
    280: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 2,
    },
    992: {
        slidesPerView: 3,
    },
},
slideToClickedSlide: false,

initialSlide: 1,
loop:true,
loopedSlides: 3,
freeMode: false,
});



sliderImage.controller.control = textSlider;
textSlider.controller.control = sliderImage;