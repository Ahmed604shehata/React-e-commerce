import React, { useEffect, useState } from "react";
import styles from './CategoriesSlider.module.css'
import Slider from "react-slick";
import axios from 'axios'
import Loader from "../../Components/Loader/Loader";

const CategoriesSlider = ()=> {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: "linear",
          responsive: [
    {
      breakpoint: 997,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 658, 
      settings: {
        slidesToShow: 3, 
        slidesToScroll: 1,
        infinite: true,
      },
    },
        {
      breakpoint: 480, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
        {
      breakpoint: 376, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    }
  ],
};

    const [categories , setCategories] = useState([])
    const [errorMsg , seterrorMsg] = useState("")
    const [isLoading , setIsLoading] = useState(false)


    async function getCategories(){
        setIsLoading(false)
        seterrorMsg("")
      let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
      setCategories(data.data)
        .catch((error) => {
        seterrorMsg(error.response.data.message);
        setIsLoading(false);
      });
    }

    useEffect(()=>{
        getCategories()
    } , [] )

    return(
        <>
          <div className="container text-start">
            <h2>All Categories</h2>
          {errorMsg ? <div className="alert bg-main text-white">{errorMsg}</div> : null}
          {isLoading ?<Loader/> : 
              <Slider {...settings}>
                  {categories.map(item =><div className="px-1">
                          <img src={item.image} height="200" className="w-100" alt="" />
                          <h5>{item.name}</h5>
                      </div>)}
              </Slider> 
          }
          </div>
        </>
    )
}
export default CategoriesSlider ;