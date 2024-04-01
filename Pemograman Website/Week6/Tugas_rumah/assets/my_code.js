function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLastChar() {
  var displayValue = document.getElementById("display").value;
  document.getElementById("display").value = displayValue.slice(0, -1);
}

function appendValue(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  var result;
  try {
    result = eval(document.getElementById("display").value);
  } catch (error) {
    result = "Error";
  }
  document.getElementById("display").value = result;
}
