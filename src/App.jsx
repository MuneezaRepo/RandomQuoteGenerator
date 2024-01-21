import "./App.css";
import React from 'react';
import RandomQuoteGenerator from "./component/RandomQuoteGenerator";
import CopyToClipboard from "./component/CopyToClipboard/CopyToClipboard";
import { Toaster } from 'react-hot-toast';




// Your App component
const App = () => {
  
  return (
   <div>
    <Toaster />
    <RandomQuoteGenerator /> 
    
  
     
   
    
   </div>
  );
};

export default App;

