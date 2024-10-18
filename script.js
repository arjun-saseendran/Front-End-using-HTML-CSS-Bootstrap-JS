let row = document.querySelector(".row");
let searchButton = document.querySelector(".btn");
let searchInput = document.querySelector(".form-control");
let products = [];

async function fetchData() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchData().then((data) => {
  products = data;

  products.map((product) => {
    let col = document.createElement("div");
    col.classList.add("col-12", "col-sm-6", "col-md-4", "col-xl-3", "mb-4");

    col.innerHTML = `
        <div class="card">
  <img src=${product.image} class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
    <p class="card-text">$${product.price}</p>
    <a href="#" class="btn btn-success">Add to cart</a>
  </div>
</div>`;

    row.append(col);
  });
});
