import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  
  RouterProvider,
} from "react-router-dom";

import './index.css'
import router from './Routs/Routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
    <React.StrictMode>
      <AuthProvider>
        
   <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>
  </div>
)
