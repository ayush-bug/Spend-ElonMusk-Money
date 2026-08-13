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
else{
    alert("bro , leave it man thats more than enough , where the hell you put this all items");
    buyButton.disabled = true;
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