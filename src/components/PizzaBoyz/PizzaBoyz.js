import React, { useEffect } from 'react';
import "./PizzaBoyz.css";
import { useState } from 'react'
import data from "../../data/menu.json";
import Aos from 'aos'
import "aos/dist/aos.css"
import { Link, animateScroll as scroll } from 'react-scroll'
import { animated, useSpring } from 'react-spring'

const PizzaBoyz = () => {



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


    function closeDropDown() {
        if (mobileNavBar === 'mobile-nav-bar-on') {
            setMobileNavBar("mobile-nav-bar-off");
            setMobileNavItems("nav-link-mobile-off");
            setMobileSocialItems('mobile-social-media-off');

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
                    <p className={mobileNavItems}>CONTACT<span>- Coming Soon</span></p>
                    <p className={mobileNavItems}>GALLERY<span>- Coming Soon</span></p>
                    <p className={mobileNavItems}>MORE INFO<span>- Coming Soon</span></p>
                    <div className={mobileSocialItems}>
                        <i className="fab fa-instagram" onClick={openInstagram}></i>
                        <i className="fab fa-facebook" onClick={openFacebook}></i>

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
                    <p className="nav-link" >CONTACT<span>- Coming Soon -</span></p>
                    <p className="nav-link">GALLERY<span>- Coming Soon -</span></p>
                    <p className="nav-link">MORE <span>- Coming Soon -</span></p>
                </div>
                <div className="social-media-container">
                    <i className="fab fa-instagram" onClick={openInstagram}></i>
                    <i className="fab fa-facebook" onClick={openFacebook}></i>


                </div>
                <div className="nav-bar-flare">
                    <div className="nav-line"></div>
                    <div className="nav-circle"></div>
                    <div className="nav-line"></div>
                </div>
            </div>
            <div className="right-side" onClick={closeDropDown}>
                <Link className="to-top-button"
                    onClick={closeDropDown}
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

                        <a href="tel: 386-325-9977">(386) 325-9977</a>
                        <p>FREE WIFI <i class="fas fa-wifi"></i></p>
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
                        <div className="menu-title">PIZZA -<span className="pizza-info"> All Pies 16"</span></div>

                        <div className={lineStyle}></div>
                        <div className="menu-items-container pizza-menu">
                            {data.menu.pizza.map((pizza) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="0">
                                <div className="item-name">{pizza.name}</div>
                                <div className="item-price">{pizza.price}</div>
                                <div className="item-toppings">{pizza.toppings}</div>

                            </div>)}
                            <div className="extra-ingredients-1">- Extra ingredients are $2.50 -</div>
                        </div>

                        <div className="combos-container">
                            <div className="menu-title">COMBOS</div>
                            <div className="menu-items-container combos-menu">
                                {data.menu.combos.map((pizza) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="0">
                                    <div className="item-name">{pizza.name}</div>
                                    <div className="item-price">{pizza.price}</div>
                                </div>)}
                            </div>
                            <div className="extra-ingredients-2">- Cheese, Pepperoni and Capone Slices Only -</div>
                        </div>

                    </div>
                    <div className="calzones-container menu-section">
                        <div className="menu-title">CALZONES</div>
                        <div className={lineStyle}></div>
                        <div className="menu-items-container calzone-menu">
                            {data.menu.calzones.map((pizza) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="-20">
                                <div className="item-name">{pizza.name}</div>
                                <div className="multi-price">
                                    {pizza.price.map((price) => <div className="item-price-multi">{price}</div>)}
                                </div>

                                <div className="item-toppings">{pizza.toppings}</div>

                            </div>)}
                            <div className="extra-ingredients">- Extra ingredients are $2.50 -</div>

                        </div>
                    </div>
                    <div className="dinners-container menu-section">
                        <div className="menu-title">DINNERS</div>
                        <div className={lineStyle}></div>
                        <div className="menu-items-container dinners-menu">
                            {data.menu.dinners.map((pizza) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="-20">
                                <div className="item-name">{pizza.name}</div>
                                <div className="item-price">{pizza.price}</div>
                                <div className="item-toppings">{pizza.toppings}</div>

                            </div>)}
                        </div>
                    </div>
                    <div className="specials-container menu-section">
                        <div className="menu-title">SPECIALS</div>
                        <div className={lineStyle}></div>
                        <div className="menu-items-container specials-menu">
                            {data.menu.specials.map((pizza) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="-20">
                                <div className="item-name">{pizza.name}</div>
                                <div className="item-price">{pizza.price}</div>
                                <div className="item-toppings">{pizza.toppings}</div>

                            </div>)}
                        </div>
                    </div>
                    <div className="subs-container menu-section">
                        <div className="menu-title">HOT SUBS</div>
                        <div className={lineStyle}></div>
                        <div className="menu-items-container subs-menu">
                            {data.menu.subs.map((pizza) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="-20">
                                <div className="item-name">{pizza.name}</div>
                                <div className="item-price">{pizza.price}</div>
                                <div className="item-toppings">{pizza.toppings}</div>

                            </div>)}
                        </div>
                        <div className="extra-ingredients">- Extra ingredients are $2.50 -</div>
                    </div>
                    <div className="drinks-container menu-section">
                        <div className="menu-title">DRINKS</div>
                        <div className={lineStyle}></div>
                        <div className="menu-items-container drinks-menu">
                            {data.menu.drinks.map((pizza) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="-20">
                                <div className="item-name">{pizza.name}</div>
                                <div className="item-price">{pizza.price}</div>
                                <div className="item-toppings">{pizza.toppings}</div>

                            </div>)}
                        </div>
                    </div>
                    <div className="appetizers-container menu-section">
                        <div className="menu-title">APPETIZERS</div>
                        <div className={lineStyle}></div>
                        <div className="menu-items-container appetizer-menu">
                            {data.menu.appetizers.map((pizza) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="-20">
                                <div className="item-name">{pizza.name}</div>
                                <div className="multi-price">
                                    {pizza.price.map((price) => <div className="item-price-multi">{price}</div>)}
                                </div>
                                <div className="item-toppings">{pizza.toppings}</div>

                            </div>)}
                        </div>
                    </div>
                    <div className="kidz-container menu-section">
                        <div className="menu-title">KIDZ</div>
                        <div className={lineStyle}></div>
                        <div className="menu-items-container kidz-menu">
                            {data.menu.kidz.map((salad) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="-20">
                                <div className="item-name">{salad.name}</div>
                                <div className="item-price">{salad.price}</div>
                                <div className="item-toppings">{salad.toppings}</div>

                            </div>)}
                        </div>
                    </div>
                    <div className="salads-container menu-section">
                        <div className="menu-title">SALADS</div>
                        <div className={lineStyle}></div>
                        <div className="menu-items-container salads-menu">
                            {data.menu.salads.map((salad) => <div className="menu-item" data-aos='fade-down' data-aos-once="true" data-aos-offset="-20">
                                <div className="item-name">{salad.name}</div>
                                <div className="multi-price">
                                    {salad.price.map((price) => <div className="item-price-multi">{price}</div>)}
                                </div>
                                <div className="item-toppings">{salad.toppings}</div>

                            </div>)}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PizzaBoyz;