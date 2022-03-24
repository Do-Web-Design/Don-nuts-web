const cards = document.querySelectorAll(".card");

const mainSection = document.querySelector(".main");
const paymentSection = document.querySelector(".payment");

///////////////////////////////////////////////////////////
//slider card -main page
///////////////////////////////////////////////////////////////////

function sliderCards(swiperContainer, next, prev) {
  if (
    window.matchMedia("(min-width : 42.5em)").matches &&
    window.matchMedia("(max-width : 63.75em)").matches
  ) {
    let swiper = new Swiper(swiperContainer, {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });
  } else if (
    window.matchMedia("(min-width : 26.25em)").matches &&
    window.matchMedia("(max-width : 42.5em)").matches
  ) {
    let swiper = new Swiper(swiperContainer, {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      // loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });
  } else if (window.matchMedia("(max-width : 26.25em)").matches) {
    let swiper = new Swiper(swiperContainer, {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      // loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });
  } else {
    let swiper = new Swiper(swiperContainer, {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      // loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });
  }
}

sliderCards(
  document.querySelector(".swiper"),
  document.querySelector(".swiper-button-next"),
  document.querySelector(".swiper-button-prev")
);

///////////////////////////////////////////////////////////////////
//hover card
///////////////////////////////////////////////////////////////////

for (const i of cards) {
  let l = i.nextElementSibling;
  i.addEventListener("mouseenter", function () {
    l.classList.remove("hidden");
  }),
    200;
  l.addEventListener("mouseenter", function () {
    l.classList.remove("hidden");
  }),
    200;
  l.onmouseleave = function () {
    setTimeout(function () {
      l.classList.add("hidden");
    }, 200);
  };

  let btnCardPay = l.lastElementChild;
  let btnCardAdd = btnCardPay.previousElementSibling;

  btnCardAdd.addEventListener("click", function () {
    btnCardAdd.classList.add("hidden");
    btnCardPay.classList.remove("hidden");
  });

  btnCardPay.addEventListener("click", function () {
    mainSection.classList.add("hidden");
    paymentSection.classList.remove("hidden");
  });
}
