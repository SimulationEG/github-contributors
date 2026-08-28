// Mini calculator - the browser version of my C# console Calculator project.
const form = document.getElementById("calc-form");
const output = document.getElementById("calc-result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const first = parseFloat(document.getElementById("num1").value);
  const second = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("op").value;

  if (Number.isNaN(first) || Number.isNaN(second)) {
    show("Invalid input! Please enter two numbers.", true);
    return;
  }

  if (operation === "/" && second === 0) {
    show("Cannot divide by zero!", true);
    return;
  }

  let result;
  switch (operation) {
    case "+": result = first + second; break;
    case "-": result = first - second; break;
    case "*": result = first * second; break;
    case "/": result = first / second; break;
    default:
      show("Invalid operation!", true);
      return;
  }

  show(`${first} ${operation} ${second} = ${Math.round(result * 1e10) / 1e10}`, false);
});

function show(message, isError) {
  output.textContent = message;
  output.classList.toggle("error", isError);
}
