import React, { useState } from "react";
import Container from "./Container";
import ItemMenuList from "./ItemMenuList";
import StyledButton from "./UI/button/StyledButton";

const MenuList = () => {
    const [items, SetItems] = useState([{
        leftSection: [
            {id:1, title: 'Dairy Queen', describe:'Dairy Queen is one of the biggest fast-food.', price: '$4', discPrice:'$6', bgImg: 'url("img/dairy_queen.svg")'},
            {id:2, title: 'Burger King', describe:'Together with McDonald’s, Burger King.', price: '$5', discPrice:'$6', bgImg: 'url("img/bk.svg")'},

        ],
        rightSection: [
            {id:3, title: 'Pizza Hut', describe:'Although the Pizza Hut Menu Prices.', price: '$3', discPrice:'$7', bgImg: 'url("img/pizza_hut.svg")'},
            {id:4, title: 'Papa John’s', describe:'Papa John’s is one of the most popular fast-food.', price: '$6', discPrice:'$8', bgImg: 'url("img/papa.svg")'},
        ],
    }]);
    return(
        <Container>
            <div className="menu__list">
                <div className="menu__list-left">
                    {items[0].leftSection.map((item) => 
                        <ItemMenuList item={item} key={item.id}/>
                    )}
                </div>
                <div className="menu__list-left">
                    {items[0].rightSection.map((item) =>
                        <ItemMenuList style={{paddingLeft: '50px'}} item={item} key={item.id}/>
                    )}
                </div>
            </div>
        </Container>
    );
}

export default MenuList;