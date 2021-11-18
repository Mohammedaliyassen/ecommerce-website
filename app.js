const buy = document.getElementById('numAmount');    
const random = ['images/image-product-1.jpg','images/image-product-2.jpg',
'images/image-product-3.jpg','images/image-product-4.jpg'] 
let previousImg = '';
let currentImg = 0;


document.getElementById('plus').addEventListener('click', ()=>{
    document.getElementById('minus').style.cssText= 'visibility: visible;';
    document.getElementById('buyIt').style.cssText= 'visibility: visible;';
    buy.value = Number (buy.value) + 1;
})
document.getElementById('minus').addEventListener('click', ()=>{
    buy.value = Number (document.getElementById('numAmount').value) - 1;
    if( buy.value <= 0){
        document.getElementById('minus').style.cssText= 'visibility: hidden;';
        document.getElementById('buyIt').style.cssText= 'visibility: hidden;';
        } 
})
document.getElementById('minus').style.cssText= 'visibility: hidden;';
document.getElementById('buyIt').style.cssText= 'visibility: hidden;';

const cart = ()=>{
document.getElementById('moreInfo').classList.toggle('hideInfo');
}
const closeCart = ()=>{
document.getElementById('moreInfo').classList.remove('hideInfo');
}

const openImg = (pic)=>{
    document.getElementById('theBig').src = pic;
    document.getElementById('fullImg').src = pic;
}
const openFullImg = ()=>{
    document.getElementById('imgBox').style.visibility='visible';
}

const closeFullImg = ()=>{
    document.getElementById('imgBox').style.visibility='hidden';
}

document.getElementById('buyIt').addEventListener('click' , ()=>{

    const divProdect = document.createElement("div");
    const img = document.createElement("img");
    const deleteImg = document.createElement("img");
    const title = document.createElement("p");
    const amountIBuy = document.createElement("span");
    const allPrice = document.createElement("span");

    divProdect.appendChild(img) ;
    divProdect.appendChild(title);
    title.appendChild(amountIBuy);
    title.appendChild(allPrice);
    divProdect.appendChild(deleteImg) ;
    
    deleteImg.classList.add('delete');
    divProdect.setAttribute('id','prodectIbuy');
    deleteImg.setAttribute('onclick','deleteThis()');
    img.src='images/image-product-1-thumbnail.jpg';
    deleteImg.src='images/icon-delete.svg';
    deleteImg.setAttribute('id','delete');
    deleteImg.width='10';
    img.width='45';
    title.innerHTML= 'Fall Limited Edition Sneakers <br> $125.00 x '+ buy.value + 
    '<span style="color: black;"> $' + buy.value * 125+'.00 </span>'

    amountIBuy.innerHTML = buy.value;
    allPrice.innerHTML =  '$' + buy.value * 125+'.00';
    title.classList.add('title');
    amountIBuy.setAttribute('id','amountIBuy');
    allPrice.setAttribute('id','allPrice');
    document.getElementById('iBuy').appendChild(divProdect);
    document.getElementById('checkOut').style.cssText="visibility: visible;";
    document.getElementById('empty').style.cssText="visibility: hidden;";
})

const deleteThis= ()=>{
    document.getElementById('prodectIbuy').remove();   
}
const openMenu = ()=>{
    document.getElementById('slideMenu').style.cssText = 'transform: scaleX(1);'
}
const closeMenu = ()=>{
    document.getElementById('slideMenu').style.cssText = 'transform: scaleX(0);'
}

const next = ()=>{
    if(currentImg < 3){
        currentImg = 1 + currentImg;
    }else{
        currentImg = 0;
    }
    // const theimg = Math.floor(Math.random()*(max - min + 1 )+min); //معادلة العشوائية
    document.getElementById('theBig').src = random[currentImg];
    document.getElementById('fullImg').src = random[currentImg];
    console.log(currentImg);
}
const pervice = ()=>{
    if (currentImg > 0){
        currentImg=currentImg-1;
    }else{
        currentImg = 3;
    }
    document.getElementById('theBig').src = random[currentImg];
    document.getElementById('fullImg').src = random[currentImg];
    console.log(currentImg);
}
