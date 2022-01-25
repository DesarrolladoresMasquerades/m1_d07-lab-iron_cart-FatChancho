// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price').innerText;
  price = price.split('$');
  price = price[1].split('.');
  const quantity = product.querySelector('.quantity input').value;

  const subTotal = Number(price[0]) * quantity;
  const sub = product.querySelector('.subtotal span');
  sub.innerText = subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  //it runs when only iteration 1 is completed. at later point, it can be removed.
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
  //... your code goes here
  let father = target.parentNode.parentNode;
  console.log(father);
  father.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const erase = Array.from(document.getElementsByClassName('btn-remove'));
  console.log(erase);
  erase.forEach((element) => {
    element.addEventListener('click', removeProduct);
  });

  //... your code goes here
});
