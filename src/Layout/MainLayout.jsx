import React from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
      <div>
        <nav className="bg-base-100 sticky z-50 top-0">
          <Navbar></Navbar>
        </nav>
        <main className="">
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