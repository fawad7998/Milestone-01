const input = document.getElementById('search');
const button = document.getElementById('myButton');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  const inputvalue = input.value;
  if (inputvalue === '') {
    alert('Enter Some Text');
    return;
  }

  const newdiv = document.createElement('div');
  const main = document.createElement('div');
  const deletediv = document.createElement('button');
  const checkbox = document.createElement('input');
  const outputText = document.createElement('div');

  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      outputText.style.textDecoration = 'line-through';
    } else {
      outputText.style.textDecoration = 'none';
    }
  });
  newdiv.className = 'newdiv';
  main.className = 'mainbox';

  outputText.textContent = `${inputvalue}`;

  deletediv.className = 'deletediv';
  deletediv.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  deletediv.addEventListener('click', function () {
    output.removeChild(newdiv);
    output.removeChild(main);
  });

  main.appendChild(checkbox);
  main.appendChild(outputText);
  newdiv.appendChild(main);
  newdiv.appendChild(deletediv);

  output.appendChild(newdiv);

  input.value = '';
});
