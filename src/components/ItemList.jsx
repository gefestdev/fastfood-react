import React from "react";
import Container from "./Container";

const ItemList = () => {
    return(
        <div>
            <Container>
                <div className="item__list">
                    <div className="item__list-inner">
                        <img src="img/paella.svg" alt="" className="paella__img"/>
                        <div className="list-item-bg">
                            <h1 className="list__item-top-text">Chicken Paella</h1>
                            <p className="list__item-bottom-text">We just don't make and sell food.Good food warms.</p>
                        </div>
                    </div>
                    <div className="item__list-inner">
                        <img src="img/taco.svg" alt="" className="paella__img"/>
                        <div className="list-item-bg">
                            <h1 className="list__item-top-text">Taco Del Mar</h1>
                            <p className="list__item-bottom-text">Taco Del Mar brings the best out of Mexican cuisine with fresh.</p>
                        </div>
                    </div>
                    <div className="item__list-inner">
                        <img src="img/pain.svg" alt="" className="paella__img"/>
                        <div className="list-item-bg">
                            <h1 className="list__item-top-text">Bon Au Pain</h1>
                            <p className="list__item-bottom-text">Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                        </div>
                    </div>
                    <div className="item__list-inner">
                        <img src="img/pizza.svg" alt="" className="paella__img"/>
                        <div className="list-item-bg">
                            <h1 className="list__item-top-text">Pizza Hut.</h1>
                            <p className="list__item-bottom-text">Although the Pizza Hut Menu Prices have tumbled over the years.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ItemList;