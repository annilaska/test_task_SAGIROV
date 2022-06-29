import React from 'react';
import background from '../../assets/mars-kosmos.jpg';
import s from './technology.module.css'

const Technology = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.technology__background_image} src={background} alt='' />
            <span className={s.text}>Технология</span>
        </div>
    )
};

export default Technology;