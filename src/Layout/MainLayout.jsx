import React from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
      <div>
        <nav className="w-full md:w-11/12 lg:w-10/12 mx-auto">
          <Navbar></Navbar>
        </nav>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
        <ToastContainer />
      </div>
    );
};

export default MainLayout;