import React from 'react';
import ReactDOM from 'react-dom/client';
import './PickImages.css'




import reportWebVitals from './reportWebVitals';

import App1 from './PickImages';
import FilePicker from './FilePicker'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {<App1/>}
   {/* {<FilePicker/>} */}

    
    
    
  </React.StrictMode>
);
















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
