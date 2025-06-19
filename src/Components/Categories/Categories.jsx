import React from "react";
import styles from './Categories.module.css'
import { Helmet } from "react-helmet";
const Categories = ()=> {
    return(
        <>
        <Helmet>
            <title>Categories</title>
        </Helmet>
    <div className="text-center my-5 p-5">
        <h1 className="p-4">Categories</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut deserunt unde earum minus quae voluptatum quod dolore velit autem dignissimos rem 
            voluptatem vitae tenetur, necessitatibus dicta quis corrupti. Odio
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut deserunt unde earum minus quae voluptatum quod dolore velit autem dignissimos 
            rem voluptatem vitae tenetur,Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut deserunt unde earum minus quae voluptatum quod dolore
             velit autem dignissimos rem voluptatem vitae tenetur, necessitatibus dicta quis corrupti. Odio.
         necessitatibus dicta quis corrupti. Odio
         </p>
    </div>
        </>
    )
}

export default Categories ;