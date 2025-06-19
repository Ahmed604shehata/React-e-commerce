import { createContext, useState } from "react";


export let counterContext =  createContext();


export default function CounterContextProvider(props){


    const [counter , setCounter] = useState(10)

    function increase(){
        setCounter(Math.random())
    }


    return<counterContext.Provider value={{counter  , increase}}>{props.children}</counterContext.Provider>

}














// import {createContext} from "react";

// export let counterContext =  createContext();


// export default function counterContextProvider(props){


//     const [counter , setCounter] = useState(10)


//     return <counterContext.Provider value={{counter}} >
//         {props.children }
//         </counterContext.Provider>
// }


















