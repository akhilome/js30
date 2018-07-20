// Get all required HTML elements
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
  const suffix = this.dataset.sizing || ''; // get sizing unit from data-* on HTML element
  // set style property of document's root element to the value on the input element
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

