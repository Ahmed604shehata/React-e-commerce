import React from "react";
import styles from './NotFound.module.css'
import notfound from '../../assets/images/notfound.jpeg'
const NotFound = ()=> {
    return(
    <div className="container my-5 pt-5" >
        <img src={notfound} alt="" className="w-100"/>
    </div>
    )
}
export default NotFound ;