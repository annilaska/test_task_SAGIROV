import React from 'react';
import s from './main.module.css';
import corner1 from '../../assets/corner1.svg';
import corner4 from '../../assets/corner4.svg';


const Main = () => {
    return (
        <div className={s.main__conteiner}>

            <div className={s.leftPart}>
                <div className={s.main__textContent}>
                    <h1 className={s.main__textContent_h1}>ПУТЕШЕСТВИЕ</h1>
                    <h2 className={s.main__textContent_h2}>на красную планету</h2>
                </div>

             
                <button className={s.main__button}>
                    
                        <img className={s.rightCorner} src={corner4} alt='' />
                        Начать путешествие
                        <img className={s.leftCorner} src={corner1} alt='' />
                    
                </button>
                    
              
            </div>

            <div className={s.rightPart}>
                <button className={s.rightPart__button1}>мы<div className={s.bigText}>1</div>на рынке</button>
                <button className={s.rightPart__button2}>гарантируем<div className={s.bigText}>50%</div>безопасность</button>
                <button className={s.rightPart__button3}>календарик за<div className={s.bigText}>2001г.</div>в подарок</button>
                <button className={s.rightPart__button4}>путешествие<div className={s.bigText}>597</div>дней</button>
            </div>

        </div>
    )
};

export default Main;