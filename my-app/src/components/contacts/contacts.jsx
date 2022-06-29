import React from 'react';
import s from './contact.module.css';
import background from '../../assets/mars-kosmos.jpg'

const Contacts = () => {
    return (
        <div>
            <div className={s.wrapper}>
                <img className={s.сontacts__background_image} src={background} alt='' />
                <span className={s.text}>Контакты</span>
            </div>
        </div>
    )
};

export default Contacts;