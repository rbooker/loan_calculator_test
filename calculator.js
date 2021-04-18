var uiValues; //an object that contains the user-input values
var monthlyPayment;//the computed value of the monthly payment
var monthlyPaymentString; //a string that is the monthly payment, in dollars (to the nearest cent)

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  uiValues = getCurrentUIValues;
  uiValues.amount = 100;
  uiValues.years = 1;
  uiValues.rate = 0.1;
  monthlyPaymentString = calculateMonthlyPayment(uiValues);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  uiValues = getCurrentUIValues();
  monthlyPaymentString = calculateMonthlyPayment(uiValues);
  updateMonthly(monthlyPaymentString);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  monthlyPayment = (values.amount * (values.rate/12)) / (1 - Math.pow(1 + (values.rate/12), -(values.years * 12)));
  return (Math.round(monthlyPayment * 100) / 100).toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerHTML = monthly;
}
