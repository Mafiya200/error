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

const mySlider = new Swiper(`.lorem-dolor`, {
    pagination: {
        el: `.lorem-dolor__pagination`,
        clickable:true,
       
        type: `bullets`,
    },
    effect: `fade`,
    /* дополнение к effect:`fade` == подходит для 1 слайда на странице*/
    loop: true,
   spaceBetween:30,
});
