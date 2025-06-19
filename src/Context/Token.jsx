import React, { createContext, useState } from 'react'; // تم استيراد createContext  

// إنشاء السياق (Context) بشكل صحيح  
export const TokenContext = createContext(null); // تم تصحيح الاسم وتم استخدام createContext  

export default function TokenContextProvider(props) { 

    const [token, setToken] = useState(null);  

    // توفير القيمة (value) التي تحتوي على token و setToken  
    return <TokenContext.Provider value={{token , setToken }}>
         {props.children}
         </TokenContext.Provider> 
}  



