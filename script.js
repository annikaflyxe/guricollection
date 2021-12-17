const urlParams = new URLSearchParams(window.location.search);
const urlId = urlParams.get("id");

/*
const url =
"https://semester2-9155.restdb.io/rest/guricollection";
*/


const url =
"https://semester2-9155.restdb.io/rest/guricollection?apikey=61362a9343cedb6d1f97ed5c&q&fbclid";


//api key
const options = {
headers: {
"x-apikey": "61362a9343cedb6d1f97ed5c&q&fbclid",
},
};

fetch(url, options)
.then((response) => {
if (!response.ok) {
throw Error(response.statusText);
}
return response.json();
})

.then((data) => {
//we have the data
console.log(data);
handleData(data);
})

.catch((e) => {
//woops, something went wrong
console.error("an error occured:"), e.message;
});

function handleData(allData) {
    console.log(allData);
allData.forEach((data) => {
//if (urlId === data._id) {
showProduct(data);
//}
});
}

function showProduct(product) {
console.log(product);
const template = document.querySelector("#smallproductTemplate").content;
//clone it
const copy = template.cloneNode(true);

//name
copy.querySelector(".pricebreadcrumbs .productname").textContent = product.name;
//year
copy.querySelector(".pricebreadcrumbs .price").textContent = product.price;

copy.querySelector("a").href += product._id;

//image
copy.querySelector(".onesmallProduct .hairclaw").src = product.img1;


//grab parent
const parent = document.querySelector(".landingproducts");
//append
parent.appendChild(copy);


}
