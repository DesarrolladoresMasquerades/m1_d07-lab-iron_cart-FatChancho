// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity;
  const sub = product.querySelector('.subtotal span');
  sub.innerText = subTotal;
  return subTotal;
}

function calculateAll() {
  let total = 0;
  const product = Array.from(document.getElementsByClassName('product'));
  product.forEach((element) => {
    total += updateSubtotal(element);
  });
  let tValue = document.getElementById('total-value').querySelector('span');
  tValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let father = target.parentNode.parentNode;
  father.remove();
  calculateAll();
}

// ITERATION 5
const create = document.getElementById('create');
create.addEventListener('click', createProduct);

function createProduct() {
  const newProduct = document
    .querySelector('.create-product')
    .querySelector('input').value;
  const newPrecio = document.getElementById('newprecio').value;
  if (newProduct !== '' && newPrecio !== '') {
    const tbody = document.querySelector('tbody');
    let tr = document.createElement('tr');
    tr.classList.add('product');
    let td = document.createElement('td');
    td.classList.add('name');
    let span = document.createElement('span');
    span.innerText = newProduct;
    td.appendChild(span);
    tr.appendChild(td);
    //Delete de input values
    document.querySelector('.create-product').querySelector('input').value = '';
    document.getElementById('newprecio').value = '';
    //------------------------------------//
    const tdp = document.createElement('td');
    tdp.classList.add('price');
    tdp.innerText = '$';
    const spanp = document.createElement('span');
    spanp.innerText = newPrecio;
    tdp.appendChild(spanp);
    tr.appendChild(tdp);
    //---------------------------------------//
    const tdc = document.createElement('td');
    tdc.classList.add('quantity');
    const input = document.createElement('input');
    input.setAttribute('Type', 'number');
    input.setAttribute('Value', '0');
    input.setAttribute('Min', '0');
    input.setAttribute('Placeholder', 'Quantity');
    tdc.appendChild(input);
    tr.appendChild(tdc);
    //-------------------------------------------//
    const tds = document.createElement('td');
    tds.classList.add('subtotal');
    tds.innerText = '$';
    let spans = document.createElement('span');
    spans.innerText = 0;
    tds.appendChild(spans);
    tr.appendChild(tds);
    //------------------------------------------//
    const tdb = document.createElement('td');
    tdb.classList.add('action');
    const button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-remove');
    button.innerText = 'Remove';
    button.addEventListener('click', removeProduct);
    tdb.appendChild(button);
    tr.appendChild(tdb);
    //--------------------------//
    tbody.appendChild(tr);
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const erase = Array.from(document.getElementsByClassName('btn-remove'));
  console.log(erase);
  erase.forEach((element) => {
    element.addEventListener('click', removeProduct);
  });
});
