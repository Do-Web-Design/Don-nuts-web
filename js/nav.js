//header elements
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
const navBg = document.querySelector(".nav__background");
const navLogo = document.querySelector(".nav__logo");
const navBasket = document.querySelector(".nav__icon--basket");

///////////////////////////////////////////////////////////////////
//sticky nav
///////////////////////////////////////////////////////////////////

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    navBg.classList.add("hidden");
    navLogo.classList.remove("hidden");
    navBasket.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
    navBg.classList.remove("hidden");
    navLogo.classList.add("hidden");
    navBasket.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
