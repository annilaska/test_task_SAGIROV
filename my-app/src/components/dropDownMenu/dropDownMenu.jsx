import React from 'react';
import s from './dropDownMenu.module.css';
import { NavLink } from 'react-router-dom';


const DropDownMenu = () => {
    return (
        <div className={s.menuWrapper}>
            <nav className={s.nav}>
                    <div className={s.nav__li}><NavLink to='/' className={navItem => navItem.isActive ? s.active : ''}>Главная</NavLink></div>
                    <div className={s.nav__li}><NavLink to='/technologyPage' className={navItem => navItem.isActive ? s.active : ''}>Технология</NavLink></div>
                    <div className={s.nav__li}><NavLink to='/flightSchedulePage' className={navItem => navItem.isActive ? s.active : ''}>График полётов</NavLink></div>
                    <div className={s.nav__li}><NavLink to='/guaranteesPage' className={navItem => navItem.isActive ? s.active : ''}>Гарантии</NavLink></div>
                    <div className={s.nav__li}><NavLink to='/aboutCompanyPage' className={navItem => navItem.isActive ? s.active : ''}>О компании</NavLink></div>
                    <div className={s.nav__li}><NavLink to='/contacts' className={navItem => navItem.isActive ? s.active : ''}>Контакты</NavLink></div>
                </nav>
        </div>
    )
};

export default DropDownMenu;