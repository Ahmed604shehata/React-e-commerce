import React from "react";
import styles from './MainSlider.module.css'
import Slider from 'react-slick'
import img1 from '../../assets/blog-img-2.jpeg'
import img2 from '../../assets/slider-2.jpeg'
import img3 from '../../assets/slider-image-3.jpeg'
import img4 from '../../assets/slider-image-2.jpeg'
import img5 from '../../assets/slider-image-1.jpeg'
const MainSlider = ()=> {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
      };

    return(
        <>        
        <div className="container mt-3">
        <div className="row">
            <div className="col-md-8  my-5">
                <Slider {...settings}>
                    <img src={img2} alt="" height={545} className="media_img"/>
                    <img src={img1} alt="" height={545} className="media_img"/>
                    <img src={img3} alt="" height={545} className="media_img"/>
                </Slider>
            </div>
            <div className="col-md-4  my-md-5">
                <div >
                <img src={img4} className="w-100 media_right_img" alt="" />
                <img src={img5} className="w-100 media_right_img" alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default MainSlider ;