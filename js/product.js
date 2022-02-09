const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

// fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page
function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .brand").textContent =
    product.brandname + ".";
  document.querySelector(".breadcrumbs .productName").textContent =
    product.productdisplayname + ".";
  document.querySelector(".purchaseBox h3").textContent =
    product.productdisplayname + ".";
  document.querySelector(".purchaseBox .brandType").textContent =
    product.brandname + " | " + product.productdisplayname + ".";
  document.querySelector(".productItem .subtle").textContent =
    product.brandname + " | " + product.productdisplayname + ".";

  product.productdisplayname;
  document.querySelector(
    "img.productImage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productImage").alt = productdisplayname;

  document.querySelector(".subtle").textContent =
  `${product.articletype} | ${product.brandname}`;

  //document.querySelector(".season").textContent =
  //"season:" +`${product.season}`;
  
}

/*                <p class="subCategory"></p>
                <p class="season"> </p>
                <p class="productionYear"></p>
                <p class="usage"></p> */