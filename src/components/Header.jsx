import React from "react";
import Container from "./Container";

const Header = () => {

    return(
        <Container>
            <div className="header">
                <a href="/" className="logo">
                    <img src="img/logo.svg" alt="" className="logo__img"/>
                </a>
                    <div className="text__header-inner">
                        <a href="/#" className="text__header text__header-active">HOME</a>
                        <a href="/#" className="text__header">PAGES</a>
                        <a href="/#" className="text__header">OUR OFFER</a>
                        <a href="/#" className="text__header">PRICING</a>
                        <a href="/#" className="text__header">SHOP</a>
                    </div>
                    <button className="order__btn">ORDER NOW</button>
            </div>
        </Container>
    );
}

export default Header;