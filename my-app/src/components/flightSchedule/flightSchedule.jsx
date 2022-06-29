import React from 'react';
import background from '../../assets/mars-kosmos.jpg';
import s from './flightSchedule.module.css'

const FlightSchedule = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.flightSchedule__background_image} src={background} alt='' />
            <span className={s.text}>График полётов</span>
        </div>
    )
};

export default FlightSchedule;