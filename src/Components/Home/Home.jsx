import React from "react";
import styles from './Home.module.css';
import Cart from '../Cart/Cart'
import Categories from "../Categories/Categories";
import MainSlider from "../../HomeComponents/MainSlider/MainSlider";
import CategoriesSlider from "../../HomeComponents/CategoriesSlider/CategoriesSlider";
import { Helmet } from "react-helmet";
import FeatureProducts from "../../HomeComponents/FeatureProducts/FeatureProducts";

const Home = ()=> {
    return(
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <MainSlider/>
            <CategoriesSlider/>
            <FeatureProducts/>
        </>
    )
} 
export default Home ;