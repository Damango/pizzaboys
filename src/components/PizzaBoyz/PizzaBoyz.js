import React from 'react';
import "./PizzaBoyz.css";
import InformationCard from "./InformationCard/InformationCard"
import { useState } from 'react'

const PizzaBoyz = () => {


    return (
        <div className="pizza-boys-web-container">

            <div className="jumbotron-container">

                <div className="pizza-boyz-heading">PIZZA BOYZ</div>
                <div className="pizza-boyz-info">
                    <div className="pizza-boyz-location">919 St Johns Ave, Palatka, FL 32177</div>
                    <div className="pizza-boyz-times">
                        <p>Tuesday - Saturday  11:00 AM - 9:00 PM</p>
                        <p>Closed Sunday & Monday</p>
                        <p>(386) 325-9977</p>
                    </div>
                </div>
                <div className="menu-button">
                    <div className="menu-button-text">MENU</div>
                    <div className="menu-button-moving-bar"></div>
                </div>

            </div>
            <div className="information-cards-wrapper">

                <InformationCard videoID={1} />
                <InformationCard videoID={2} />
                <InformationCard videoID={3} />
            </div>

        </div>
    );
}

export default PizzaBoyz;