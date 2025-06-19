// control cart
// [1] this page to send token with product id to details page      
// [2] this page to send token  to cart page          
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext()

// send token in url when add product to cart 
// to know who is the clint
// get from localStorage

// why we use return  not use [async , awiat]?
// - because we work in context  not component

let headers = {
    token : localStorage.getItem("userToken")
}

 // this function send [id  and token] from featureProduct to details product >> in url 
function addToCart(id){                           //function carry id
   return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` ,{productId:id} ,{ headers})
   .then((res)=> res).catch((err)=>err)
}

// getcart
function getCart(){                                                 
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` ,{headers}
    ).then((res)=> res).catch((err)=>err)
 }
 
// delete product
function deleteProductFromCart(id){                                                 
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{headers}
    ).then((res)=> res).catch((err)=>err)
 }

// update product
function updateProductQuantity(id , count){                                                 
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count},{headers}
    ).then((res)=> res).catch((err)=>err)
 }

export default function CartContextProvider(props){

    const[cartId , setCartId] = useState(null)
    const[numOfCartItems , sutNumOfCartItems] = useState(null)

// payment function
function onlinePayment(shippingAddress){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,{shippingAddress},{headers}
    ).then((res)=> res).catch((err)=>err)
}

// bridge
// and to use async & await
async function initialCart(){
    let {data} = await getCart();
    sutNumOfCartItems(data?.numOfCartItems)
    setCartId(data?.data._id)
}

// to get numCartItem
// to get id Cart
useEffect(()=>{
    initialCart();
}, []);

    return <CartContext.Provider value={{addToCart , getCart , onlinePayment , deleteProductFromCart ,updateProductQuantity , numOfCartItems , sutNumOfCartItems}}>{props.children}</CartContext.Provider>
}
 