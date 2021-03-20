import axios from 'axios';
import Noty from 'noty';
import { initAdmin } from './admin';
//const initAdmin=require('./admin')

let addToCart = document.querySelectorAll('.add-to-cart')

let cartCounter=document.querySelector('#cartCounter');
function updateCart(food){
    axios.post('/update-cart', food).then(res => {

        //console.log(res);
        cartCounter.innerText= res.data.totalQty
        new Noty({
            type:'success',
            timeout:1000,
            text:'Item added to Cart',
            progressBar:false,
            layout:'bottomCenter'

        }).show();
    }).catch(err=> {
        new Noty({
            type:'error',
            timeout:1000,
            text:'Something went wrong',
            progressBar:false,
        })
    })
}

addToCart.forEach((btn)=> {
    btn.addEventListener('click', (e)=> {
        let food = JSON.parse(btn.dataset.food);
        updateCart(food)
        console.log(food);
    })
})


//remove alert message after X seconds
const alertMsg = document.querySelector('#success-alert')
if(alertMsg) {
    setTimeout(() => {
        alertMsg.remove()
    }, 2000)
}

initAdmin()