const url = "https://kea-alt-del.dk/t7/api/brands"



fetch(url)
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleBrandList(data);
  });


function handleBrandList(data) {
    data.sort(function(a,b){
  console.log(data);
  if (a.brandname < b.brandname ) {
      return -1;
  }
  if (a.brandname < b.brandname ) {
    return 1;
}

return 0;
});
  data.forEach(showBrand);
}

function showBrand(product){
    console.log(product)

    // GRAB TEMPLATE
    const template = document.querySelector("#brandTemplate").content;

    //Clone content
    const copy = template.cloneNode(true);

    //Change content
    copy.querySelector("a").href = `productlist.html?brandname=${product.brandname}`;
    copy.querySelector("a").textContent = `${product.brandname}`;


    // Grab Parent
    const parent = document.querySelector(".theBrands");

    //Append
    parent.appendChild(copy);

}

