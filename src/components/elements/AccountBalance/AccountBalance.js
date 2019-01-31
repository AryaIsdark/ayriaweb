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
            <div className={'m-r'}>Your balance</div>
            {/*TODO: Add thousand seperator*/}
            <Badge color={'primary'} >250000</Badge>
        </div>
    )
}


export default AccountBalance;
