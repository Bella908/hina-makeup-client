import React from 'react';
import NavBar from '../Pages/Shared/NavBar';
import Home from '../Pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';


const Main = () => {
    return (
        <div>
          <NavBar></NavBar>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );
};

export default Main;