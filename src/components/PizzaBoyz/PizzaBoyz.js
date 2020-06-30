import React, { useEffect } from 'react';
import "./PizzaBoyz.css";
import { useState } from 'react'
import data from "../../data/menu.json";
import Aos from 'aos'
import "aos/dist/aos.css"
import { Link, animateScroll as scroll } from 'react-scroll'
import { animated, useSpring } from 'react-spring'

const PizzaBoyz = () => {

    const test = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })

    const [lineStyle, setLineStyle] = useState('menu-line-close');
    const [mobileNavBar, setMobileNavBar] = useState('mobile-nav-bar-off');
    const [mobileNavItems, setMobileNavItems] = useState('nav-link-mobile-off');
    const [mobileSocialItems, setMobileSocialItems] = useState('mobile-social-media-off');

    function dropDownMobile() {

        if (mobileNavBar === 'mobile-nav-bar-off') {
            setMobileNavBar("mobile-nav-bar-on");
            setMobileNavItems("nav-link-mobile-on");
            setMobileSocialItems('mobile-social-media-on')

        }

        else if (mobileNavBar === 'mobile-nav-bar-on') {
            setMobileNavBar("mobile-nav-bar-off");
            setMobileNavItems("nav-link-mobile-off");
            setMobileSocialItems('mobile-social-media-off')
        }
    }

    function openFacebook() {
        window.open('https://www.facebook.com/pizzaboyz.palatka');
    }


    function openInstagram() {
        window.open('https://www.instagram.com/pizzaboyzpalatka/?hl=en')
    }


    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        if (scroll > 100) {
            setLineStyle('menu-line-open')
        }
    });

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    return (
        <div className="pizza-boys-web-container" id="theTop">
            <i className="fas fa-bars" onClick={dropDownMobile}></i>
            <div className={mobileNavBar} >

                <div className="mobile-nav-links-container">
                    <Link
                        onClick={dropDownMobile}
                        className={mobileNavItems}
                        activeClass="active"
                        to="theMenu"
                        spy={true}
                        smooth={true}

                        duration={300}
                    >MENU</Link>
                    <p className={mobileNavItems}>CONTACT</p>
                    <p className={mobileNavItems}>GALLERY</p>
                    <p className={mobileNavItems}>MORE INFO</p>
                    <div className={mobileSocialItems}>
                        <i className="fab fa-instagram" onClick={openInstagram}></i>
                        <i className="fab fa-facebook" onClick={openFacebook}></i>
                        <i className="fab fa-snapchat"></i>
                    </div>
                </div>
            </div>
            <div className="nav-bar-container">
                <div className="nav-bar-flare">
                    <div className="nav-line"></div>
                    <div className="nav-circle"></div>
                    <div className="nav-line"></div>
                </div>
                <div className="nav-links-container">
                    <Link
                        onClick={dropDownMobile}
                        className="nav-link"
                        activeClass="active"
                        to="theMenu"
                        spy={true}
                        smooth={true}

                        duration={300}
                    >MENU</Link>
                    <p className="nav-link">CONTACT</p>
                    <p className="nav-link">GALLERY</p>
                    <p className="nav-link">MORE INFO</p>
                </div>
                <div className="social-media-container">
                    <i className="fab fa-instagram" onClick={openInstagram}></i>
                    <i className="fab fa-facebook" onClick={openFacebook}></i>
                    <i className="fab fa-snapchat"></i>

                </div>
                <div className="nav-bar-flare">
                    <div className="nav-line"></div>
                    <div className="nav-circle"></div>
                    <div className="nav-line"></div>
                </div>
            </div>
            <div className="right-side">
                <Link className="to-top-button"
                    activeClass="active"
                    to="theTop"
                    spy={true}
                    smooth={true}

                    duration={300}
                ><i className="fas fa-sort-up"></i></Link>
                <div className="jumbotron-container">
                    <div className="logo"></div>
                    <div className="jumbo-info-container">
                        <p>919 St. Johns Ave, Palatka, FL 32177
                        Tuesday - Saturday 11:00 AM - 9:00 PM
                    </p>
                        <p> Closed Sunday & Monday</p>

                        <p>(386) 325-9977</p>
                    </div>
                    <Link className="menu-button"
                        activeClass="active"
                        to="theMenu"
                        spy={true}
                        smooth={true}

                        duration={300}
                    >MENU</Link>
                </div>
                <div className="menu-container" id="theMenu">
                    <div className="pizza-container menu-section">
                        <div className="menu-title">PIZZA</div>
                        <div className={lineStyle}></div>
                        <div className="menu-items-container pizza-menu">
                            {data.menu.pizza.map((pizza) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="0">
                                <div className="item-name">{pizza.name}</div>
                                <div className="item-toppings">{pizza.toppings}</div>
                                <div className="item-price">{pizza.price}</div>
                            </div>)}
                        </div>


                    </div>

                    <div className="calzone-container menu-section">
                        <div className="menu-title">CALZONES</div>
                        <div className={lineStyle}></div>
                        <div className="menu-items-container calzone-menu">
                            {data.menu.calzones.map((pizza) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="-20">
                                <div className="item-name">{pizza.name}</div>
                                <div className="item-toppings">{pizza.toppings}</div>
                                <div className="item-price">{pizza.price}</div>
                            </div>)}
                        </div>


                    </div>

                    <div className="calzone-container menu-section">
                        <div className="menu-title">DINNERS</div>
                        <div className={lineStyle}></div>
                        <div className="menu-items-container dinners-menu">
                            {data.menu.dinners.map((pizza) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="-20">
                                <div className="item-name">{pizza.name}</div>
                                <div className="item-toppings">{pizza.toppings}</div>
                                <div className="item-price">{pizza.price}</div>
                            </div>)}
                        </div>


                    </div>

                    <div className="calzone-container menu-section">
                        <div className="menu-title">SPECIALS</div>
                        <div className={lineStyle}></div>
                        <div className="menu-items-container specials-menu">
                            {data.menu.specials.map((pizza) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="-20">
                                <div className="item-name">{pizza.name}</div>
                                <div className="item-toppings">{pizza.toppings}</div>
                                <div className="item-price">{pizza.price}</div>
                            </div>)}
                        </div>


                    </div>

                    <div className="subs-container menu-section">
                        <div className="menu-title">HOT SUBS</div>
                        <div className={lineStyle}></div>
                        <div className="menu-items-container subs-menu">
                            {data.menu.subs.map((pizza) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="-20">
                                <div className="item-name">{pizza.name}</div>
                                <div className="item-toppings">{pizza.toppings}</div>
                                <div className="item-price">{pizza.price}</div>
                            </div>)}
                        </div>


                    </div>
                    <div className="drinks-container menu-section">
                        <div className="menu-title">DRINKS</div>
                        <div className={lineStyle}></div>
                        <div className="menu-items-container drinks-menu">
                            {data.menu.drinks.map((pizza) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="-20">
                                <div className="item-name">{pizza.name}</div>
                                <div className="item-toppings">{pizza.toppings}</div>
                                <div className="item-price">{pizza.price}</div>
                            </div>)}
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
}

export default PizzaBoyz;