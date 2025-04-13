function add(param){
    const name=param.getAttribute("name");
    const price=parseFloat(param.getAttribute("price"));
    const img=param.getAttribute("img");
    const item=document.createElement('div');
    item.className="cart_item";
    let quantity=1;
    const quant=document.createElement('span');
    quant.id="quant_span";
    quant.innerHTML=quantity;
    const add=document.createElement('button');
    add.id="add_button";
    add.innerHTML="+";
    add.onclick=function(){
        if(quantity<10){
        quantity+=1;
        quant.innerHTML=quantity;}
        if(quantity==10){
            add.style.display="none";
        }
        calculate();
    }
    const sub=document.createElement('button');
    sub.id="sub_button";
    sub.innerHTML="-";
    sub.onclick=function(){
        if(quantity>0){
            quantity-=1;
            quant.innerHTML=quantity;}
            if(quantity==0){
                item.remove();
                param.style.display="inline-block";
            }
            calculate();
    }
    item.innerHTML=`<h3>${name}</h3><p class="price">${price}</p><img src="${img}" style="width: 6%;">`;
    const cart=document.getElementsByClassName('cart')[0];
    if(cart.innerHTML.trim()=="Blank"){
        cart.innerHTML="";
    }
    item.appendChild(add);
    item.appendChild(quant);
    item.appendChild(sub);
    cart.appendChild(item);
    param.style.display="none";
    calculate();
}
if(document.getElementsByClassName("cart")[0].innerHTML==""){
    document.getElementsByClassName("cart")[0].innerHTML="Blank";
}
function calculate(){
    const items=document.getElementsByClassName('cart_item');
    let totalPrice=0;
    for(let i=0;i<items.length;i++){
        const it=items[i];
        const pr=parseFloat(it.querySelector('.price').innerHTML);
        const qt=parseInt(it.querySelector('#quant_span').innerHTML);
        totalPrice+=pr*qt;
    }
    let tax=totalPrice*0.1;
        let delivery=50;
        let taxPrice=tax+totalPrice+delivery;
    const math=document.getElementsByClassName('math')[0];
    if(!math){
    const math=document.createElement('div');
math.className="math";
document.body.appendChild(math);
math.innerHTML=`<h2>Item Price is ${totalPrice.toFixed(2)}</h2>
<h3>Tax is ${tax.toFixed(2)} <h3>Delivery charge is ${delivery} <h4>Total Price is ${taxPrice.toFixed(2)}`;}
math.innerHTML=`<h2>Item Price is ${totalPrice.toFixed(2)}</h2>
<h3>Tax is ${tax.toFixed(2)} <h3>Delivery charge is ${delivery} <h4>Total Price is ${taxPrice.toFixed(2)}`;
if(totalPrice==0){
    math.style.visibility="hidden";
}
if(totalPrice!=0){
    math.style.visibility="visible";
}
}

let scrollbtn=document.getElementsByClassName('scroll');
for (let i = 0; i < 4 ; i++) {
    scrollbtn[i].addEventListener('click',function () {
        document.querySelectorAll('.meds')[i].scrollLeft+=365;
    });
    
}