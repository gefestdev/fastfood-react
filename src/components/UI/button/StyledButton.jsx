import React from "react";
import classes from './styledButton.module.css';

const StyledButton = ({children, ...props}) => {
    return(
        <button {...props} className={classes.order__btn}>
            {children}
        </button>
    );
}

export default StyledButton;