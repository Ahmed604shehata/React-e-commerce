import React, { useContext } from "react";
import styles from './FeatureProducts.module.css';
import axios from "axios";
import {Link} from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
export default function FeatureProducts(){

 let {addToCart , sutNumOfCartItems} = useContext(CartContext)

    function getProducts(){ 
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    }

  const { data, error, isLoading , isFetching } = useQuery({  
    queryKey: ['featuredProducts'],  
    queryFn: getProducts,  
  });  

// this function to make addToCart btn not call the context directlly 
// call function and the function call the context after that
 async function addCart(id){
   let res = await addToCart(id)    
        if(res.data.status == "success"){
            toast.success('product added successfully') ;
            sutNumOfCartItems(res.data.numOfCartItems);   
        }else{
            toast.error('product added successfully') ;
        }
  }
    return(
        <>
        <div className="container">
            { isLoading ? <Loader/>:  <div className="row">
                {data?.data?.data.map((ele)=> <div key={ele.id} className="col-lg-2 col-md-4 col-sm-4 my-5">
                        <div className="product px-2 py-3">
                        <Link to={'details/' + ele.id}>
                            <img src={ele.imageCover} alt="" className="w-100" />
                            <p className="text-main" >{ele.category.name}</p>
                            <h3 className="h6">{ele.title.split(" ").slice(0.3).join(" ")}</h3>
                            <div className="d-flex justify-content-between">
                                <p>{ele.price}</p>
                                <p>
                                <i className="fa fa-star rating-color">4.8</i>
                                {ele.ratingAverage}
                                </p>
                            </div>
                        </Link>
                            <button onClick={()=> addCart(ele.id)} className="btn bg-main text-white w-100" >Add to cart</button>
                        </div>
                    </div>
                )}
            </div>
            }
        </div>
        </>
    )
};
