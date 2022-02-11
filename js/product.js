const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const brandname = urlParams.get("brandname");

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

document.querySelector(".breadcrumbs .productName").textContent = `${product.productdisplayname}  .`;
//document.querySelector(".breadcrumbs .brandnameLink").href = "productlist.html?brandname=" + brandname ;
//document.querySelector(".breadcrumbs .brandnameLink").textContent = `${product.brandname}.`;


  document.querySelector(".purchaseBox h3").textContent = `${product.productdisplayname}  .`;
  document.querySelector(".purchaseBox .brandType").textContent = `${product.brandname}   |   ${product.productdisplayname}.`;
  document.querySelector(".productItem .subtle").textContent =
  `${product.brandname}  |  ${product.productdisplayname}.`;

  if (product.soldout > 0) {
    document.querySelector(".imageDisplay").classList.add("soldOut");
  } else {
    document.querySelector(".imageDisplay").classList.remove("soldOut");
  }

  if (product.soldout > 0) {
    document.querySelector(".purchaseBox").classList.add("soldOutPV");
  } else {
    document.querySelector(".purchaseBox").classList.remove("soldOutPV");
  }


  if (product.discount > 0) {
    document.querySelector(".purchaseBox").classList.add("onSale");
    document.querySelector("span").style.display = "block";
  } else {
    document.querySelector(".discounted").style.display = "none";
    document.querySelector("span").style.display = "none";
  }
 
  
  const newPrice = Math.round(
    product.price - (product.price / 100) * product.discount
  );

  document.querySelector(".discounted p").textContent =
    "On sale for" + " " + `${newPrice}` + ",-" + " " + "DKK.";

  document.querySelector(
    "img.productImage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  document.querySelector("img.productImage").alt = product.productdisplayname;

  document.querySelector(".subtle").textContent =
  `${product.articletype} | ${product.brandname}`;
 document.querySelector(".subCategory").textContent =`Sub-category: ${product.subcategory}.`;
  document.querySelector(".season").textContent =`Season: ${product.season}.`;
  document.querySelector(".productionYear").textContent =`Year of production: ${product.productionyear}.`;
  document.querySelector(".usage").textContent =`Designed for: ${product.usagetype}.`;
}

