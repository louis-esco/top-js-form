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

// Could improve by having a generic function to show or remove error

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    email.className = "";
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
  email.className = "error";
}

country.addEventListener("input", (e) => {
  if (country.validity.valid) {
    countryError.textContent = "";
    country.className = "";
  } else {
    showCountryError();
  }
});

function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = "You need to enter a country address.";
  }
  country.className = "error";
}

zip.addEventListener("input", (e) => {
  if (zip.validity.valid) {
    zipError.textContent = "";
    zip.className = "";
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
  zip.className = "error";
}

passwordConfirmation.addEventListener("input", (e) => {
  showPasswordError();
});

function showPasswordError() {
  if (password.value !== passwordConfirmation.value || password.value === "") {
    passwordError.textContent = "Passwords don't match or are empty";
    password.className = "error";
    passwordConfirmation.className = "error";
  } else {
    passwordError.textContent = "";
    password.className = "";
    passwordConfirmation.className = "";
  }
}

form.addEventListener("submit", (e) => {
  if (
    !email.validity.valid ||
    !country.validity.valid ||
    !zip.validity.valid ||
    password.value !== passwordConfirmation.value
  ) {
    e.preventDefault();
    window.alert("Hmm something seems wrong");
    showEmailError();
    showCountryError();
    showZipError();
    showPasswordError();
  } else {
    window.alert("High five ! All the fields have been correctly filled :)");
  }
});
