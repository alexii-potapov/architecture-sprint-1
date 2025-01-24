import React, { lazy  } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const PopupWithForm = lazy(() => import('common/PopupWithForm').catch(()=> {
    return {default: ()=> <div className='error'>Component Common is not available</div> };
  }) 
);

const App = () => (
  <div className="container">
    <div>Name: profile</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)