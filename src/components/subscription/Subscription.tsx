import React from 'react';
import './Subscription.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


export function Subscription() {

    return (
        <div>
            <section id="pricing" className="pricing-content section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <h1 >Pricing Plan</h1>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
                            <div className="single-pricing">
                                <div className="price-head">
                                    <h2>Oil and Gas</h2>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h1 className="price">$49</h1>
                                <h5>Monthly</h5>
                                <ul>
                                    <li>10 website</li>
                                    <li>50GB Disk Space</li>
                                    <li>50 Email Accounts</li>
                                    <li>50GB Monthly Bandwidth</li>
                                    <li>10 Subdomains</li>
                                </ul>
                                <Link to={'/payment/oilandgas'}>Get start</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                            <div className="single-pricing">
                                <div className="price-head">
                                    <h2>Construction</h2>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h1 className="price">$49</h1>
                                <h5>Monthly</h5>
                                <ul>
                                    <li>10 website</li>
                                    <li>50GB Disk Space</li>
                                    <li>50 Email Accounts</li>
                                    <li>50GB Monthly Bandwidth</li>
                                    <li>10 Subdomains</li>
                                </ul>
                                <Link to={'/payment'}>Get start</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
                            <div className="single-pricing">
                                <div className="price-head">
                                    <h2>Agro</h2>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h1 className="price">$49</h1>
                                <h5>Monthly</h5>
                                <ul>
                                    <li>10 website</li>
                                    <li>50GB Disk Space</li>
                                    <li>50 Email Accounts</li>
                                    <li>50GB Monthly Bandwidth</li>
                                    <li>10 Subdomains</li>
                                </ul>
                                <Link to={'/payment'}>Get start</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
