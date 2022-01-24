import React from 'react';
import Card from './Card';

const CatList = ({ cats }) => {
    return (
        <>
            <Card img={cats[0].img} id={cats[0].id} nickname={cats[0].nickname} personality={cats[0].personality}/>
            <Card img={cats[1].img} id={cats[1].id} nickname={cats[1].nickname} personality={cats[1].personality}/>
            <Card img={cats[2].img} id={cats[2].id} nickname={cats[2].nickname} personality={cats[2].personality}/>
            <Card img={cats[3].img} id={cats[3].id} nickname={cats[3].nickname} personality={cats[3].personality}/>
            <Card img={cats[4].img} id={cats[4].id} nickname={cats[4].nickname} personality={cats[4].personality}/>
            <Card img={cats[5].img} id={cats[5].id} nickname={cats[5].nickname} personality={cats[5].personality}/>
            <Card img={cats[6].img} id={cats[6].id} nickname={cats[6].nickname} personality={cats[6].personality}/>
            <Card img={cats[7].img} id={cats[7].id} nickname={cats[7].nickname} personality={cats[7].personality}/>
            <Card img={cats[8].img} id={cats[8].id} nickname={cats[8].nickname} personality={cats[8].personality}/>
            <Card img={cats[9].img} id={cats[9].id} nickname={cats[9].nickname} personality={cats[9].personality}/>
        </>
    );
}

export default CatList