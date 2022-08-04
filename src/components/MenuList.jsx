import React from "react";
import Container from "./Container";

const MenuList = () => {
    return(
        <Container>
            <div className="menu__list">
                <div className="menu__list-left">
                    <div className="menu__list-item">
                        <div className="menu__list-inner">
                            <h1 className="menu__item-toptext">Dairy Queen</h1>
                            <p className="menu__item-text">
                                Dairy Queen is one of the biggest fast-food.
                            </p>
                            <div className="menu__price">
                                <h3 className="menu__price-text">$4</h3>
                                <h3 className="menu__price-text menu__fake-price">$6</h3>
                            </div>
                            <button className="order__btn" style={{marginTop: '11px'}}>ORDER NOW</button>
                        </div>
                    </div>
                    <div className="menu__list-item" style={{backgroundImage: `url("img/bk.svg")`}}>
                        <div className="menu__list-inner">
                            <h1 className="menu__item-toptext">Burger King</h1>
                            <p className="menu__item-text">
                                Together with McDonald’s, Burger King.
                            </p>
                            <div className="menu__price">
                                <h3 className="menu__price-text">$5</h3>
                                <h3 className="menu__price-text menu__fake-price">$6</h3>
                            </div>
                            <button className="order__btn" style={{marginTop: '11px'}}>ORDER NOW</button>
                        </div>
                    </div>
                </div>
                <div className="menu__list-left">
                    <div className="menu__list-item" style={{backgroundImage: `url("img/pizza_hut.svg")`}}>
                        <div className="menu__list-inner" style={{paddingLeft: '50px'}}>
                            <h1 className="menu__item-toptext">Pizza Hut</h1>
                            <p className="menu__item-text" style={{width: '252px'}}>
                                Although the Pizza Hut Menu Prices.
                            </p>
                            <div className="menu__price">
                                <h3 className="menu__price-text">$3</h3>
                                <h3 className="menu__price-text menu__fake-price">$7</h3>
                            </div>
                            <button className="order__btn" style={{marginTop: '11px'}}>ORDER NOW</button>
                        </div>
                    </div>
                    <div className="menu__list-item" style={{backgroundImage: `url("img/papa.svg")`}}>
                        <div className="menu__list-inner" style={{paddingLeft: '50px'}}>
                            <h1 className="menu__item-toptext">Papa John’s</h1>
                            <p className="menu__item-text">
                                Papa John’s is one of the most popular fast-food.
                            </p>
                            <div className="menu__price">
                                <h3 className="menu__price-text">$6</h3>
                                <h3 className="menu__price-text menu__fake-price">$8</h3>
                            </div>
                            <button className="order__btn" style={{marginTop: '11px'}}>ORDER NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default MenuList;