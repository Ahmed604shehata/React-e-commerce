import React, { useContext, useState } from "react";
import styles from './Login.module.css';
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../Context/Token";
import { Helmet } from "react-helmet";
const Login = ()=> {

    let navigate = useNavigate();

    const [errorMessage , setErrorMessage] = useState("");   // to show data always useState
    const [isLoading , setisLoading] = useState(false);      // to show data always useState
    
    let {setToken} = useContext(TokenContext)

   async function callLogin(reqBody){
       setErrorMessage("");   // at first no message    //delete to say api at first and show error if exist
       setisLoading(true);

     let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, reqBody)
     
     .catch(err => {
        setisLoading(false);
        setErrorMessage(err.response.data.message)
    } );

     if(data.message == "success"){
        localStorage.setItem("userToken" , data.token)
        setToken(data.token)
        navigate('/');
     }
    }

    const validationSchema = Yup.object({   
        email: Yup.string().email("Email is not valid").required("Email is required"),  
        password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/, "Invalid password").required('Password is required'),  
    });  

    const loginForm  =  useFormik({
        initialValues:{ 
            email:"",
            password:"",
        },
        validationSchema,

        onSubmit : callLogin,
    })

    return( 
          <>
        <Helmet>
            <title>Login Page</title>
        </Helmet>
        <div className="w-50 mx-auto my-5 py-5">  
            <h2 className="mb-3">Login Now :</h2>  
        {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : null }
            <form onSubmit={loginForm.handleSubmit}>
            <div className="form-group mb-2">  
                <label htmlFor="Email" className="mb-1">Email</label>  
                <input type="email" id="Email" onBlur={loginForm.handleBlur} value={loginForm.values.email} onChange={loginForm.handleChange}  name="email" className="form-control" />  
            </div> 
            {loginForm.errors.email && loginForm.touched.email ? <div className=" alert alert-danger">{loginForm.errors.email}</div>: null}
            <div className="form-group mb-2">  
                <label htmlFor="Password" className="mb-1">Password</label>  
                <input type="password" id="Password" onBlur={loginForm.handleBlur} value={loginForm.values.password} onChange={loginForm.handleChange}  name="password" className="form-control" />  
            </div>  
            {loginForm.errors.password && loginForm.touched.password ? <div className=" alert alert-danger">{loginForm.errors.password}</div>: null}

            <button className="btn bg-main text-white d-block ms-auto">
                {isLoading ? <i className="fa fa-spinner fa-spin">{isLoading}</i> : "Login" }
                </button>
            </form>  
        </div>  
          </>
    )
}

export default Login ;