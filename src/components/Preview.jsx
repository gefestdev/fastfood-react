import React from "react";
import Container from "./Container";

const Preview = () => {
    return(
        <Container>
            <div className="preview">
            <h3 className="preview__top-text">FAST FOOD BURGERS</h3>
                <h1 className="quote">The fastest food, for instant hunger.</h1>
                <p className="preview__text-bottom">
                    Some food has looked so awful that it's looked like something 
                    that the dog's brought home, yet after one mouthful 
                    I've been left eating my thoughts, my words & my food and gone back for seconds.
                </p>
                <button className="order__btn" style={{margin: '42px 0 0 0'}}>ORDER NOW</button>
            </div>
        </Container>
    );
}

export default Preview;