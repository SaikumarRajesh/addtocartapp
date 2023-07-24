import { useState } from "react";
import React from "react";

import styles from "./Header.module.css"


const Header = ({ Cartcount }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [istoggleOpen, setIstoggleOpen] = useState(false);

    const toggleopen = () => {
        setIstoggleOpen(!istoggleOpen);
    };

    return (
        <div className={styles.container}>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
                <a className="navbar-brand" href="#n">Start Bootstrap</a>
                <button className="navbar-toggler"
                    type="button" 
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded={istoggleOpen}
                    onClick={() => toggleopen()}
                    aria-label="Toggle navigation"
                    
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${istoggleOpen ? styles.showToggler : ""}`} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item "><a className="nav-link" href="#n">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#n">About</a></li>
                        <li className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}>
                            <a className="nav-link dropdown-toggle"
                                href="#n"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded={isDropdownOpen}
                                onClick={() => toggleDropdown()}
                            >
                                Shop
                            </a>
                            <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`} aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#n">Men</a>
                                <a className="dropdown-item" href="#n">Women</a>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <button className={styles.cartlist} style={{ marginTop: '10px' }}>
                            <i className="fa-solid fa-cart-shopping"></i>
                            &nbsp;
                            Cart
                            ({Cartcount})
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`${styles.header} ${isDropdownOpen ? styles.moveDown : ""}`}>
                <h2>Shop in style</h2>
                <p>With this shop hompeage template</p>
            </div>
        </div>
    );

}

export default Header