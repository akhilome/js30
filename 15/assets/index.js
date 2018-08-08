const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; // Check if items exist in browser local storage first
const clearAll = document.getElementById('clear-all');
const checkAll = document.getElementById('check-all');
const uncheckAll = document.getElementById('uncheck-all');

function addItem(e) {
  e.preventDefault(); // prevents page from reloading 
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset(); // clears input field
  // console.log(item);
}

function populateList(plates = [], plateList) {
  plateList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}"  ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function clearList() {
  items.splice(0);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function itemCheckState(e) {
  const state = e.target.id === 'check-all' ? true : false;
  items.forEach(item => {
    item.done = state;
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearAll.addEventListener('click', clearList);
checkAll.addEventListener('click', itemCheckState);
uncheckAll.addEventListener('click', itemCheckState);

populateList(items, itemsList);