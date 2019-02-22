import React from 'react';
import Calendar from 'react-persian-calendar';
import './style.css';

const CustomDatePicker = ({onChange}) => {

    const handleOnChange = (value) => {
        onChange(value);
    }

    return(
        <Calendar onChange={handleOnChange}/>
    )
}

export default CustomDatePicker;
