import React from 'react';
import s from './header.module.css';
import logo from '../../assets/logo.svg';
import corners from '../../assets/corners.svg';
import { NavLink } from 'react-router-dom';



const Header = () => {
    return (
        <div className={s.header__conteiner}>
            <div className={s.overlay}></div>
            <div className={s.header}>
                <div className={s.header__logoWrapper}>
                    <div className={s.logo}><img src={logo} alt='' /></div>
                    <div className={s.corners}><img src={corners} alt='' /></div>
                </div>
                <nav className={s.header__nav}>
                    <div className={s.header__li}><NavLink to='/' className={navItem => navItem.isActive ? s.active : ''}>Главная</NavLink></div>
                    <div className={s.header__li}><NavLink to='/technologyPage' className={navItem => navItem.isActive ? s.active : ''}>Технология</NavLink></div>
                    <div className={s.header__li}><NavLink to='/flightSchedulePage' className={navItem => navItem.isActive ? s.active : ''}>График полётов</NavLink></div>
                    <div className={s.header__li}><NavLink to='/guaranteesPage' className={navItem => navItem.isActive ? s.active : ''}>Гарантии</NavLink></div>
                    <div className={s.header__li}><NavLink to='/aboutCompanyPage' className={navItem => navItem.isActive ? s.active : ''}>О компании</NavLink></div>
                    <div className={s.header__li}><NavLink to='/contacts' className={navItem => navItem.isActive ? s.active : ''}>Контакты</NavLink></div>
                </nav>
            </div>
        </div>
    )
};

export default Header;


