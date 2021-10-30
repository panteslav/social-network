import React from 'react';
import styles from './Sidebar.module.css';
import Navbar from './Navbar/Navbar';

const Sidebar = () => {
    return (
        <div className={styles.side}>
            <Navbar />
        </div>
    );
};

export default Sidebar;
