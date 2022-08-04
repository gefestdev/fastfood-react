import React from "react";
import Container from "./Container";

const BurgerContent = () => {
    return(
        <div className="burgerking__content">
            <Container>
                <div className="burgerking">
                    <img src="img/burger.svg" alt="" className="burger__img"/>
                    <div className="burgerking__content-inner">
                        <h1 className="burgerking__top-text">Burger King</h1>
                        <p className="burgerking__bottom-text">Together with McDonald’s, Burger King has grown 
                            to become synonymous with burgers in the US.
                        </p>
                        <div className="burgerking__price">
                            <h2 className="real__price">$6</h2>
                            <h2 className="fake__price">$8</h2>
                        </div>
                        <button className="order__btn" style={{marginTop: '11px'}}>ORDER NOW</button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default BurgerContent;