const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// add to cart button
// const cart = document.querySelectorAll('.cart');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })

}
if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}

// add to  cart function

// let cartItems = [];

// cart.forEach( btn =>{
//     btn.addEventListener('click', () =>{

//      let parentElement = btn.parentElement;

//      const product = {
         
//         name : parentElement.querySelector('.product-name').innerText,
//         image : parentElement.querySelector('.product-img').getAttribute('scr'),
//         price : parentElement.querySelector('.product-price').innerText.replace('$' , ''),
//         quantity : 1

         
//      }

//      let isInCart = cartItems.filter(item => item.id === product.id).length > 0;

//      if(!isInCart){
//         addItemToTheDOM(product)
//      }else{
//         alert('product Already In the Cart')
//      }
     
//      cartItems.push(product);
    

//     })

   
// })

// function addItemToTheDOM(product){
//     cartDOM.insertAdjacetHTML()
// }








