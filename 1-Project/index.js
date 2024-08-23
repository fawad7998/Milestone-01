const input = document.getElementById('search');
const button = document.getElementById('myButton');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  const inputvalue = input.value;
  const newdiv = document.createElement('div');
  const deletediv = document.createElement('div');

  newdiv.className = 'newdiv';
  newdiv.textContent = `${inputvalue}`;

  deletediv.className = 'deletediv';
  deletediv.textContent = `delete`;
  newdiv.appendChild(deletediv);
  deletediv.addEventListener('click', function () {
    output.removeChild(newdiv);
  });

  output.appendChild(newdiv, deletediv);
});
