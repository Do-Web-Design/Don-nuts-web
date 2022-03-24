//sections
const sectionsAll = document.querySelectorAll(".section");
const mainSection = document.querySelector(".main");
const menuSection = document.querySelector(".menu");
const mapSection = document.querySelector(".map");
const footerSection = document.querySelector(".footer");
const paymentSection = document.querySelector(".payment");

//payment
const emptyCard = document.querySelector(".payment__emptyCard");
const shoppingCard = document.querySelector(".payment__shoppingCard--content");

const paymentCardsContainer = document.querySelector(".payment__card--all");
const paymentCards = document.querySelectorAll(".payment__card");

const paymentSummaryDelivery = document.querySelector(
  ".payment__summary--delivery"
);
const paymentSummaryPick = document.querySelector(".payment__summary--pickup");

//totals
const subtotal = document.querySelector(".list-subtotal");
const tip = document.querySelector(".list-tip");
const taxes = document.querySelector(".list-taxes");
const totalPrice = document.querySelector(".list-totals");

const btnMapPick = document.querySelector(".btn-map-pick");
const btnSelectMap = document.querySelectorAll(".btn-select");

const btnAddAll = document.querySelectorAll(".btn-add");

const btnCardAdd = document.querySelectorAll(".btn-card-add");
const btnCardPay = document.querySelectorAll(".btn-card-pay");

const btnMenuAdd = document.querySelectorAll(".btn-add-order");
const btnMenuFeedback = document.querySelectorAll(".add__feedback");

const btnRemoveShoppingCard = document.querySelectorAll(".icon__bin");

const btnMapDelivery = document.querySelector(".btn-map-delivery");
const textSelect = document.querySelectorAll(".text-select");
const selectedLocation = document.querySelectorAll(".selected-location");

//popup add order
const inputPrice = document.querySelector(".input-price");

const btnAddBasket = document.querySelectorAll(".btn-add-order");
const btnFeedback = document.querySelectorAll(".add__feedback");

const textPrice = document.querySelectorAll(".add__number");
const textPriceResults = document.querySelectorAll(".add__result");
const textResultsNumber = document.querySelectorAll(".add__result--number");
const textResultsPrice = document.querySelectorAll(".add__result--price");

const btnPayNow = document.querySelector(".pay-now");
const btnsPaymentNavAll = document.querySelectorAll(".payment__nav");
const paymentTotals = document.querySelector(".payment__totals");

//btn payment nav
const btnPaymentNavShoppingCard = document.querySelector(".payment-number1");
const btnPaymentNavForm = document.querySelector(".payment-number2");
const btnPaymentNavSummary = document.querySelector(".payment-number3");
const btnPaymentNavPaid = document.querySelector(".payment-number4");

//steps of paymenr
const stepsPaymentAll = document.querySelectorAll(".step");
const stepPaymentShoppingCard = document.querySelector(".step-1");
const stepPaymentForm = document.querySelector(".step-2");
const stepPaymentSummary = document.querySelector(".step-3");
const stepPaymentPaid = document.querySelector(".step-4");

//Step Form Nav
const sectionPick = document.querySelector(".pickedUp");
const sectionDelivery = document.querySelector(".delivery");

const btnPaymentFormPickUp = document.querySelector(".btn-pick");
const btnPaymentFormDelivery = document.querySelector(".btn-delivery");

//btns tp go to next step of payment
const btnContinueStepShoppingCard = document.querySelector(
  ".btn-continue-step1"
);
const btnContinueStepForm = document.querySelectorAll(".btn-continue-step2");
const btnBackToStepForm = document.querySelector(".btn-back-step3");

/////////////////////////////////////////////////////////////////////////////////

function activeBtnPayNowTotals() {
  btnPayNow.classList.remove("btn__main--white");
  btnPayNow.classList.add("btn__main--dark");
}

function inactiveBtnPayNowTotals() {
  btnPayNow.classList.add("btn__main--white");
  btnPayNow.classList.remove("btn__main--dark");
}

function activeBtnPaymentNavSteps(btn) {
  btn.classList.remove("payment__nav--inactive");
  btn.classList.add("payment__nav--active");
  btn.firstElementChild.classList.add("hidden");
  btn.lastElementChild.classList.remove("hidden");
}

activeBtnPaymentNavSteps(btnPaymentNavShoppingCard);

