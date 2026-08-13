let money = 800000000000n;
const moneyElement = document.querySelector(".money");
const items = document.querySelectorAll(".item");

function updateMoney(){
    moneyElement.textContent = "$"+money.toLocaleString("en-US");
}
items.forEach(function (item){
    const buyButton = item.querySelector(".buy");
    const sellButton = item.querySelector(".sell");
    const quantityInput = item.querySelector(".quantity");
    const costElement = item.querySelector(".cost");
   
  const price = BigInt(costElement.textContent.replace("$","").replace(/,/g,"").trim());
  let quantity = 0;
  buyButton.addEventListener("click", function(){
if(money >= price){
    money -= price;
    quantity++;
    quantityInput.value = quantity;
    updateMoney();
}
else if(money <= 1000){
  swal.fire("leave it man , I also have family and children , :(")
}
else {
  Swal.fire({
  title: "Bruh!!",
  text: "bro , leave it man thats more than enough , where the hell you put this all items",
  imageUrl: "img/items/crying-musk.png",
  imageWidth: 400,
  imageAlt: "alone musk"
});
}
  });
  sellButton.addEventListener("click" , function(){
    if(quantity>0){
        money += price;
        quantity --;
        quantityInput.value = quantity;
        updateMoney();
        buyButton.disabled = false;
    }
  });

});