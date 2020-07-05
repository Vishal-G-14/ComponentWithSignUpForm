function firstValidate() {
  var x = document.fvali.fname;
  var fnum = x.value;
  var flen = x.value.length;
  if (flen == 0) {
    document.getElementById("demo-1").classList.add("invalid-feedback");
    document.getElementById("demo-1").innerHTML =
      "FirstName should not be Empty";
    document.getElementById("forfirstname").classList.add("is-invalid");
    x.focus();
    return false;
  } else if (!isNaN(fnum)) {
    document.getElementById("demo-1").classList.add("invalid-feedback");
    document.getElementById("demo-1").innerHTML =
      "It looks like you have entered a number";
    document.getElementById("forfirstname").classList.add("is-invalid");
  } else {
    document.getElementById("demo-1").classList.remove("invalid-feedback");
    document.getElementById("demo-1").innerHTML = "";
    document.getElementById("forfirstname").classList.remove("is-invalid");
    document.getElementById("forfirstname").classList.add("is-valid");
    return true;
  }
}
function lastValidate() {
  var x = document.fvali.lname;
  var lnum = x.value;
  var llen = x.value.length;
  if (llen == 0) {
    document.getElementById("demo-2").classList.add("invalid-feedback");
    document.getElementById("demo-2").innerHTML =
      "LastName should not be Empty";
    document.getElementById("forlastname").classList.add("is-invalid");
    x.focus();
    return false;
  } else if (!isNaN(lnum)) {
    document.getElementById("demo-2").classList.add("invalid-feedback");
    document.getElementById("demo-2").innerHTML =
      "It looks like you have entered a number";
    document.getElementById("forlastname").classList.add("is-invalid");
  } else {
    document.getElementById("demo-2").classList.remove("invalid-feedback");
    document.getElementById("demo-2").innerHTML = "";
    document.getElementById("forlastname").classList.remove("is-invalid");
    document.getElementById("forlastname").classList.add("is-valid");
    return true;
  }
}

function emailValidate() {
  var x = document.fvali.elemail;
  var elenum = x.value;
  var emailmatch = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
  if (x.value.match(emailmatch)) {
    document.getElementById("demo-3").classList.remove("invalid-feedback");
    document.getElementById("demo-3").innerHTML = "";
    document.getElementById("foremail").classList.remove("is-invalid");
    document.getElementById("foremail").classList.add("is-valid");
    return true;
  } else if (!isNaN(elenum)) {
    document.getElementById("demo-3").classList.add("invalid-feedback");
    document.getElementById("demo-3").innerHTML =
      "It looks like you have entered a number";
    document.getElementById("foremail").classList.add("is-invalid");
  } else {
    document.getElementById("demo-3").classList.add("invalid-feedback");
    document.getElementById("demo-3").innerHTML =
      "Looks like this is not a Email";
    document.getElementById("foremail").classList.add("is-invalid");
    x.focus();
    return false;
  }
}

function passValidate() {
  var x = document.fvali.pass;
  var passlen = x.value.length;
  if (passlen == 0) {
    document.getElementById("demo-4").classList.add("invalid-feedback");
    document.getElementById("demo-4").innerHTML =
      "Password Field Should Not Be Empty";
    document.getElementById("forpass").classList.add("is-invalid");
    x.focus();
    return false;
  } else {
    document.getElementById("demo-4").classList.remove("invalid-feedback");
    document.getElementById("demo-4").innerHTML = "";
    document.getElementById("forpass").classList.remove("is-invalid");
    document.getElementById("forpass").classList.add("is-valid");
    return true;
  }
}

function submitValidate() {
  var w = document.fvali.fname;
  var flen = w.value.length;
  var x = document.fvali.lname;
  var llen = x.value.length;
  var y = document.fvali.elemail;
  var elelen = y.value.length;
  var z = document.fvali.pass;
  var passlen = x.value.length;

  if (flen == 0 && llen == 0 && elelen == 0 && passlen == 0) {
    document.getElementById("demo-1").classList.add("invalid-feedback");
    document.getElementById("demo-1").innerHTML =
      "FirstName should not be Empty";
    document.getElementById("forfirstname").classList.add("is-invalid");
    document.getElementById("demo-2").classList.add("invalid-feedback");
    document.getElementById("demo-2").innerHTML =
      "LastName should not be Empty";
    document.getElementById("forlastname").classList.add("is-invalid");
    document.getElementById("demo-3").classList.add("invalid-feedback");
    document.getElementById("demo-3").innerHTML =
      "Email field should not be empty";
    document.getElementById("foremail").classList.add("is-invalid");
    document.getElementById("demo-4").classList.add("invalid-feedback");
    document.getElementById("demo-4").innerHTML =
      "Password Field Should Not Be Empty";
    document.getElementById("forpass").classList.add("is-invalid");
    return false;
  } else if (flen == 0) {
    firstValidate();
    return false;
  } else if (llen == 0) {
    lastValidate();
    return false;
  } else if (elelen == 0) {
    emailValidate();
    return false;
  } else if (passlen == 0) {
    passValidate();
    return false;
  }
}
