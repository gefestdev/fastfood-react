import React, { useState } from "react";
import StyledButton from "./UI/button/StyledButton";

const ItemMenuList = ({item, ...props}) => {
    return(
        <div className="menu__list-item" style={{backgroundImage: `${item.bgImg}`}}>
                <div className="menu__list-inner" {...props}>
                    <h1 className="menu__item-toptext">{item.title}</h1>
                    <p className="menu__item-text">
                        {item.describe}
                    </p>
                    <div className="menu__price">
                    <h3 className="menu__price-text">{item.price}</h3>
                    <h3 className="menu__price-text menu__fake-price">{item.discPrice}</h3>
                </div>
                <StyledButton style={{marginTop: '11px'}}>ORDER NOW</StyledButton>
            </div>
        </div>
    );
}

export default ItemMenuList;