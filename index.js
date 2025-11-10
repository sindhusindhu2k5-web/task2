const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function getEvaluatedValue() {
  try {
    const expression = display.value.replace(/÷/g, "/").replace(/×/g, "*");
    return eval(expression);
  } catch {
    return NaN;
  }
}

function calculate() {
  try {
    const expression = display.value.replace(/÷/g, "/").replace(/×/g, "*");
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}

function applyLog10() {
  const value = getEvaluatedValue();
  display.value = isNaN(value) || value <= 0 ? "Error" : Math.log10(value).toFixed(6);
}

function applyLn() {
  const value = getEvaluatedValue();
  display.value = isNaN(value) || value <= 0 ? "Error" : Math.log(value).toFixed(6);
}

function toRadians(deg) {
  return (deg * Math.PI) / 180;
}

function applySin() {
  const value = getEvaluatedValue();
  display.value = isNaN(value) ? "Error" : Math.sin(toRadians(value)).toFixed(6);
}

function applyCos() {
  const value = getEvaluatedValue();
  display.value = isNaN(value) ? "Error" : Math.cos(toRadians(value)).toFixed(6);
}

function applyTan() {
  const value = getEvaluatedValue();
  display.value = isNaN(value) ? "Error" : Math.tan(toRadians(value)).toFixed(6);
}

function applyASin() {
  const value = getEvaluatedValue();
  if (isNaN(value) || value < -1 || value > 1) {
    display.value = "Error";
  } else {
    display.value = (Math.asin(value) * 180 / Math.PI).toFixed(6);
  }
}

function applyACos() {
  const value = getEvaluatedValue();
  if (isNaN(value) || value < -1 || value > 1) {
    display.value = "Error";
  } else {
    display.value = (Math.acos(value) * 180 / Math.PI).toFixed(6);
  }
}

function applyATan() {
  const value = getEvaluatedValue();
  display.value = isNaN(value) ? "Error" : (Math.atan(value) * 180 / Math.PI).toFixed(6);
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '%', '.', '(', ')'].includes(key)) {
    append(key);
  } else if (key === "Enter") {
    event.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
