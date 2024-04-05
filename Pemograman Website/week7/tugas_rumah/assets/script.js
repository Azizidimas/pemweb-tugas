document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    var name = document.getElementById("name").value.trim();
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value.trim();
    var nameError = document.getElementById("nameError");
    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var isValid = true;

    // Validasi nama
    if (name === "") {
      isValid = false;
      addErrorClass("name");
      nameError.innerText = "Nama tidak boleh kosong";
    } else {
      removeErrorClass("name");
      nameError.innerText = "";
    }

    // Validasi username
    if (username === "") {
      isValid = false;
      addErrorClass("username");
      usernameError.innerText = "Username tidak boleh kosong";
    } else {
      removeErrorClass("username");
      usernameError.innerText = "";
    }

    // Validasi email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      addErrorClass("email");
      emailError.innerText = "Email tidak valid";
    } else {
      removeErrorClass("email");
      emailError.innerText = "";
    }

    // Validasi password
    if (password.length < 6) {
      isValid = false;
      addErrorClass("password");
      passwordError.innerText =
        "Password harus terdiri dari minimal 6 karakter";
    } else {
      removeErrorClass("password");
      passwordError.innerText = "";
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

function resetForm() {
  document.getElementById("registrationForm").reset();
  var inputs = document.querySelectorAll(
    'input[type="text"], input[type="email"], input[type="password"], input[type="tel"]'
  );
  inputs.forEach(function (input) {
    input.classList.remove("error");
    var errorElement = input.nextElementSibling;
    if (errorElement.classList.contains("error-message")) {
      errorElement.innerText = "";
    }
  });
}

function addErrorClass(inputId) {
  document.getElementById(inputId).classList.add("error");
}

function removeErrorClass(inputId) {
  document.getElementById(inputId).classList.remove("error");
}