function inactiveBtnPaymentNavSteps() {
  for (const el of btnsPaymentNavAll) {
    el.firstElementChild.classList.remove("hidden");
    el.lastElementChild.classList.add("hidden");
    el.classList.add("payment__nav--inactive");
    el.classList.remove("payment__nav--active");
  }
}

function activePaymentNav(btn, st) {
  btn.addEventListener("click", function () {
    for (const el of stepsPaymentAll) {
      paymentTotals.classList.remove("hidden");
      if (btn === btnPaymentNavPaid) paymentTotals.classList.add("hidden");
      el.classList.add("hidden");
      st === stepPaymentSummary
        ? activeBtnPayNowTotals()
        : inactiveBtnPayNowTotals();
    }
    st.classList.remove("hidden");

    inactiveBtnPaymentNavSteps();
  });
}

btnContinueStepShoppingCard.addEventListener("click", function () {
  stepPaymentShoppingCard.classList.add("hidden");
  stepPaymentForm.classList.remove("hidden");

  inactiveBtnPaymentNavSteps();
  activeBtnPaymentNavSteps(btnPaymentNavShoppingCard);
  activeBtnPaymentNavSteps(btnPaymentNavForm);
  inactiveBtnPayNowTotals();

  activePaymentNav(btnPaymentNavShoppingCard, stepPaymentShoppingCard);
  activePaymentNav(btnPaymentNavForm, stepPaymentForm);

  window.scrollTo(0, 0);
});

btnBackToStepForm.addEventListener("click", function () {
  stepPaymentSummary.classList.add("hidden");
  stepPaymentForm.classList.remove("hidden");

  inactiveBtnPaymentNavSteps();
  activeBtnPaymentNavSteps(btnPaymentNavShoppingCard);
  activeBtnPaymentNavSteps(btnPaymentNavForm);
  inactiveBtnPayNowTotals();

  activePaymentNav(btnPaymentNavShoppingCard, stepPaymentShoppingCard);
  activePaymentNav(btnPaymentNavForm, stepPaymentForm);
  activePaymentNav(btnPaymentNavSummary, stepPaymentSummary);

  window.scrollTo(0, 0);
});

btnPayNow.addEventListener("click", function () {
  if (btnPayNow.classList.contains("btn__main--dark")) {
    stepPaymentSummary.classList.add("hidden");
    paymentTotals.classList.add("hidden");
    stepPaymentPaid.classList.remove("hidden");

    activeBtnPaymentNavSteps(btnPaymentNavShoppingCard);
    activeBtnPaymentNavSteps(btnPaymentNavForm);
    activeBtnPaymentNavSteps(btnPaymentNavSummary);
    activeBtnPaymentNavSteps(btnPaymentNavPaid);

    activePaymentNav(btnPaymentNavPaid, stepPaymentPaid);
    cleanInputs();
  }
  window.scrollTo(0, 0);
});

//active pick-up or delivery

function btnPaymentFormNavActive(btn1, btn2) {
  btn1.classList.add("payment__btn--active");
  btn1.classList.remove("payment__btn--inactive");

  btn2.classList.add("payment__btn--inactive");
  btn2.classList.remove("payment__btn--active");
}

btnPaymentFormDelivery.addEventListener("click", function () {
  sectionPick.classList.add("hidden");
  sectionDelivery.classList.remove("hidden");
  paymentSummaryDelivery.classList.remove("hidden");
  paymentSummaryPick.classList.add("hidden");

  btnPaymentFormNavActive(btnPaymentFormDelivery, btnPaymentFormPickUp);
  window.scrollTo(0, 0);
});

btnPaymentFormPickUp.addEventListener("click", function () {
  mapSection.classList.remove("hidden");
  paymentSection.classList.add("hidden");
  footerSection.classList.add("hidden");
  paymentSummaryDelivery.classList.add("hidden");
  paymentSummaryPick.classList.remove("hidden");

  window.scrollTo(0, 0);
});

for (let i = 0; i < btnSelectMap.length; i++) {
  btnSelectMap[i].addEventListener("click", function () {
    mapSection.classList.add("hidden");
    paymentSection.classList.remove("hidden");
    footerSection.classList.remove("hidden");
    sectionPick.classList.remove("hidden");
    sectionDelivery.classList.add("hidden");

    const location = textSelect[i].innerText;
    for (const el of selectedLocation) el.innerText = location;

    btnPaymentFormNavActive(btnPaymentFormPickUp, btnPaymentFormDelivery);
    window.scrollTo(0, 0);
  });
}

