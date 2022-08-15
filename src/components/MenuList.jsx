import React, { useState } from "react";
import Container from "./Container";
import FormInput from "./FormInput";
import ItemMenuList from "./ItemMenuList";

const MenuList = () => {
    const [items, setItems] = useState([{
        leftSection: [
            {id:1, title: 'Dairy Queen', describe:'Dairy Queen is one of the biggest fast-food.', price: '$4', discPrice:'$6', bgImg: 'img/dairy_queen.svg'},
            {id:2, title: 'Burger King', describe:'Together with McDonald’s, Burger King.', price: '$5', discPrice:'$6', bgImg: 'img/bk.svg'},

        ],
        rightSection: [
            {id:3, title: 'Pizza Hut', describe:'Although the Pizza Hut Menu Prices.', price: '$3', discPrice:'$7', bgImg: 'img/pizza_hut.svg'},
            {id:4, title: 'Papa John’s', describe:'Papa John’s is one of the most popular fast-food.', price: '$6', discPrice:'$8', bgImg: 'img/papa.svg'},
        ],
    }]);

    
    
    const createItem = (nItem) => {
        items[0].leftSection.push(nItem)
        setItems([...items])
        console.log(items)
    }
    const createItemRight = (nItem) => {
        items[0].rightSection.push(nItem)
        setItems([...items])
        console.log(items)
    }
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
            <FormInput createRight={createItemRight} create={createItem}/>
        </Container>
    );
}

export default MenuList;