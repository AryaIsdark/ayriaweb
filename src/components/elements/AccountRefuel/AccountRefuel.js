import React, {useState} from 'react';
import {Button, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";


const AccountRefuel = ({amount, onChange, onSubmit}) => {

    const [_amount, setAmount] = useState(amount);

    const handleOnChange = (event) => {
        const value = Number(event.target.value)
        if(value){
            setAmount(value);
            onChange(value);
        }
    }

    const handleSubmit = () => {
        onSubmit(_amount);
    }

    return (

        <>
            <InputGroup>
                <Input  type={'number'} value={_amount} onChange={handleOnChange} placeholder="Enter amount here"/>
                <InputGroupAddon  addonType="append">
                    <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <Button size={'lg'} color={'success'} outline={true} onClick={handleSubmit}>Refuel</Button>
        </>
    )
}


export default AccountRefuel;
