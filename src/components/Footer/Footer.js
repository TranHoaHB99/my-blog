import React from 'react';
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import './Footer.scss'
import instagram from './../../assets/images/instagram.svg'
import facebook from './../../assets/images/facebook.svg'
import twitter_active from './../../assets/images/twitter_active.svg'
import pinterest from './../../assets/images/pinterest.svg'
import google_play from './../../assets/images/google_play.svg'
import behance from './../../assets/images/behance.svg'

function Footer() {
    return (
        <footer className={classNames('containerFluid', 'footer', "text-center")}>
            <div className="footer__top">
                <h4 className={'header-text'}>MyBlog</h4>
                <div className={classNames('d-flex', 'justify-content-center')}>
                    <div className="nav">
                        <NavLink
                            exact
                            className="nav__link"
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            exact
                            className="nav__link"
                            to="/article"
                        >
                            Article
                        </NavLink>
                        <NavLink
                            exact
                            className="nav__link"
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            exact
                            className="nav__link"
                            to="/shop"
                        >
                            Shop
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="footer__icons">
                <img src={facebook} alt={'...'} className={'icon'}/>
                <img src={twitter_active} alt={'...'} className={'icon'}/>
                <img src={pinterest} alt={'...'} className={'icon'}/>
                <img src={google_play} alt={'...'} className={'icon'}/>
                <img src={behance} alt={'...'} className={'icon'}/>
                <img src={instagram} alt={'...'} className={'icon'}/>
            </div>
            <div className={classNames("footer__bottom", "text-center", "container")}>
                @2019 Logwork. All Right Reserved.
            </div>
        </footer>
    );
}

export default Footer;