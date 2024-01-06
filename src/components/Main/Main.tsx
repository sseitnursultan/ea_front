import React, {useEffect, useState} from 'react';
import {Header} from "../header/Header";
import {AboutUs} from "../aboutUs/AboutUs";
import {NewsPage} from "../News/News";
import {Footer} from "../footer/Footer";


export const Main = (props:any) => {

    return (
        <div>
            <Header name={props.name}/>
            <AboutUs/>
            <NewsPage />
            <Footer/>
        </div>
    );
};

