window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

function getCurrentInputs() {
  return {
    amount: document.getElementById("loan-amount"),
    years: document.getElementById("loan-years"),
    rate: document.getElementById("loan-rate"),
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const { amount, years, rate } = getCurrentInputs();
  amount.value = "200000";
  years.value = "30";
  rate.value = "2.8";

  const values = {
    amount: amount.value,
    rate: rate.value,
    years: years.value,
  };

  let mountly = calculateMonthlyPayment(values);
  updateMonthly(mountly);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const { amount, years, rate } = getCurrentUIValues();

  const values = {
    amount: amount,
    rate: rate,
    years: years,
  };

  let mountly = calculateMonthlyPayment(values);
  updateMonthly(mountly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = values.rate / 12 / 100; // convert annual rate to monthly and percentage to decimal
  const numberOfPayments = values.years * 12;

  const monthlyPayment =
    (values.amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyElement = document.getElementById("monthly-payment");
  if (monthlyElement) {
    monthlyElement.innerText = monthly;
  }
}
