

// function to load products.json

function loadProducts (){
  var products = JSON.parse(this.responseText);
  var productsDiv = document.getElementById("products");

}

var myRequestProducts = new XMLHttpRequest();


myRequestProducts.addEventListener("load", loadProducts);
myRequestProducts.open("GET", "products.json");
myRequestProducts.send();


//function to load categories.json

function loadCategories (){
  var categories = JSON.parse(this.responseText);
  var CategoriesDiv = document.getElementById("categories");
}

var myRequestCategories = new XMLHttpRequest();

myRequestCategories.addEventListener("load", loadCategories);
myRequestCategories.open("GET", "categories.json");
myRequestCategories.send();




