// import React, { useContext, useEffect, useState } from "react";
// import styles from './Brands.module.css';
// import { Helmet } from "react-helmet";
// import axios from "axios";
// import Slider from "react-slick";
// import Loader from "../Loader/Loader";
// const Brands = ()=> {

//         let settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 7,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1000,
//         cssEase: "linear",
//           responsive: [
//     {
//       breakpoint: 997,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         infinite: true,
//       },
//     },
//     {
//       breakpoint: 658, 
//       settings: {
//         slidesToShow: 3, 
//         slidesToScroll: 1,
//         infinite: true,
//       },
//     },
//         {
//       breakpoint: 480, 
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//       },
//     },
//         {
//       breakpoint: 376, 
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//       },
//     }
//   ],
// };


//     const [brands , setBrand] = useState([])
//     const [errorMsg , seterrorMsg] = useState("")
//     const [isLoading , setisLoading] = useState(true)


//    async function getAllBrands(){
//         setisLoading(true)
//         let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)

//         setBrand(data.data)
//         setisLoading(false)
//         .catch((err)=>{
//             setisLoading(false)
//             seterrorMsg(err.response.data.message)
//         })
//     }


//     useEffect(()=>{
//         getAllBrands()
//     } , [])


//     return(
//         <>
//             <Helmet>
//                 <title>Brands Page</title>
//             </Helmet>

//             <div className="container text-start">
//               <h2>All Categories</h2>
//             {errorMsg ? <div className="alert bg-main text-white">{errorMsg}</div> : null}

//             {isLoading ?<Loader/> : 
//                 <Slider {...settings}>
//                     {brands.map(item =><div key={item.id} className="px-1">
//                             <img src={item.image} height="200" className="w-100" alt="" />
//                             <h5>{item.name}</h5>
//                         </div>)}
//                 </Slider> 
//             }
//             </div>
//         </>
//     )
// }

// export default Brands ;