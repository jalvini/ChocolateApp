function buttonPop() {
  document.getElementById("cart").style.visibility = "visible";
  document.getElementById("cart").style.animationDuration = "4s";
  document.getElementById("cart").style.animationName = "cart";

  document.getElementById("whiteout").style.visibility = "visible";
  document.getElementById("whiteout").style.animationDuration = "4s";
  document.getElementById("whiteout").style.animationName = "cart";
}

function button1() {
  console.log("Butonn");
 alert("This Would Lead To Adding Another Item");
}

function button2() {
  alert("This Would Lead To Shopping Cart");
}
function closeFrame() {
  document.getElementById("whiteout").style.animationName = "closeFrame";
  document.getElementById("cart").style.animationName = "closeFrame";
  document.getElementById("whiteout").style.animationDuration = "4s";
}
