let search = document.querySelector('.search');
let searchBtn =document.querySelector('.searchBtn');
let proName = document.querySelectorAll('.proName');
let proDes = document.querySelectorAll('.proDes');
let proPrice = document.querySelectorAll('.proPrice');
let proImg = document.querySelectorAll('.proImg');
let proName2 = document.querySelectorAll('.proName2');
let proDes2 = document.querySelectorAll('.proDes2');
let proPrice2 = document.querySelectorAll('.proPrice2');
let proImg2 = document.querySelectorAll('.proImg2');
let proName3 = document.querySelectorAll('.proName3');
let proDes3 = document.querySelectorAll('.proDes3');
let proPrice3 = document.querySelectorAll('.proPrice3');
let proImg3 = document.querySelectorAll('.proImg3');
let proName4 = document.querySelectorAll('.proName4');
let proDes4 = document.querySelectorAll('.proDes4');
let proPrice4 = document.querySelectorAll('.proPrice4');
let proImg4 = document.querySelectorAll('.proImg4');
let proName5 = document.querySelectorAll('.proName5');
let proDes5 = document.querySelectorAll('.proDes5');
let proPrice5 = document.querySelectorAll('.proPrice5');
let proImg5 = document.querySelectorAll('.proImg5');



function Search(e){
    fetch(`https://dummyjson.com/products/search?q=${search.value}`)
    .then(res => res.json())
    .then(myData => {

        let proCont = document.getElementById("pro-cont");

        for(i=0;i<myData["products"].length;i++){
            let pro = document.createElement("div");
            let img = document.createElement("img");
            let m3 = document.createElement("div");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
            let priceBtn = document.createElement("div");
            let price = document.createElement("div");
            let btn = document.createElement("div");

            img.src=myData["products"][i]["images"][0];
            h2.textContent=myData["products"][i]["title"];
            p.textContent=myData["products"][i]["description"];
            price.textContent = "$" + myData["products"][i]["price"];
            btn.textContent = "Add to Cart"

            proCont.classList.add("pro-cont", "mx-2", "d-flex", "flex-wrap",  "text-center")
            btn.classList.add("btn","btn-success");
            price.classList.add("proPrice", "prc");
            priceBtn.classList.add("d-flex", "justify-content-around");
            m3.classList.add("m-3");
            h2.classList.add("proName");
            p.classList.add("proDes");
            img.classList.add("proImg", "p-2","srcImg");
            pro.classList.add("srcPro","bg-secondary", "m-1")


            
            priceBtn.appendChild(price);
            priceBtn.appendChild(btn);
            m3.appendChild(h2);
            m3.appendChild(p);
            m3.appendChild(priceBtn);
            pro.appendChild(img);
            pro.appendChild(m3);
            proCont.appendChild(pro);

        }

    }).catch(err =>{
        console.log(err)
    })

    e.preventDefault();
};


searchBtn.addEventListener('click',Search);

fetch('https://dummyjson.com/products?limit=0&skip=0')
.then(data =>{
    return data.json();
}).then(myData =>{

   let newProDes =[];
   let newProName =[];
   let newProImg =[];
   let newProPrice =[];
    for(let i = 0; i<=9; i++){
        newProDes.push(myData["products"][i]["description"]);
        newProName.push(myData["products"][i]["title"]);
        newProPrice.push(myData["products"][i]["price"]);
        newProImg.push(myData["products"][i]["images"][0]);
    };

    for(let i = 0;i<proDes.length; i++){
        proDes[i].textContent=newProDes[i];
        proName[i].textContent=newProName[i];
        proPrice[i].textContent= "$" + newProPrice[i];
        proImg[i].src=newProImg[i];
    }
}).catch(err =>{
    console.log(err);
});


fetch('https://dummyjson.com/products?limit=0&skip=10')
.then(res => res.json())
.then(myData => {


    let newProDes2 =[];
   let newProName2 =[];
   let newProImg2 =[];
   let newProPrice2 =[];
   
    for(let i = 0; i<=9; i++){
        newProDes2.push(myData["products"][i]["description"]);
        newProName2.push(myData["products"][i]["title"]);
        newProPrice2.push(myData["products"][i]["price"]);
        newProImg2.push(myData["products"][i]["images"][0]);
    };

    for(let i = 0;i<proDes2.length; i++){
        proDes2[i].textContent=newProDes2[i];
        proName2[i].textContent=newProName2[i];
        proPrice2[i].textContent= "$" + newProPrice2[i];
        proImg2[i].src=newProImg2[i];
    }

}).catch(err=>{
    console.log(err)
});

fetch('https://dummyjson.com/products?limit=0&skip=25')
.then(res => res.json())
.then(myData => {


    let newProDes3 =[];
   let newProName3 =[];
   let newProImg3 =[];
   let newProPrice3 =[];
   
    for(let i = 0; i<=9; i++){
        newProDes3.push(myData["products"][i]["description"]);
        newProName3.push(myData["products"][i]["title"]);
        newProPrice3.push(myData["products"][i]["price"]);
        newProImg3.push(myData["products"][i]["images"][0]);
    };

    for(let i = 0;i<proDes3.length; i++){
        proDes3[i].textContent=newProDes3[i];
        proName3[i].textContent=newProName3[i];
        proPrice3[i].textContent= "$" + newProPrice3[i];
        proImg3[i].src=newProImg3[i];
    }
}).catch(err=>{
    console.log(err)
});

fetch('https://dummyjson.com/products?limit=0&skip=35')
.then(res => res.json())
.then(myData => {


    let newProDes4 =[];
   let newProName4 =[];
   let newProImg4 =[];
   let newProPrice4=[];
   
    for(let i = 0; i<=49; i++){
        newProDes4.push(myData["products"][i]["description"]);
        newProName4.push(myData["products"][i]["title"]);
        newProPrice4.push(myData["products"][i]["price"]);
        newProImg4.push(myData["products"][i]["images"][0]);
    };

    newProDes4[40] = `Jewelry Type:RingsCertificate 
    Type:NonePlating:Silver PlatedShapeattern:none`;

    for(let i = 0;i<proDes4.length; i++){
        proDes4[i].textContent=newProDes4[i];
        proName4[i].textContent=newProName4[i];
        proPrice4[i].textContent= "$" + newProPrice4[i];
        proImg4[i].src=newProImg4[i];
    }

}).catch(err=>{
    console.log(err)
});

fetch('https://dummyjson.com/products?limit=0&skip=85')
.then(res => res.json())
.then(myData => {


    let newProDes5 =[];
   let newProName5 =[];
   let newProImg5 =[];
   let newProPrice5=[];
   
    for(let i = 0; i<=9; i++){
        newProDes5.push(myData["products"][i]["description"]);
        newProName5.push(myData["products"][i]["title"]);
        newProPrice5.push(myData["products"][i]["price"]);
        newProImg5.push(myData["products"][i]["images"][0]);
    };

    for(let i = 0;i<proDes5.length; i++){
        proDes5[i].textContent=newProDes5[i];
        proName5[i].textContent=newProName5[i];
        proPrice5[i].textContent= "$" + newProPrice5[i];
        proImg5[i].src=newProImg5[i];
    }
}).catch(err=>{
    console.log(err)
});