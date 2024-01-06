import react, {useState} from 'react'
import './News.scss'
import {NewsCard} from "./NewsCard/NewsCard";
import {news} from '../../Data'
import {useNavigate} from "react-router-dom";

export function NewsPage(props: any) {
    const navigate = useNavigate()

    const handleCardClick = (item:any) => {
        navigate(`/news/${item.id}`, { state: { selectedNews: item } }); // Navigate to the selected news page
    };


    return (
        <div className={'NewsPage'}>
            <div className={'band'}>
                <div className="item-1">
                    <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852"
                       className="card">
                        <div
                            className="thumb"
                            style={{
                                backgroundImage: "url(https://kbtu.edu.kz/images/news_dn_eng.png)"
                            }}
                        ></div>
                        <article>
                            <h1>HAPPY INDEPENDENCE DAY OF THE REPUBLIC OF KAZAKHSTAN!</h1>
                            <span>Mary Winkler</span>
                        </article>
                    </a>
                </div>
                {news && news.map((item:any, index:number) => (
                    <div key={index} onClick={() => handleCardClick(item)}>
                        <NewsCard
                                  title={item.title}
                                  text={item.text}
                                  imgLink={item.imgLink}
                                  intro = {item.intro}
                                  isFree={item.isFree}
                                  cat={item.cat}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

