import React , { useContext, useEffect, useState } from "react";
import styles from './NavBar.module.css';
import {Link, useNavigate} from 'react-router-dom'
import logo from '../../assets/images/freshcart-logo.svg' 
import { TokenContext } from "../../Context/Token";
import { CartContext } from "../../Context/CartContext";
import Loader from "../Loader/Loader";
import axios from "axios";

const NavBar = ()=> {
let {token , setToken} = useContext(TokenContext)
let {numOfCartItems} = useContext(CartContext)

   let navigate = useNavigate();

    const [brands , setBrand] = useState([])
    const [errorMsg , seterrorMsg] = useState("")
    const [isLoading , setisLoading] = useState(true)

   async function getAllBrands(){
        setisLoading(true)
        let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)

        setBrand(data.data.slice(0, 14))
        setisLoading(false)
        .catch((err)=>{
            setisLoading(false)
            seterrorMsg(err.response.data.message)
        })
    }

    useEffect(()=>{
        getAllBrands()
    } , [])

   function logOut(){
    localStorage.removeItem("userToken")
    setToken(null);                     
    navigate("/login")                 
   }

return( 
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm">
    <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {token ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" to={'/'}>
                Home
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={'products'}>
                Products
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={'categories'}>
                Categories
            </Link>
            </li>
            <li className="nav-item position-relative">
            <Link className="nav-link"  to={'brands'}>
                <div class="dropdown">
                <button class="btn  p-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Brands
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="content d-flex row">
                        {isLoading ? <Loader/>
                        : brands.map((brand) => <div key={brand.id} className="col-2 m-2 text-center">
                            <a>
                                <img src={brand.image} alt={brand.name} height={70} width={70}  className="bg-main rounded-circle border"/>
                                {brand.name}
                            </a>
                        </div>
                    )}
                    </div>
                </div>
                </div>
            </Link> 
            </li>
        </ul> : null
    }
    <ul className="ms-auto navbar-nav">
        <li className="nav-item align-self-center">
            <i className=" mx-1  fa-brands fa-instagram"></i>
            <i className=" mx-1  fa-brands fa-facebook"></i>
            <i className=" mx-1  fa-brands fa-tiktok"></i>
            <i className=" mx-1  fa-brands fa-linkedin"></i>
            <i className=" mx-1  fa-brands fa-instagram"></i>
        </li>
        {token ? 
                <><li className="nav-item">
                        <button className="nav-link"  onClick={logOut}>
                        Logout
                        </button>
                    </li>
                    <li className="nav-item position-relative">
                        <Link className="nav-link" to={'cart'}>
                            <i className="  fa fa-shopping-cart "></i>
                            <span className=" rounded text-main position-absolute top-0 end-1">{numOfCartItems}</span>
                        </Link>
                    </li></>
                    :<>
                    <li className="nav-item">
                        <Link className="nav-link"  to={'register'}>
                            Register
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"  to={'login'}>
                        Login
                        </Link>
                    </li>
                </>
                }
            </ul>
        </div>
    </div>
</nav>
</>
);
};

export default NavBar; 