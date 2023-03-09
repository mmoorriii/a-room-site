'use strict';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
function isWebp() {
   // Проверка поддержки webp
   function testWebP(callback) {
      let imgWebp = new Image();
      imgWebp.onload = webP.onerror = function () {
         callback(imgWebp.height == 2);
      };
      imgWebp.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   // Добавление класса _webp или _no-webp для HTML
   testWebP(function (support) {
      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
   });
}

isWebp();
//------------------------------------------------------------------------------------
$(document).ready(function () {
   $('.slider-preview__body').slick({
      dots: true,
      appendDots: '.slider-preview__pagination',
      appendArrows: '.slider-preview__buttons',
      vertical: true,
      verticalSwiping: true,
      infinite: true,
      slideToScroll: 1,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      waitForAnimate: false,
      pauseOnHover: false,
      asNavFor: '.slider-preview__nav',
   });
   $('.slider-preview__nav').slick({
      arrows: false,
      asNavFor: '.slider-preview__body',
      //fade: true,
      swipe: false,
      //cssEase: 'linear'
   });
   $('.slider-achievements__body').slick({
      appendArrows: '.slider-achievements__buttons',
      fade: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      waitForAnimate: false,
      swipe: false,
      infinite: false,
   });

   //--------COUNTER---------------------------------------------------------------------------------------------------------------
   var count = 1;
   $('.slider-achievements__buttons > .slick-next').click(function () {
      if (count < 5) {
         count++;
         $('.number-item').text('0' + count);
      }
      if (count === 5) {
         $('.slider-achievements__buttons > .slick-next').animate({ 'opacity': 0.2, }, 60, function () {
            $(this).css({
               'cursor': "default",
               'pointer-events': 'none'
            });;
         });
      }
      if (count > 1) {
         $('.slider-achievements__buttons > .slick-prev').animate({ 'opacity': 1 }, 60, function () {
            $(this).css({
               'cursor': "pointer",
               'pointer-events': 'auto'
            });
         });
      }
   });
   $('.slider-achievements__buttons > .slick-prev').click(function () {
      if (count > 1) {
         count--;
         $('.number-item').text('0' + count);
      }
      if (count < 5) {
         $('.slider-achievements__buttons > .slick-next').animate({ 'opacity': 1 }, 60, function () {
            $(this).css({
               'cursor': "pointer",
               'pointer-events': 'auto'
            });
         });
      }
      if (count === 1) {
         $('.slider-achievements__buttons > .slick-prev').animate({ 'opacity': 0.2 }, 60, function () {
            $(this).css({
               'cursor': "default",
               'pointer-events': 'none'
            });
         });
      }
   });
   //-----DROPDOWN--------------------------------------------------------------------------------
   var $openedBlock = null;
   var $defaultBlock = $('#block2'); // выбираем второй блок

   // Делаем второй блок открытым и сохраняем его ссылку
   $defaultBlock.addClass('open').slideDown('slow', function () {
      $openedBlock = $defaultBlock;
   });

   $('.dropdown__item').click(function () {
      var target = $(this).data('target');
      var $targetBlock = $('#' + target);

      // Если уже есть открытое окно, скрыть его и удалить класс 'open'
      if ($openedBlock) {
         $openedBlock.slideUp('slow');
         $('.dropdown__item.active').removeClass('active');
      }

      // Если нажатая кнопка соответствует открытому окну, просто закрыть его
      if ($openedBlock && $targetBlock.is($openedBlock)) {
         $openedBlock = null;
         return;
      }

      // Открыть новое окно
      $targetBlock.slideDown('slow');
      $(this).addClass('active');

      // Сохранить ссылку на открытое окно
      $openedBlock = $targetBlock;
   });

   //----------------------------------------------------------------------------------------------------
   $('.header__menu-burger').click(function () {
      $('.header__navigation, .navigation__list').fadeIn('', function () {
         $(this).addClass('open');
      });
   });

   $('.btn__canceled, .header__navigation').click(function () {
      $('.header__navigation, .navigation__list').fadeOut('', function () {
         $(this).removeClass('open');
      });
   })
});