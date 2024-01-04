import React, {useEffect, useState} from 'react';
import {Header} from "../header/Header";


export const Main = (props:{name:string}) => {

    return (
        <div>
            <Header name={props.name}/>
        </div>
    );
};