btnMapDelivery.addEventListener("click", function () {
  mapSection.classList.add("hidden");
  paymentSection.classList.remove("hidden");
  sectionPick.classList.add("hidden");
  sectionDelivery.classList.remove("hidden");
  paymentSummaryDelivery.classList.remove("hidden");
  paymentSummaryPick.classList.add("hidden");

  btnPaymentFormNavActive(btnPaymentFormDelivery, btnPaymentFormPickUp);
  window.scrollTo(0, 0);
});

////////////////////////////////////////////////////////////////////
//form
////////////////////////////////////////////////////////////////////

function submitForm() {
  for (const el of btnContinueStepForm) {
    el.addEventListener("click", function () {
      stepPaymentForm.classList.add("hidden");
      stepPaymentSummary.classList.remove("hidden");
      inactiveBtnPaymentNavSteps();
      activeBtnPaymentNavSteps(btnPaymentNavShoppingCard);
      activeBtnPaymentNavSteps(btnPaymentNavForm);
      activeBtnPaymentNavSteps(btnPaymentNavSummary);

      activeBtnPayNowTotals();

      activePaymentNav(btnPaymentNavShoppingCard, stepPaymentShoppingCard);
      activePaymentNav(btnPaymentNavForm, stepPaymentForm);
      activePaymentNav(btnPaymentNavSummary, stepPaymentSummary);

      activeBtnPaymentNavSteps(btnPaymentNavShoppingCard);
      inputValue();
      window.scrollTo(0, 0);
    });
  }
}

function inputValue() {
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const firstName = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;

  const phoneSelected = document.querySelector(".phone-selected");
  const emailSelected = document.querySelector(".email-selected");
  const firstNameSelected = document.querySelector(".name-selected");

  const street = document.getElementById("delivery-street").value;
  const num = document.getElementById("delivery-street-num").value;
  const city = document.getElementById("delivery-city").value;
  const state = document.getElementById("delivery-state").value;
  const zip = document.getElementById("delivery-zip").value;

  const streetSelected = document.querySelector(".street-selected");
  const citySelected = document.querySelector(".city-selected");

  phoneSelected.innerHTML = phone;
  emailSelected.innerHTML = email;
  firstNameSelected.innerHTML = firstName + " " + lastName;

  streetSelected.innerHTML = street + " " + num + " " + "St";
  citySelected.innerHTML = city + "," + " " + state + " " + zip;
}

//////////////////////////////////////////////////////////////////////
//totals
//////////////////////////////////////////////////////////////////////

function calculateTotals() {
  const valuesToCount = document.querySelectorAll(".price");

  const arr = [];
  if (arr.length === 0) {
    subtotal.innerText = "0.00";
    tip.innerText = "0.00";
    totalPrice.innerText = "0.00";
  }
  for (const el of valuesToCount) {
    arr.push(Number(el.innerText));

    const sumAll = arr.reduce((a, b) => a + b);
    subtotal.innerText = sumAll.toFixed(2);

    const tipAll = sumAll * 0.15;
    tip.innerText = tipAll.toFixed(2);

    const totalAll = sumAll + tipAll;
    totalPrice.innerText = totalAll.toFixed(2);
  }
}
/////////////////////////////////////////////////////////
// clean inputs
////////////////////////////////////////////////////////

function cleanInputs() {
  const inputsAll = document.getElementsByTagName("input");
  for (let i = 0; i < inputsAll.length; i++) {
    if ((inputsAll[i].type = "text")) {
      inputsAll[i].value = "";
    }
  }
}

///////////////////////////////////////////////////////////////////
//relation card's btns - MENU - payment
///////////////////////////////////////////////////////////////////

const totalShopingCard = document.querySelectorAll(".totals-shop-card");
const totalList = document.querySelectorAll(".list-card");

for (let i = 0; i < btnCardAdd.length; i++) {
  btnCardAdd[i].addEventListener("click", function () {
    btnCardAdd[i].classList.add("hidden");
    btnCardPay[i].classList.remove("hidden");
    btnMenuAdd[i].classList.add("hidden");
    btnMenuFeedback[i].classList.remove("hidden");
    emptyCard.classList.add("hidden");
    shoppingCard.classList.remove("hidden");
    paymentCards[i].classList.remove("hidden");
    totalList[i].classList.remove("hidden");
    totalShopingCard[i].classList.add("price");
    calculateTotals();
  });
}

