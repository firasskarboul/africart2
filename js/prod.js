var btn = document.getElementById("add-product");
var shop = document.getElementById("shopp");
btn.addEventListener("click", function () {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'http://www.filltext.com/?rows=2&pretty=true&name={firstName}&price={randomNumber}&country={country}');
  ourRequest.onload =function () {
    var products = JSON.parse(ourRequest.responseText);
    renderHTML(products);
  };
  ourRequest.send();
});
function renderHTML(product) {
  var htmlString = "";

  for (var i = 0; i < product.length; i++) {
    htmlString += "<p>" + product[i].name + " " + product[i].price + " " + product[i].country + ".</p>";
  }

  shop.insertAdjacentHTML('beforeend', htmlString);
}
