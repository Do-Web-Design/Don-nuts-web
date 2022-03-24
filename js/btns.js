//sections
const sectionsAll = document.querySelectorAll(".section");
const mainSection = document.querySelector(".main");
const menuSection = document.querySelector(".menu");
const paymentSection = document.querySelector(".payment");
const mapSection = document.querySelector(".map");
const footerSection = document.querySelector(".footer");

//btn
const linkMenu = document.querySelectorAll(".menu-link");
const iconBasket = document.querySelectorAll(".icon-basket");
const btnViewLocation = document.querySelectorAll(".view-location");

//payment steps
const stepsPaymentAll = document.querySelectorAll(".step");
const step1ShoppingCard = document.querySelector(".step-1");
const paymentTotals = document.querySelector(".payment__totals");

//popup nav left
const popupNav = document.querySelector(".popup__nav");
const iconPopupNav = document.querySelector(".nav__icon--menu");
const iconPopupNavClose = document.querySelector(".popup-nav-close");

//poups Add to Order
const closeAddPopup = document.querySelectorAll(".add__icon");
const btnAddToOrderAll = document.querySelectorAll(".btn-add");
const AddPopupAll = document.querySelectorAll(".popup__add");

///////////////////////////////////////////////////////////

//icon Nav -> popup Nav window

iconPopupNav.addEventListener("click", function () {
  popupNav.classList.remove("hidden");
});

iconPopupNavClose.addEventListener("click", function () {
  popupNav.classList.add("hidden");
});

//link menu -> menu section

for (const el of linkMenu) {
  el.addEventListener("click", function () {
    for (const el of sectionsAll) el.classList.add("hidden");
    menuSection.classList.remove("hidden");
    footerSection.classList.remove("hidden");
    for (const l of AddPopupAll) l.classList.add("hidden");

    window.scrollTo(0, 0);
  });
}

//link logo -> main section

const linkLogo = document.querySelectorAll(".logo-link");

for (const el of linkLogo) {
  el.addEventListener("click", function () {
    for (const e of sectionsAll) e.classList.add("hidden");
    mainSection.classList.remove("hidden");

    window.scrollTo(0, 0);
  });
}

//btn shopping card in nav -> payment section

for (const el of iconBasket) {
  el.addEventListener("click", function () {
    for (const e of sectionsAll) e.classList.add("hidden");
    paymentSection.classList.remove("hidden");

    for (const m of stepsPaymentAll) m.classList.add("hidden");
    step1ShoppingCard.classList.remove("hidden");
    paymentTotals.classList.remove("hidden");

    for (const l of AddPopupAll) l.classList.add("hidden");
    // activeBtnPayNav(btnPayment1);

    window.scrollTo(0, 0);
  });
}

///////////////////////////////////////////////////////////////////
//location btn -> map section
///////////////////////////////////////////////////////////////////

for (const el of btnViewLocation) {
  el.addEventListener("click", function () {
    for (const e of sectionsAll) e.classList.add("hidden");
    footerSection.classList.add("hidden");
    mapSection.classList.remove("hidden");

    window.scrollTo(0, 0);
  });
}

///////////////////////////////////////////////////////////////////
//btn Add to order in menu section -> popups Add
///////////////////////////////////////////////////////////////////

for (const el of closeAddPopup) {
  el.addEventListener("click", function () {
    for (const e of AddPopupAll) e.classList.add("hidden");
  });
}

//btns Add to order in menu section

btnAddToOrderAll.forEach((btn, index) => {
  const popup = AddPopupAll[index];
  btn.addEventListener("click", function () {
    popup.classList.remove("hidden");
  });
});
