
import React from 'react';
import styles from '../assets/css/Footer.module.css'
function Footer() {
    return (
        <div className={styles.brandcontact}>
            <div className={styles.brandContacts}>
                <h6>+91 98435-44970</h6>
                <h6>swamyassociates@myyahoo.com</h6>
            </div>
            <div className={styles.BrandName}>
                <h6>Swamy Associates Private Limited</h6>
            </div>
        </div>
    );
}
export default Footer;