document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var selectedBook = document.getElementById("book").value;
    var quantity = document.getElementById("quantity").value;
    var name = document.getElementById("name").value;
    var deliveryDate = document.getElementById("deliveryDate").value;
    var address = document.getElementById("address").value;
    var comment = document.getElementById("comment").value;
  
    var orderSummary = document.getElementById("orderSummary");
    orderSummary.innerHTML = name + ", спасибо за заказ. " + quantity + " экземпляр(ов) книги '" + selectedBook + "' будет доставлен " +
    "в " + deliveryDate + " по адресу: " + address + ". Комментарий: " + comment;
});