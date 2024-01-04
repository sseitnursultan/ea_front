import React, {useEffect, useState} from 'react';
import {Header} from "../header/Header";
import {Subscription} from "../subscription/Subscription";


export const Main = (props:{name:string}) => {

    return (
        <div>
            <Header name={props.name}/>

        </div>
    );
};

