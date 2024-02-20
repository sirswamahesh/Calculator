function inputBox(x) {
  document.getElementById("inputbox").value += x;
}

function clearData(y) {
  document.getElementById("inputbox").value = y;
  document.getElementById("output").value = y;
}

function result() {
  let res = eval(document.getElementById("inputbox").value);
  document.getElementById("output").value = res;
}
