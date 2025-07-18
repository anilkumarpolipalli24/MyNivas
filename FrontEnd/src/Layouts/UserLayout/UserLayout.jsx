import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/User/Header/Header';
import Navbar from '../../components/User/Navbar/Navbar';
import Footer from '../../Components/User/Footer/Footer';
import styles from './UserLayout.module.css';

const UserLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;