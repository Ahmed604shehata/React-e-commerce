import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from './Details.module.css'
import Loader from "../Loader/Loader";
import Slider from "react-slick";
import { CartContext } from "../../Context/CartContext";
import toast, {Toaster} from "react-hot-toast";
import { Helmet } from "react-helmet";

const Details = ()=> {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
     
    const [details , setDetails] = useState({})
    const [isLoading , setIsLoading] = useState(true)
    const [errorMessage , setErrorMessage] = useState("")

    let {addToCart , sutNumOfCartItems} = useContext(CartContext)
    let prams = useParams()
 
    async function getProducts(id){
        setIsLoading(true)
        setErrorMessage("")
       let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
       setDetails(data.data)
       setIsLoading(false)
        .catch(err => {
       setIsLoading(false)
        setErrorMessage(err.response.data.message)
    } );
    }

    async function addCart(id){
        let res = await addToCart(id)             
             if(res.data.status == "success"){
                 toast.success('product added successfully') ;
                 sutNumOfCartItems(res.data.numOfCartItems); 
             }else{
                 toast.error('product added successfully') ;
             }
       }

    useEffect(()=>{
        getProducts(prams.id)
    } , [])
    
return(
    <>
    <Helmet>
        <title>Product Details</title>
    </Helmet>
    <div className={`container ${styles.container_details } my-5`}>
        {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : null }
        { isLoading ? <Loader/> : <div className="row align-items-center">
        <div className="col-md-4 my-5">
            <Slider {...settings} className={styles.slickDots}>
                {details.images.map((ele , index)=> <img key={index} src={ele} alt="" />)}
            </Slider>
        </div>
        <div className="col-md-8 my-5">
            <h2>{details.title}</h2>
            <p>{details.description}</p>
            <p>{details.category.name}</p>
            <div className="d-flex justify-content-between">
                <h5>{details.price} EGP</h5>
                <h5><i className="fa fa-star rating-color"></i>{details.ratingsAverage}</h5>
            </div>
            <button onClick={()=> addCart(details.id)} className="btn bg-main w-100 text-white" >Add To Cart</button>
        </div>
        </div>
        }
    </div>
    </>
    )
}
export default Details ;
