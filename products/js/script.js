let search = document.querySelector('.search');
let searchBtn =document.querySelector('.searchBtn');
let proName1 = document.querySelector('.proName1');
let proDes1 = document.querySelector('.proDes1');
let proPrice1 = document.querySelector('.proPrice1');
let proImg1 = document.querySelector('.proImg1');
let proName2 = document.querySelector('.proName2');
let proDes2 = document.querySelector('.proDes2');
let proPrice2 = document.querySelector('.proPrice2');
let proImg2 = document.querySelector('.proImg2');
let proName3 = document.querySelector('.proName3');
let proDes3 = document.querySelector('.proDes3');
let proPrice3 = document.querySelector('.proPrice3');
let proImg3 = document.querySelector('.proImg3');
let proName4 = document.querySelector('.proName4');
let proDes4 = document.querySelector('.proDes4');
let proPrice4 = document.querySelector('.proPrice4');
let proImg4 = document.querySelector('.proImg4');
let proName5 = document.querySelector('.proName5');
let proDes5 = document.querySelector('.proDes5');
let proPrice5 = document.querySelector('.proPrice5');
let proImg5 = document.querySelector('.proImg5');
let proName6 = document.querySelector('.proName6');
let proDes6 = document.querySelector('.proDes6');
let proPrice6 = document.querySelector('.proPrice6');
let proImg6 = document.querySelector('.proImg6');


function Search(e){
    fetch(`https://dummyjson.com/products/search?q=${search.value}`)
    .then(res => res.json())
    .then(myData => {

        console.log(myData);
    }).catch(err =>{
        console.log(err)
    })

    e.preventDefault();
};
searchBtn.addEventListener('click',Search)

fetch('https://dummyjson.com/products?limit=0&skip=0')
.then(data =>{
    return data.json();
}).then(myData =>{

    proName1.textContent = myData["products"][0]["title"];
    proDes1.textContent = myData["products"][0]["description"];
    proPrice1.textContent = "$ " + myData["products"][0]["price"];
    proImg1.src= myData["products"][0]["images"][0];
    proName2.textContent = myData["products"][1]["title"];
    proDes2.textContent = myData["products"][1]["description"];
    proPrice2.textContent = "$ " + myData["products"][1]["price"];
    proImg2.src = myData["products"][1]["images"][0]; 
    proName3.textContent = myData["products"][4]["title"];
    proDes3.textContent = myData["products"][4]["description"];
    proPrice3.textContent = "$ " + myData["products"][4]["price"];
    proImg3.src= myData["products"][4]["images"][0];
    proName4.textContent = myData["products"][3]["title"];
    proDes4.textContent = myData["products"][3]["description"];
    proPrice4.textContent = "$ " + myData["products"][3]["price"];
    proImg4.src = myData["products"][3]["images"][0]; 
    proName5.textContent = myData["products"][8]["title"];
    proDes5.textContent = myData["products"][8]["description"];
    proPrice5.textContent = "$ " + myData["products"][8]["price"];
    proImg5.src= myData["products"][8]["images"][0];
    proName6.textContent = myData["products"][6]["title"];
    proDes6.textContent = myData["products"][6]["description"];
    proPrice6.textContent = "$ " + myData["products"][6]["price"];
    proImg6.src = myData["products"][6]["images"][0]; 

    console.log(myData)
}).catch(err =>{
    console.log(err);
});