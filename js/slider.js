const cards = document.querySelectorAll(".card");

const mainSection = document.querySelector(".main");
const paymentSection = document.querySelector(".payment");

///////////////////////////////////////////////////////////
//slider card -main page
///////////////////////////////////////////////////////////////////

function sliderCards(swiperContainer, next, prev) {
  let swiper = new Swiper(swiperContainer, {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: next,
      prevEl: prev,
    },

    breakpoints: {
      560: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      740: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1020: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
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
