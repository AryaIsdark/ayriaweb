import React from 'react';
import {Badge} from "reactstrap";

const AccountBalance = ({backgroundColor, orientation, size}) => {
    const style = {
        backgroundColor: backgroundColor,
        textAlign: orientation || 'left',
        padding: '10px',
        borderRadius: '2px',
        fontSize: `${size}px` || '15px'
    }

    return (
        <div style={style}>
            <div> </div>
            {/*TODO: Add thousand seperator*/}
            <Badge color={'success'} >540,100,00</Badge><span style={{fontSize:'20px', marginRight:'10px'}}>تومان</span>
        </div>
    )
}


export default AccountBalance;
