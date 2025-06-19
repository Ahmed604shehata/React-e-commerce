import React, { useContext } from "react";
import styles from './Checkout.module.css'
import { useFormik } from "formik";
import { CartContext } from "../../Context/CartContext";
import { Helmet } from "react-helmet";
const Checkout = ()=> {

    let {onlinePayment} = useContext(CartContext)

    // []bredge func to link onlinePayment func by payment func
    async function payment(values){
        console.log('hello from the other side ', values)
       let {data} = await onlinePayment(values)
       console.log(data)
       window.location.href = data.session.url // to change the page after payment
    }

    let formik = useFormik({
        initialValues:{
            "details":"",
            "phone":"",
            "city":"",
        },
        onSubmit:payment
    })
    return(
        <div>
        <Helmet>
            <title>Check Out</title>
        </Helmet>
            <div className="container my-5">
                <div className="mx-auto bg-main-light p-5">
                    <h2>Shipping Address</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group mb-3">
                            <label className="my-1"  htmlFor="details">Details</label>
                            <input type="text" id="details" name="details" value={formik.values.details} onChange={formik.handleChange} className="form-control" />
                        </div>
                        <div className="form-group mb-3 w-100">
                            <label className="my-1"  htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" value={formik.values.phone} onChange={formik.handleChange} className="form-control"/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="my-1"  htmlFor="city">City</label>
                            <input type="text" id="city" name="city" value={formik.values.city} onChange={formik.handleChange} className="form-control"/>
                        </div>
                        <button className="btn bg-main w-100 text-white">Pay Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Checkout ;
