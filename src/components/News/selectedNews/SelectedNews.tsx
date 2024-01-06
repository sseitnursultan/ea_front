import React from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import {Header} from "../../header/Header";
import {Footer} from "../../footer/Footer";
import './SelectedNews.css'


export const SelectedNews = (props: any) => {
    const location = useLocation();
    const selectedNews = location.state?.selectedNews || {};
    const {id} = useParams();


    let div = (
        <div className={'SelectedNews'}>
            <Header name={props.name}/>
            <div className={'selectedNews-card'}>
                <div className={'selectednews-title'}>
                    <h3>{selectedNews.title}</h3>
                    <hr/>
                </div>
                <div className={'selectednews-img'}>
                    <img src={selectedNews.imgLink}/>
                </div>
                <div className={'selectednews-text'}>
                    <p>{selectedNews.text}</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
    let isNotFree = (
        <div>
            <Header name={props.name}/>
            <div className={'SelectedNews'}>
                <div className={'selectedNews-card'}>
                    <h1>THIS PAGE IS PREMIUM , PAY TO SEE THIS</h1>
                    <div style={{display:"flex",alignContent:'center',alignItems:"center"}}><Link style={{textDecoration:"none",borderRadius:"10px"}} className={'SelectedNews-button'} to={'/subscription'}>Get Subscription</Link>
                    </div>
                </div>
        </div>



        </div>
    )

    return selectedNews.isFree ? div : isNotFree
};

