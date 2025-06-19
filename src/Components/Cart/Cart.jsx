import React, { useContext, useEffect, useState } from "react";
import styles from './Cart.module.css';
import { Helmet } from "react-helmet";
import { CartContext } from "../../Context/CartContext";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const Cart = ()=> {
    let {getCart , deleteProductFromCart , updateProductQuantity ,sutNumOfCartItems} = useContext(CartContext)
    const [cartDetails , setCartDetails] = useState({})

// receve products into cart
//Gridge func => getCartDetails  call  getCar [context]
// Why make this ?  to use await and aysnc
   async function getCartDetails(){
      let {data} =  await getCart()
      setCartDetails(data)   
      sutNumOfCartItems(data.numOfCartItems)
    }

// remove item
//Gridge func => removeItem  call  deleteProductFromCart [context]
   async function removeItem(id){
      let {data} =  await deleteProductFromCart(id)
      setCartDetails(data)   
      sutNumOfCartItems(data.numOfCartItems)
    }

// update
//Gridge func => updateCount  call  updateProductQuantity [context]
async function updateCount(id , count){
    let {data} =  await updateProductQuantity(id , count)
    setCartDetails(data)   
  }

    useEffect(()=>{
        getCartDetails()
    } , [])

    return( 
        <>
            <Helmet>
                <title>Cart Page</title>
            </Helmet>
            {cartDetails?.data ? <div className="container my-4">
             <div className="w-75 w-md-100 mx-auto bg-main-light p-5">
                <h1 className="mb-3 h2">Cart Shop</h1>
                <div className="d-flex justify-content-between align-item-center">
                    <h3 className="h5" >Totle Price : <span className="text-main">{cartDetails.data.totalCartPrice } EGP</span></h3>
                    <h3 className="h5" >Totle Cart Item : <span className="text-main">{cartDetails.numOfCartItems}</span></h3>
                </div>
                {cartDetails.data.products.map((ele)=><div key={ele.product._id} className="row py-2 border-bottom">
                    <div className="col-md-2">
                        <img src={ele.product.imageCover} className="w-100" alt="" />
                    </div>
                    <div className="col-md-10 item-content ">
                        <div className="d-flex justify-content-between">
                            <div className="left-side">
                                <h4 className="cart-item-title">{ele.product.title.split(" ").slice(0 , 3).join(' ')}</h4>
                                <p>{ele.price}</p>
                            </div>
                            <div className="right-side">
                                <button className="btn main-btn" onClick={()=>updateCount(ele.product._id ,  ele.count - 1)} >-</button>
                                <span className="mx-3">{ele.count}</span>
                                <button className="btn main-btn" onClick={()=>updateCount(ele.product._id ,  ele.count + 1)} >+</button>
                            </div>
                        </div>
                        <div onClick={()=> removeItem(ele.product._id)} className="btn text-danger p-0">
                            <i className="fa fa-trash-can mx-1"></i>remove
                        </div>
                    </div>
                </div>
               ) }
                <Link className="btn bg-main text-white  w-100 my-5" to={'/checkout'}>Chechout</Link>
             </div>
            </div>:<Loader/>
            }
        </>
    )
}
export default Cart ; 