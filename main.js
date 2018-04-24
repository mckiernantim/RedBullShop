
let productOutput = document.getElementById("display");

let productPic = document.getElementById("product")
let myPromise = axios.get('https://www.redbullshopus.com/products.json')
.then(function(myResponse){
    
    console.log(myResponse.data.products);
    for (i=0;i<myResponse.data.products.length;i++){
        console.log("STARTING LOOP I = "+i)
        let newImg = document.createElement("IMG");
        let newEl = document.createElement("DIV")
        newImg.src =myResponse.data.products[i].images[0].src
        newEl.innerHTML = myResponse.data.products[i].body_html;
        console.log("ELEMENT CREATED");
        document.body.appendChild(newImg);
        document.body.appendChild(newEl);

       
       
    }
    
        // thisImage.src = myResponse.data.products[loopNumber].images[loopNumber].src}?
    });






// for (let i= 0; i<myResponse.data.products.length;i++)
//     // create an element for each iteration
//     //new element  = whatever
//     //new element inner html = .data.products
//     document.createElement
// }





