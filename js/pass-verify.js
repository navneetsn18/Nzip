var pass1 = document.forms['vform']['password'];
var pass2 = document.forms['vform']['re-password'];
var password_error = document.getElementById('password_error');
pass1.addEventListener('blur', passwordVerify, true);
function Validate() {
  if (pass1.value == "") {
    document.getElementById('password_div').style.color = "crimson";
    password_error.textContent = "Password is required";
    pass1.focus();
    return false;
  }
  if (pass1.value != pass2.value) {
    password_error.innerHTML = "The two passwords do not match";
    document.getElementById('pass_confirm_div').style.color = "crimson";
    return false;
  }
}
function passwordVerify() {
  if (pass1.value != "") {
    password_error.innerHTML = "";
    return true;
  }
  if (pass1.value === pass2.value) {
    pass2.innerHTML = "";
    return true;
  }
}
