import React from "react";
import styles from './Products.module.css';
import FeatureProducts from "../../HomeComponents/FeatureProducts/FeatureProducts"; 
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom'

const Products = ()=> {
    return(
        <>
        <div className="container my-5">
        <Helmet>
            <title>Products</title>
        </Helmet>
        <FeatureProducts/>
        </div>
        </>
    )
}

export default Products ;





















