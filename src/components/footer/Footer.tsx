import React from 'react';
import './Footer.css'

export const Footer = () => {
    return (

        <div className="footer">
            <div className="roww">
                INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh
            </div>
            <div className="roww">
                <ul className={'ul'}>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </div>
        </div>
    );
};

