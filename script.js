const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

const removeProductLinks = document.querySelectorAll('.remove-product');
removeProductLinks.forEach(link => {
        link.addEventListener('click', (event) => {
        event.preventDefault();
        const row = event.target.closest('tr');
        row.remove();
    });
});

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const product = {
      image: button.dataset.image,
      name: button.dataset.name,
      price: button.dataset.price,
    };

    addProductToCart(product);
  });
});

function addProductToCart(product) {
  const cartTable = document.querySelector('#cart tbody');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td><a href="#" class="remove-product">x</a></td>
    <td><img src="${product.image}" alt="${product.name}"></td>
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td><input type="number" value="1"></td>
    <td>${product.price}</td>
  `;

  row.querySelector('.remove-product').addEventListener('click', (event) => {
    event.preventDefault();
    row.remove();
  });

  cartTable.appendChild(row);
}
  

//searching
// const search = ()=>{
//   const searchbox = document.getElementById("search-item").value.toUpperCase();
//   const storeitems = document.getElementById("pro-container")
//   const pro_duct = document.querySelectorAll(".pro")
//   const pname = storeitems.getElementsByTagName("h5")
//   for(var i=0;i<pname.length;i++){
//     let match = pro_duct[i].getElementsByTagName('h5')[0];
//     if(match){
//       let textValue = match.textContent || match.innerHTML
//       if(textValue.toUpperCase().indexOf(searchbox)> -1){
//         pro_duct[i].style.display = "";
//       }
//       else{
//         pro_duct[i].style.display = "none";
//       }
//     }
//   }
// }

// function search() {
//   var input, filter, products, i, txtValue;
//   input = document.getElementById('search-item');
//   filter = input.value.toUpperCase();
//   products = document.querySelectorAll('.pro');

//   for (i = 0; i < products.length; i++) {
//     var title = products[i].querySelector('h5');
//     if (title) {
//       txtValue = title.textContent || title.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         products[i].style.display = "";
//       } else {
//         products[i].style.display = "none";
//       }
//     }
//   }
// }



// Define your products array with objects containing product information
var products = [
  { name: "New Trendy Short Sleeve T-Shirt For Man", url: "sproduct.html" },
  { name: "Summer Stylist T-Shirt - Tshirt For Men - T Shirt For Man", url: "sproduct2.html" },
  { name: "Summer Stylist T-Shirt - Tshirt For Men - T Shirt For Man", url: "sproduct3.html" },
  { name: "Summer Brand New Model full sleeved Tshirt For Men", url: "sproduct4.html" },
  { name: "Stylist T-Shirt For Summer - Tshirt For Men", url: "sproduct5.html" },
  { name: "Summer Brand New Model full sleeved Tshirt For Men", url: "sproduct6.html" },
  { name: "Standard Size Man Fashion Short Sleeve T Shirt Men", url: "sproduct7.html" },
  { name: "New Tshirt Collection 2023 Clothig Summer Collection", url: "sproduct8.html" }
  // Add more products as needed
];

// Function to populate datalist with product suggestions
function populateDatalist() {
  var datalist = document.getElementById('productSuggestions');
  datalist.innerHTML = '';
  products.forEach(function(product) {
      var option = document.createElement('option');
      option.value = product.name;
      datalist.appendChild(option);
  });
}

// Function to filter products based on search input
function filterProducts(searchTerm) {
  var filteredProducts = products.filter(function(product) {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Render filtered products in datalist
  var datalist = document.getElementById('productSuggestions');
  datalist.innerHTML = '';
  filteredProducts.forEach(function(product) {
      var option = document.createElement('option');
      option.value = product.name;
      datalist.appendChild(option);
  });
}

// Function to navigate to product page
function goToProduct(url) {
  window.location.href = url;
}

// Event listener for the search input field
document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('searchInput');
  if (searchInput) {
      populateDatalist(); // Populate datalist initially
      searchInput.addEventListener('input', function(event) {
          var searchTerm = event.target.value;
          filterProducts(searchTerm);
      });

      // Add event listener for enter key press
      searchInput.addEventListener('keydown', function(event) {
          if (event.key === 'Enter') {
              var searchTerm = searchInput.value;
              var product = products.find(function(p) {
                  return p.name.toLowerCase() === searchTerm.toLowerCase();
              });
              if (product) {
                  goToProduct(product.url);
              }
          }
      });
  }
});

// Event listener for the search button
var searchButton = document.getElementById('searchButton');
if (searchButton) {
  searchButton.addEventListener('click', function() {
      var searchTerm = searchInput.value;
      var product = products.find(function(p) {
          return p.name.toLowerCase() === searchTerm.toLowerCase();
      });
      if (product) {
          goToProduct(product.url);
      }
  });
}
