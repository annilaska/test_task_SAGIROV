import React from 'react';
import background from '../../assets/mars-kosmos.jpg';
import s from './guarantees.module.css'

const Guarantees = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.guarantees__background_image} src={background} alt='' />
            <span className={s.text}>Гарантии</span>
        </div>
    )
};

export default Guarantees;