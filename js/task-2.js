const invoice = 50;
const stock = 100;

// Write code under this line
let message;
if (invoice === stock) {
  message = "Заказ оформлен, с вами свяжется менеджер";
}

if (invoice > stock) {
  message = "На складе недостаточно товаров!";
}

if (invoice < stock) {
  message = "Заказ оформлен, с вами свяжется менеджер";
}

console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'
