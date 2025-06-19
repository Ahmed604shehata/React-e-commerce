import React, { useState } from "react";
import styles from './Register.module.css';
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = ()=> {

    let navigate = useNavigate();

    const [errorMessage , setErrorMessage] = useState(""); 
    const [isLoading , setisLoading] = useState(false);
    
   async function callRegister(reqBody){

       setErrorMessage("");
       setisLoading(true);

     let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, reqBody)
     .catch(err => {
        setisLoading(false);
        setErrorMessage(err.response.data.message)
    } );

     if(data.message == "success"){
        navigate('/login');
     }
    }

    const validationSchema = Yup.object({  
        name: Yup.string().min(3, "Name is too short").max(10, "Name is too long").required("Name is required"),  
        email: Yup.string().email("Email is not valid").required("Email is required"),  
        password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/, "Invalid password").required('Password is required'),  
        rePassword:  Yup.string().oneOf([Yup.ref('password')] , "password and repassword should match").required('Password is required'),
        phone: Yup.string().matches(/^01[0125][0-9]{8}$/, "Invalid phone").required("Phone is required"),  
    });  

  const registerForm  =  useFormik({
        initialValues:{
            name: "",
            email:"",
            password:"",
            rePassword:"",
            phone:""
        },
        validationSchema,

        onSubmit : callRegister,
    })
 
    return( 
        <div className="w-50 mx-auto my-5">  

            <h2 className="mb-3">Register Now :</h2>  

        {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : null }
            
            <form onSubmit={registerForm.handleSubmit}>

            <div className="form-group mb-2">  
                <label htmlFor="fullName" className="mb-1">Full Name</label>  
                <input type="text" id="fullName" onBlur={registerForm.handleBlur} value={registerForm.values.name} onChange={registerForm.handleChange} name="name" className="form-control" />  
            </div>  
            {registerForm.errors.name && registerForm.touched.name ? <div className="alert alert-danger">{registerForm.errors.name}</div>: null}

            <div className="form-group mb-2">  
                <label htmlFor="Email" className="mb-1">Email</label>  
                <input type="email" id="Email" onBlur={registerForm.handleBlur} value={registerForm.values.email} onChange={registerForm.handleChange}  name="email" className="form-control" />  
            </div> 
            {registerForm.errors.email && registerForm.touched.email ? <div className=" alert alert-danger">{registerForm.errors.email}</div>: null}

            <div className="form-group mb-2">  
                <label htmlFor="Password" className="mb-1">Password</label>  
                <input type="password" id="Password" onBlur={registerForm.handleBlur} value={registerForm.values.password} onChange={registerForm.handleChange}  name="password" className="form-control" />  
            </div>  
            {registerForm.errors.password && registerForm.touched.password ? <div className=" alert alert-danger">{registerForm.errors.password}</div>: null}

            <div className="form-group mb-2">  
                <label htmlFor="RePassword" className="mb-1">RePassword</label>  
                <input type="password" id="RePassword" onBlur={registerForm.handleBlur} value={registerForm.values.rePassword} onChange={registerForm.handleChange} name="rePassword" className="form-control" />  
                </div>  
            {registerForm.errors.rePassword && registerForm.touched.rePassword ? <div className=" alert alert-danger">{registerForm.errors.rePassword}</div>: null}
           
            <div className="form-group mb-2">  
                <label htmlFor="Phone" className="mb-1">Phone</label>  
                <input type="tel" id="Phone" onBlur={registerForm.handleBlur} value={registerForm.values.phone} onChange={registerForm.handleChange}  name="phone" className="form-control" />  
            </div>  
            {registerForm.errors.phone && registerForm.touched.phone ? <div className=" alert alert-danger">{registerForm.errors.phone}</div>: null}


            <button className="btn bg-main text-white d-block ms-auto" disabled={!(registerForm.isValid && registerForm.dirty)}>
                {isLoading ? <i className="fa fa-spinner fa-spin">{isLoading}</i> : "Register" }
            </button>

            </form>  
        </div>  
    )
}

export default Register ;
















