for (let i = 0; i < 12; i++) {
  btnMenuAdd[i].addEventListener("click", function () {
    btnCardAdd[i].classList.add("hidden");
    btnCardPay[i].classList.remove("hidden");
    btnMenuAdd[i].classList.add("hidden");
    btnMenuFeedback[i].classList.remove("hidden");

    emptyCard.classList.add("hidden");
    shoppingCard.classList.remove("hidden");
    paymentCards[i].classList.remove("hidden");

    totalList[i].classList.remove("hidden");
    totalShopingCard[i].classList.add("price");

    // const inputNumberDiv = document.querySelectorAll(".add__result ");
    // console.log(inputNumberDiv[i]);

    calculateTotals();
  });

  btnRemoveShoppingCard[i].addEventListener("click", function () {
    paymentCards[i].classList.add("hidden");
    btnCardAdd[i].classList.remove("hidden");
    btnCardPay[i].classList.add("hidden");
    btnMenuAdd[i].classList.remove("hidden");
    btnMenuFeedback[i].classList.add("hidden");

    const newArr = [];
    for (const el of paymentCards) {
      if (el.classList.contains("hidden")) newArr.push(el);
    }
    if (newArr.length === paymentCards.length) {
      shoppingCard.classList.add("hidden");
      emptyCard.classList.remove("hidden");
    }
    totalList[i].classList.add("hidden");
    totalShopingCard[i].classList.remove("price");

    calculateTotals();
  });
}

for (let i = 11; i < 24; i++) {
  btnMenuAdd[i].addEventListener("click", function () {
    btnMenuAdd[i].classList.add("hidden");
    btnMenuFeedback[i].classList.remove("hidden");

    emptyCard.classList.add("hidden");
    shoppingCard.classList.remove("hidden");
    paymentCards[i].classList.remove("hidden");

    totalList[i].classList.remove("hidden");
    totalShopingCard[i].classList.add("price");

    calculateTotals();
  });

  btnRemoveShoppingCard[i].addEventListener("click", function () {
    paymentCards[i].classList.add("hidden");
    btnMenuAdd[i].classList.remove("hidden");
    btnMenuFeedback[i].classList.add("hidden");

    const newArr = [];
    for (const el of paymentCards) {
      if (el.classList.contains("hidden")) newArr.push(el);
    }
    if (newArr.length === paymentCards.length) {
      shoppingCard.classList.add("hidden");
      emptyCard.classList.remove("hidden");
    }
    totalList[i].classList.add("hidden");
    totalShopingCard[i].classList.remove("price");

    calculateTotals();
  });
}

// input number

(function () {
  window.inputNumber = function (inputPrice, textRN, textRP, el, price) {
    for (const tN of textRN) tN.innerText = 1;
    for (const tP of textRP) tP.innerText = price.toFixed(2);

    let min = el.attr("min") || false;
    let max = el.attr("max") || false;

    let els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function () {
      init($(this));
    });

    function init(el) {
      els.dec.on("click", decrement);
      els.inc.on("click", increment);

      function decrement() {
        let value = el[0].value;
        value--;
        if (!min || value >= min) {
          el[0].value = value;
        }

        let arr = [];
        arr.push(value);
        let newPrice = (price * arr[0]).toFixed(2);

        for (const alliP of inputPrice) {
          alliP.innerText = newPrice;
          if (arr[0] == 0) alliP.innerText = price.toFixed(2);
          if (arr[0] == 0) textRN.innerText = price.toFixed(2);
        }
        for (const allN of textRN) allN.innerText = value;
        for (const allP of textRP) {
          allP.innerText = newPrice;
          if (newPrice === 0.0) allP.innerText = price.toFixed(2);
        }
        calculateTotals();
      }

      function increment() {
        let value = el[0].value;
        value++;

        if (!max || value <= max) {
          el[0].value = value++;
        }
        let arr = [];

        arr.push(value);
        let newPrice = (price * arr[0] - price).toFixed(2);

        for (const alliP of inputPrice) {
          alliP.innerText = newPrice;
        }

        for (const allN of textRN) allN.innerText = value - 1;
        for (const allP of textRP) allP.innerText = newPrice;

        calculateTotals();
      }
    }
  };
})();

for (let i = 1; i <= 24; i++) {
  inputNumber(
    document.querySelectorAll(".input-price" + i), //changing price with value
    document.querySelectorAll(".textRN" + i), // results of value
    document.querySelectorAll(".textRP" + i), //results of price
    $(".input-number" + i), //value
    parseFloat(document.querySelector(".input-price" + i).innerText) //price for one
  );
}
