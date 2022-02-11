const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");


const url = "https://kea-alt-del.dk/t7/api/products?limit=1000" + brandname;

//

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

/*  <template id="listProductTemplate">
          <article class="sale-item">
            <img src="https://kea-alt-del.dk/t7/images/webp/1000/1163.webp" alt="Sahara Team India Fanwear Round Neck Jersey">
          <h3>t-shirt.</h3>

          <p class="price"><span>Prev.</span> DKK 1595,-</p>
          <div class="discounted">
            <p>Now DKK 1560,-</p>
            <p>-34%</p>
          </div>
          </article>
</template>  */

function showProduct(product) {

  

  console.log(product);
  // grab the template
  const template = document.querySelector("#listProductTemplate").content;
  // clone the template
  const copy = template.cloneNode(true);

  copy
    .querySelector(".productLink").setAttribute("href", `productview.html?id=${product.id}`);

  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent =
    `${product.price}` + ",-" + " " + "DKK.";

copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;


  if (product.soldout > 0) {
    copy.querySelector("article").classList.add("soldOut");
  } else {
    copy.querySelector("article").classList.remove("soldOut");
  }

  if (product.discount > 0) {
    copy.querySelector("article").classList.add("onSale");
    // copy.querySelector("span").style.display = "block";
  } else {
    copy.querySelector(".discounted").style.display = "none";
    // copy.querySelector("span").style.display = "none";
  }

  const newPrice = Math.round(
    product.price - (product.price / 100) * product.discount
  );

  copy.querySelector(".discounted p").textContent =
    "On sale for" + " " + `${newPrice}` + ",-" + " " + "DKK.";

  //change the template content
  const parent = document.querySelector(".productlist");

  // grab parent
  parent.appendChild(copy);

  //append template
}
