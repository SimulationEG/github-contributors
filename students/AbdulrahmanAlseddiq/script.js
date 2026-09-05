(function () {
  var form = document.getElementById("calc-form");
  var result = document.getElementById("calc-result");

  if (!form || !result) {
    return;
  }

  // Same rules as my C# console calculator: four operations,
  // reject invalid numbers, and refuse to divide by zero.
  function calculate(left, op, right) {
    switch (op) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        if (right === 0) {
          throw new Error("Division by zero is not allowed.");
        }
        return left / right;
      default:
        throw new Error("Unsupported operator '" + op + "'.");
    }
  }

  function parseNumber(value, label) {
    var text = String(value).trim();
    var number = Number(text);

    if (text === "" || !isFinite(number)) {
      throw new Error(label + " must be a valid number, e.g. 12 or 3.5.");
    }

    return number;
  }

  function show(message, kind) {
    result.textContent = message;
    result.className = "result " + kind;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var op = document.getElementById("calc-op").value;

    try {
      var left = parseNumber(document.getElementById("calc-a").value, "First number");
      var right = parseNumber(document.getElementById("calc-b").value, "Second number");
      var value = calculate(left, op, right);

      show(left + " " + op + " " + right + " = " + value, "ok");
    } catch (error) {
      show("Error: " + error.message, "error");
    }
  });
})();
