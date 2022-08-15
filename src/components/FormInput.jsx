import React, { useState } from "react";
import StyledButton from "./UI/button/StyledButton";
import StyledInput from "./UI/input/StyledInput";

const FormInput = ({create, createRight}) => {
    
    const [nItem, setnItem] = useState({title: '', describe:'', price: '$', discPrice:'$', bgImg: ''}) 

    const addNewItemRight = (e) => {
        e.preventDefault();
        const newPost = {
            ...nItem, id: Date.now()
        }
        createRight(newPost)
    }
    const addNewItemLeft = (e) => {
        e.preventDefault();
        const newPost = {
            ...nItem, id: Date.now()
        }
        create(newPost)
    }
    return(
        <form>
            <StyledInput type="text" value={nItem.title} onChange={e => setnItem({...nItem, title: e.target.value})} placeholder="Введите название"/>
            <StyledInput type="text" value={nItem.describe} onChange={e => setnItem({...nItem, describe: e.target.value})} placeholder="Введите описание"/>
            <StyledInput type="text" value={nItem.price} onChange={e => setnItem({...nItem, price: e.target.value})} placeholder="Введите скид.стоимость"/>
            <StyledInput type="text" value={nItem.discPrice} onChange={e => setnItem({...nItem, discPrice: e.target.value})} placeholder="Введите стоимость без скидки"/>
            <StyledInput type="text" value={nItem.bgImg} onChange={e => setnItem({...nItem, bgImg: e.target.value})} placeholder="Путь к изображению"/>
            <StyledButton onClick={addNewItemLeft}>Добавить в левую секцию</StyledButton>
            <StyledButton style={{marginLeft:'30px'}} onClick={addNewItemRight}>Добавить в правую секцию</StyledButton>
        </form>
    );
}

export default FormInput;