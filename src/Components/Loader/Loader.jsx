import React from "react";
import styles from './Loader.module.css'
import { ThreeDots } from 'react-loader-spinner';

const Loader = ()=> {
    return(
        <>
         <ThreeDots height={100}
                width={100} color="#f2a807"
                outercirclecolor="#4fa94d"
                innercirclecolor="#4fa94d"
                barcolor="#4fa94d"
                arialabel="circles-with-bar-loading" 
                wrapperClass={'justify-content-center'}
                wrapperstyle="{}"
                wrapperclass visible="{true}">
        </ThreeDots>  
        </>
    )
}

export default Loader ;