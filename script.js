// const buttons = document.querySelectorAll('.buttons')

let currentExpression = '';

function appendText(text) {
  currentExpression += text;
  document.getElementById('output-1').value = currentExpression;
  console.log(output-1);
}

function clearOutput() {
  currentExpression = '';
  document.getElementById('output-1').value = currentExpression;
  document.getElementById('output-2').value = '';
}

function deleteCharacter() {
  currentExpression = currentExpression.slice(0, -1);
  document.getElementById('output-1').value = currentExpression;
}

function calculateResult() {
  try {
    currentExpression = currentExpression.replace(/%/g, '/100*')
    const result = eval(currentExpression);
    document.getElementById('output-2').value = result;
  } catch (error) {
    document.getElementById('output-2').value = 'Error';
  }
}
