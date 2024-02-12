
const showPassword = document.querySelector(".showPassword");
const passwordRange = document.querySelector(".password-range");
const copyBtn = document.querySelector(".copy-btn");
const passwordStr =
  " 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSRUVWXYZ!@#$%^&*()_+ ";

function generatePassword(passwordLength = 8) {
  let password = "";

  for (i = 0; i < passwordLength; i++) {
    let randomNum = Math.floor(Math.random() * passwordStr.length);
    password += passwordStr[randomNum];
  }
  showPassword.value = password;
  console.log(showPassword.innerHTML);
  document.querySelector(".password-length").innerHTML = `(${passwordLength})`;
}

generatePassword();

passwordRange.addEventListener("change", function (e) {
  generatePassword(e.target.value);
});

copyBtn.addEventListener("click", function () {
  showPassword.select()
  navigator.clipboard.writeText(showPassword.value);
});