import React from 'react';
import classNames from 'classnames'
import './Header.scss'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={'containerFluid'}>
            <div
                className={classNames('container', 'header', 'd-flex', 'justify-content-between', 'align-items-center')}>
                <h2 className="header__logo">MyBlog</h2>
                <div className={classNames("nav", 'd-flex')}>
                    <NavLink
                        exact
                        className="nav__link"
                        to="/"
                        activeClassName="nav__link--active"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        exact
                        className="nav__link"
                        to="/article"
                        activeClassName="nav__link--active"
                    >
                        Article
                    </NavLink>
                    <NavLink
                        exact
                        className="nav__link"
                        to="/contact"
                        activeClassName="nav__link--active"
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        exact
                        className="nav__link"
                        to="/shop"
                        activeClassName="nav__link--active"
                    >
                        Shop
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;