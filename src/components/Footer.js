import React from 'react';
import Logo from "../assets/logo.png";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="py-5 mt-5">
            <div className="container text-light text-center">
                <div className="display-6 mb-3"><img src={Logo} alt="website logo" className={styles.Logo} /></div>
                <h6 className='text-black'>IT Support & Innovative Applications</h6>
                <div className="mb-2">
                    <span className="m-2 bg-dark btn btn-outline-black"><a href="https://twitter.com/" rel="noopener noreferrer"
                        target="_blank" aria-label="Twitter - Opens in a new tab"><i
                            className="fa-brands fa-x-twitter text-white fa-2x"></i></a></span>
                    <span className="m-2 bg-dark btn btn-outline-black"><a href="https://hashnode.com/" rel="noopener noreferrer"
                        target="_blank" aria-label="Hashnode - Opens in a new tab"><i
                            className="fa-brands fa-hashnode text-white fa-2x"></i></a></span>
                    <span className="m-2 bg-dark btn btn-outline-black"><a href="https://www.reddit.com/" rel="noopener noreferrer"
                        target="_blank" aria-label="Instagram - Opens in a new tab"><i
                            className="fa-brands fa-reddit text-white fa-2x"></i></a></span>
                    <span className="m-2 bg-dark btn btn-outline-black"><a href="https://github.com/" rel="noopener noreferrer"
                        target="_blank" aria-label="Github - Opens in a new tab"><i
                            className="fa-brands fa-github text-white fa-2x"></i></a></span>
                </div>
                <small className="text-black">TechPlaza Platform. All Rights Reserved © {year} </small>
            </div>
        </footer>
    );
};

export default Footer;
