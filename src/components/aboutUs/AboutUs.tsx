import React from 'react';
import './AboutUs.css'
import aboutUs from '../../assets/AboutCompany.png'

export const AboutUs = () => {
    return (
        <div className={'AboutCompany'}>
            <div className={'About-container'}>
                <div className={'leftSide'}>
                    <img src={aboutUs} alt=""/>
                    <div className={'blue'}></div>
                </div>
                <div className={'rightSide'}>
                    <h3>О компаний</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque blanditiis dolor
                        dolorum est explicabo impedit in iusto laudantium, magnam nesciunt nisi omnis, provident soluta
                        temporibus ut velit, voluptates! Facere!
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias amet consectetur cum
                        cupiditate debitis delectus ea eligendi error esse eum, facilis harum, iure minus quo sed vel
                        vero voluptate.
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet cum iure nisi nulla
                        odit quidem quod reiciendis repellendus saepe totam, ut voluptatem! Adipisci, earum hic
                        necessitatibus nisi quaerat qui.
                    </p>
                </div>
            </div>
        </div>
    );
};
