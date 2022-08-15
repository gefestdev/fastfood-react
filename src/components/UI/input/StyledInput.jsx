import React from "react";
import classes from './styledInput.module.css';

const StyledInput = ({children, ...props}) => {
    return(
        <input {...props} className={classes.input__item}>
            {children}
        </input>
    );
}

export default StyledInput;