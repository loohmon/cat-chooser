import React from 'react';
import './Card.css';

const Card = ({ img, nickname, personality }) => {
    return (
        <div className="main-card"> 
            <img src={img} />
            <div>
                <h2>{nickname}</h2>
                <p>{personality}</p>
            </div>
        </div>
    )
}

export default Card;