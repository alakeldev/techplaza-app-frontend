import React from 'react';
import HeaderImg from '../assets/header.jpg';
import styles from "../styles/Home.module.css";


const Home = () => {
  return (
    <header>
        <div className='container'>
            <div className='rwo'>
                <div className='col-md-8 col-lg-8'>
                    <h2>We provide you Technology and Applications Solutions</h2>
                    <h4>Try our Solutions and make your Life Easier</h4>
                    <button><a href='#'>Read More</a></button>
                </div>
                <div>
                    <img src={HeaderImg} />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Home