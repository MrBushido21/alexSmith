const swiperFirst = new Swiper('.swiper', {
      // If we need pagination
      speed: 800,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
    watchOverflow: true, // если будет не достаточно слайдов он перестанет работать 
  
    spaceBetween: 60, // отступы между слайдами
  
    autoplay: {
      delay: 3000, // пауза между прокруткой
      stopOnLastSlide: true, // закончить на последнем слайде
      disableOnInteraction: true, //отключить после ручного переключания
    },
      
    slidesPerView: 3, // количесвто слайдов 
    slidesPerGroup: 3, // колчиство пролистываемых слайдов

    // // Responsive breakpoints
    breakpoints: {
    //   // when window width is >= 320px
      280: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,
        pagination: {
          el: '.swiper-pagination',
          clickable: true, // переход по клику на булет
        },
      },
      // when window width is >= 480px
      650: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true, // переход по клику на булет
        },
      },

      751: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },

      // when window width is >= 640px
      991: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    }
    
    });

  //================================================================================================================================================
  //-----------------TEXT---------------\

  const points = document.querySelector('.points');
  const dopWords = document.querySelectorAll('.dop');

  console.log(dopWords);
  


  points.addEventListener("click", function(event){
    dopWords.forEach(el => {
      el.classList.toggle('_showWords');
    });
    event.preventDefault();
});
//================================================================================================================================================
//-----------------TEXT---------------\
const burger = document.querySelector('.burger');
const list = document.querySelector('.header__list');
const contact = document.querySelector('.contact');
const body = document.body;
const className = document.querySelectorAll('.tag__name');
const swiper = document.querySelector('.swiper');
const skills = document.querySelectorAll('.skills__technology');
const expericesVectors = document.querySelectorAll('.experices__link-vector');
const expericesItems = document.querySelectorAll('.experices__item');



burger.addEventListener("click", function() {
    list.classList.toggle('_active');
    burger.classList.toggle('_active');
    body.classList.toggle('_lock');
    className.forEach(el => {
      el.classList.toggle('_active')
    });
    swiper.classList.toggle('_active');
    skills.forEach(el => {
      el.classList.toggle('_active')
    });
    expericesVectors.forEach(el => {
      el.classList.toggle('_active')
    });
    expericesItems.forEach(el => {
      el.classList.toggle('_active')
    });
});



contact.addEventListener("click", function() {
    list.classList.remove('_active');
    body.classList.remove('_lock');
    burger.classList.remove('_active');

    swiper.classList.remove('_active');
    className.forEach(el => {
      el.classList.remove('_active')
    });
    skills.forEach(el => {
      el.classList.remove('_active')
    });
    expericesVectors.forEach(el => {
      el.classList.remove('_active')
    });
    expericesItems.forEach(el => {
      el.classList.remove('_active')
    });
});


//================================================================================================================================================
//-----------------TEXT---------------\
const input = document.querySelectorAll('.connection__input');
const textarea = document.querySelector('.connection__textarea');



input.forEach (el => {
  el.addEventListener('focus', function() {
    el.placeholder = ""
    });
})
input[0].addEventListener("blur", function() {
  input[0].placeholder = "Name"
});
input[1].addEventListener("blur", function() {
  input[1].placeholder = "Email"
});
textarea.addEventListener("focus", function() {
  textarea.placeholder = ""
});
textarea.addEventListener("blur", function() {
  textarea.placeholder = "Message"
});