import React from 'react';
import "./InformationCard.css"
import Pizza from "./pizzaslice2.m4v";
import Woman from "./woman2.m4v";
import Company from "./company2.m4v";
import MenuItem from "./MenuItem/MenuItem"
import Menu from "../../../data/menu.json";
import { useSpring, animated } from 'react-spring'

import { useState } from 'react'

const InformationCard = (props) => {
    const [cardState, setCardState] = useState("false");
    const [menuView, setMenuView] = useState(0);
    const [differentMenu, setDifferentMenu] = useState(1)

    animated(MenuItem)

    function menuViewHandler() {
        if (menuView === 1) {
            setMenuView(0)
        }
        else if (menuView === 0) {
            setMenuView(1)
        }
    }


    function showPizzas() {
        setDifferentMenu(1)
    }

    function showDrinks() {
        setDifferentMenu(2)
    }

    function showSpecials() {
        setDifferentMenu(3)
    }

    function showCombos() {
        setDifferentMenu(4)
    }
    function showKidzMenu() {
        setDifferentMenu(5)
    }

    function showDinners() {
        setDifferentMenu(6)
    }

    function showCalzones() {
        setDifferentMenu(7)
    }


    function renderDifferentMenu() {
        if (differentMenu === 1) {
            return Menu.menu.pizza.map((pizza) => <MenuItem itemName={pizza.name} itemPrice={pizza.price} itemToppings={pizza.toppings} />)
        }

        else if (differentMenu === 2) {
            return Menu.menu.drinks.map((drink) => <MenuItem itemName={drink.name} itemPrice={drink.price} itemToppings={drink.toppings} />)
        }

        else if (differentMenu === 7) {
            return Menu.menu.calzones.map((calzone) => <MenuItem itemName={calzone.name} itemPrice={calzone.price} itemToppings={calzone.toppings} />)
        }
    }

    function renderMenuView() {
        if (menuView === 0) {
            return (<div className="menu-drop-down-container-off">

            </div>)
        }



        else if (menuView === 1) {
            return (<div className="menu-drop-down-container-on">
                <div className="menu-container">
                    <div className="menu-selector">
                        <div className="menu-option" onClick={showPizzas}>Pizzas</div>
                        <div className="menu-option" onClick={showSpecials} >Specials</div>
                        <div className="menu-option" onClick={showCombos}>Combos</div>
                        <div className="menu-option" onClick={showKidzMenu}>Kidz</div>
                        <div className="menu-option" onClick={showDrinks}>Drinks</div>
                        <div className="menu-option" onClick={showDinners}>Dinners</div>
                        <div className="menu-option" onClick={showCalzones}>Calzones</div>

                    </div>
                    <div className="menu-item-display">
                        {renderDifferentMenu()}

                    </div>
                </div>
            </div>)
        }
    }



    function renderInformationCard() {



        if (props.videoID === 1) {

            return (
                <div>
                    <div className="information-card-container information-card-container-1" onClick={menuViewHandler}>

                        <div className="information-card-title"> <i class="fas fa-pizza-slice"></i>MENU</div>


                    </div>
                    {renderMenuView()}
                </div>
            )
        }

        else if (props.videoID === 2) {

            return (
                <div>
                    <div className="information-card-container information-card-container-2">

                        <div className="information-card-title"><i class="fas fa-phone-alt"></i>CONTACT</div>




                    </div>
                </div>)
        }

        else if (props.videoID === 3) {

            return (
                <div>
                    <div className="information-card-container information-card-container-3">

                        <div className="information-card-title"><i class="fas fa-info-circle"></i>MORE INFO</div>




                    </div>
                </div>)
        }
    }









    return (<div>
        <div>{renderInformationCard()}</div>
    </div>

    );
}

export default InformationCard;