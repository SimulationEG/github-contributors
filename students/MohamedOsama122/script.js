document.addEventListener('DOMContentLoaded', () => {
  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  const opSelect = document.getElementById('op');
  const calcBtn = document.getElementById('calc-btn');
  const resultBox = document.getElementById('calc-result');

  function calculate() {
    const val1 = parseFloat(num1Input.value);
    const val2 = parseFloat(num2Input.value);
    const op = opSelect.value;

    if (isNaN(val1) || isNaN(val2)) {
      resultBox.textContent = 'Error: Please enter valid numbers';
      resultBox.style.color = '#ef4444';
      return;
    }

    resultBox.style.color = '#a5b4fc';
    let res = 0;

    switch (op) {
      case '+':
        res = val1 + val2;
        resultBox.textContent = `Result: ${val1} + ${val2} = ${res}`;
        break;
      case '-':
        res = val1 - val2;
        resultBox.textContent = `Result: ${val1} - ${val2} = ${res}`;
        break;
      case '*':
        res = val1 * val2;
        resultBox.textContent = `Result: ${val1} × ${val2} = ${res}`;
        break;
      case '/':
        if (val2 === 0) {
          resultBox.textContent = 'Error: Division by zero is not allowed';
          resultBox.style.color = '#ef4444';
          return;
        }
        res = val1 / val2;
        resultBox.textContent = `Result: ${val1} ÷ ${val2} = ${res}`;
        break;
      default:
        resultBox.textContent = 'Error: Unknown operator';
        resultBox.style.color = '#ef4444';
    }
  }

  if (calcBtn) {
    calcBtn.addEventListener('click', calculate);
  }
});
