import React from 'react';

import './header.css';

const Header = () => {
    return (
        <nav className="header section d-flex">
            <h1 className="logo">
                <a href="#">
                    StarDB    
                </a> 
            </h1> 
            <ul className="header-menu d-flex">
                <li className="header-menu-item">
                    <a href="#">
                        People    
                    </a> 
                </li>
                <li className="header-menu-item">
                    <a href="#">
                        Planets    
                    </a> 
                </li>
                <li className="header-menu-item">
                    <a href="#">
                        Starships    
                    </a> 
                </li>
            </ul> 
        </nav>
    );
}

export default Header;