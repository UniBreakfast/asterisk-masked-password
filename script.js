const input = document.querySelector('input');

let value = '';

input.oninput = () => {
  input.parentElement.dataset.mask = input.value.replace(/./g, '*');
}
