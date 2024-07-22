import React from 'react';
import styles from "../styles/Home.module.css";


const Home = () => {
    return (
        <header className={styles.Landing}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6'>
                        <h1>We provide you Technology and Applications Solutions</h1>
                        <h5>Try our Solutions and make your Life Easier</h5>
                        <button className={styles.BtnSignup}><a href='#'>Register</a></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Home