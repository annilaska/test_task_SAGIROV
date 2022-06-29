import React from 'react';
import background from '../../assets/mars-kosmos.jpg';
import s from './aboutCompany.module.css';


const AboutCompany = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.aboutCompany__background_image} src={background} alt='' />
            <span className={s.text}>О компани</span>
        </div>
    )
};

export default AboutCompany;