// Get all input boxes with the type'checkbox'
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  // make sure shift key is pressed down and the current input field is checked
  if (e.shiftKey && this.checked) {
    // Loop through each input field
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      // check checkbox is current input field
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('In between time!');
      }
      // check the box!
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  // set the value of lastChecked to the current input element
  lastChecked = this;
}

// Listen on each checkbox
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));