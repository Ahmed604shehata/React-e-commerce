// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//for slider 
import "slick-carousel/slick/slick.css";        
import "slick-carousel/slick/slick-theme.css";

import './index.css'
import App from './App.jsx'
import CounterContextProvider from './Context/Counter.jsx'
import TokenContextProvider from './Context/Token.jsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";  
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CartContextProvider from './Context/CartContext.jsx'

let query = new QueryClient();  
const root = createRoot(document.getElementById('root'));  


root.render(  
  <CartContextProvider>
    <QueryClientProvider client={query}>
        <TokenContextProvider>  
      <CounterContextProvider>  
          <App />  
      </CounterContextProvider>  
        </TokenContextProvider>  
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider> 
    </CartContextProvider>
);


































//  const root = createRoot(document.getElementById('root'));
 
// let query = new QueryClient()

//  root.render(
//  <StrictMode>
//   <QueryClientProvider client={query}>
//     <CounterContextProvider>
//       <TokenContextProvider>
//     <App />
//       </TokenContextProvider>
//     </CounterContextProvider>
//     </QueryClientProvider>
//    </StrictMode>
// )
 