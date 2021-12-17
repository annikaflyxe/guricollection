const urlParams = new URLSearchParams(window.location.search);

const urlId = urlParams.get("id");

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

//console.log(data);

handleData(data);

})



.catch((e) => {

//woops, something went wrong

console.error("an error occured:"), e.message;

});




function handleData(allData) {

    allData.forEach((data) => {
    
    if (urlId == data._id) {
    
    showProduct(data);
    
    }
    
    });
    
    }
    
    
    
    function showProduct(product) {
    
    console.log(product);
    
    
    
   
    
    document.querySelector(".information .price").textContent = product.price;
    
    document.querySelector(".container .productname").textContent =
    
    product.name;
    
    
    
    document.querySelector(".information .info").textContent = product.description;

    document.querySelector(".bread .productname").textContent = product.name;


    document.querySelector(".tour__gallery .productimg").src = product.img1;




    document.querySelector(".tour__gallery .image-item2").src = product.img2;

    document.querySelector(".tour__gallery .image-item3").src = product.img3;

    document.querySelector(".tour__gallery .image-item4").src = product.img4;


    }    