document.addEventListener('DOMContentLoaded', function () {
  let screenWidth = window.screen.width;
  let hamburgerBtn = document.querySelector('.header__hamburger_trigger');
  let dropMenu = document.querySelectorAll('.header__drop-btn');

  hamburgerBtn.addEventListener('click', function () {
    let hamburgerSpan = hamburgerBtn.querySelector('span');
    let menu = document.querySelector('.header__Mobilemenu-content');

    menu.classList.toggle('is-active');
    hamburgerSpan.classList.toggle('is-active');
  });

  dropMenu.forEach(el => {
    el.addEventListener('click', function () {
      this.classList.toggle('is-active')
      let parrentElem = this.parentNode;
      parrentElem.querySelector('.header__drop').classList.toggle('is-active');
    });
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      768: {
        centeredSlides: false,
      },
      992: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 0,
        pagination: false,
      },

    }
  });


  if (screenWidth > 765) {
    new WOW().init();
    let wow = new WOW({
      boxClass: 'wow', // default
      animateClass: 'animated', // default
      offset: 0, // default
      mobile: false, // default
      live: true // default
    });
    wow.init();
  }
  


  function changeWindow () {
    if (screenWidth < 992) {
      let subscriptionBlockLastChild = document.querySelectorAll('.subscription__item-last');
      subscriptionBlockLastChild.forEach(el => {
        if (el.classList.contains('subscription__item-last')) {
          el.classList.remove('subscription__item-last');
        }
      });
    }
    
    if (screenWidth < 576) {
      let bannerPicture = document.querySelector('.banner__picture');

      bannerPicture.setAttribute("src", "images/bannerBlock/popcornMobile.png");
    }
  } 

  // window.addEventListener('scroll', function () {
  //   let header = document.querySelector('.header');
    
  //   if(window.pageYOffset > 10) {
  //     header.classList.add('is-active');
  //   }else{
  //     header.classList.remove('is-active');
  //   }
  // });

  window.onresize = function () {
    screenWidth = window.screen.width;
    changeWindow();
  };
  changeWindow ();
});