const url = "https://kea-alt-del.dk/t7/api/subcategories"



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
  if (a.subcategory < b.subcategory ) {
      return -1;
  }
  if (a.subcategory < b.subcategory ) {
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
    copy.querySelector("a").setAttribute("href", "productlistsub.html?subcategory=" + product.subcategory);
    copy.querySelector("a").textContent = `${product.subcategory}`;


    // Grab Parent
    const parent = document.querySelector(".theBrands");

    //Append
    parent.appendChild(copy);

}