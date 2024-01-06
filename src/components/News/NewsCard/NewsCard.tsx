import React from 'react';
import {Link} from "react-router-dom";

 export const NewsCard = (props:any) => {
    return (
        <div className="item-2" >
            <Link to={`/news/${props.id}`} className="card">
                <a href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045"
                   className="card">
                    <div className="thumb"
                         style={{backgroundImage: `url(${props.imgLink})`}}></div>
                    <article>
                        <h1>{props.title}</h1>
                        <hr/>
                        <h5 style={{color:"black"}}>{props.cat}</h5>
                        <span>{props.intro}</span>
                        <hr/>
                        <span>{props.isFree ? (<p style={{color:"yellowgreen"}}>FREE</p>) : (<p style={{color:"red",}}>PREMIUM</p>)}</span>


                    </article>
                </a>
            </Link>
        </div>
    );
};
