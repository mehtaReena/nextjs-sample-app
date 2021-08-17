import React from 'react';
import styles from '../styles/Home.module.css'

function NavBar(props) {
    return (
        <div className={styles.nav} >
           <h2>Ticket Tracker</h2>
        </div>
    );
}

export default NavBar;