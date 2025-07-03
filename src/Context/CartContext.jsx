import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext()

let headers = {
    token : localStorage.getItem("userToken")
}


function addToCart(id){                      
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

function onlinePayment(shippingAddress){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,{shippingAddress},{headers}
    ).then((res)=> res).catch((err)=>err)
}


async function initialCart(){
    let {data} = await getCart();
    sutNumOfCartItems(data?.numOfCartItems)
    setCartId(data?.data._id)
}

useEffect(()=>{
    initialCart();
}, []);

    return <CartContext.Provider value={{addToCart , getCart , onlinePayment , deleteProductFromCart ,updateProductQuantity , numOfCartItems , sutNumOfCartItems}}>{props.children}</CartContext.Provider>
}
 
