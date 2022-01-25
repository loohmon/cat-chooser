import React from 'react';
import Card from './Card';

const CatList = ({ cats }) => {
    const cardsArray = cats.map((user, i) => {
        return (
        <Card 
            key={cats[i].id} 
            img={cats[i].img} 
            id={cats[i].id} 
            nickname={cats[i].nickname} 
            personality={cats[i].personality}
            />
        );
    })
    return (
        <>
        {cardsArray}
        </>
    );
}

export default CatList