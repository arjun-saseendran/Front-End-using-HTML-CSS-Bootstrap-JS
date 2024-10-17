let row = document.querySelector(".row");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const products = data;

    products.map((product) => {
      let col = document.createElement("div");
      col.classList.add("col-12", "col-sm-6", "col-md-4", "col-xl-3");

      col.innerHTML = `
        <div class="card">
  <img src=${product.image} class="card-img-top"  style='height: "200px", objectFit: "contain", padding: "10px"'>
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
    <p class="card-text">$${product.price}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>`;

      row.append(col);
    });
  });
