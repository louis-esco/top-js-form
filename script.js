const form = document.querySelector(".form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");
const country = document.querySelector("#country");
const countryError = document.querySelector("#country + span.error");
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zip + span.error");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const passwordError = document.querySelector(
  "#password-confirmation + span.error"
);

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
  } else {
    showEmailError();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}

country.addEventListener("input", (e) => {
  if (country.validity.valid) {
    countryError.textContent = "";
  } else {
    showCountryError();
  }
});

function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = "You need to enter a country address.";
  }
}

zip.addEventListener("input", (e) => {
  if (zip.validity.valid) {
    zipError.textContent = "";
  } else {
    showZipError();
  }
});

function showZipError() {
  if (zip.validity.valueMissing) {
    zipError.textContent = "You need to enter a ZIP Code.";
  } else if (zip.validity.rangeUnderflow || zip.validity.rangeOverflow) {
    zipError.textContent = `Please enter a 5 characters ZIP Code.`;
  }
}

passwordConfirmation.addEventListener("input", (e) => {
  showPasswordError();
});

function showPasswordError() {
  if (password.value !== passwordConfirmation.value) {
    passwordError.textContent = "Passwords don't match";
  } else {
    passwordError.textContent = "";
  }
}
