import React, {useState} from 'react';
import {Button, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";


const Purchase = ({amount, onChange, onSubmit, onCancel}) => {

    const [_paymentObject, setPaymentObject] = useState({amount: amount});

    const handleOnChange = (event) => {
       if(event){
           setPaymentObject(
               {
                   ..._paymentObject,
                   [event.target.id]:event.target.value
               }
           )
       }
    }

    const handleCancel = () => {
        onCancel()
    }

    const handleSubmit = () => {
        onSubmit(_paymentObject);
    }

    return (

        <>
            {JSON.stringify(_paymentObject)}
            <InputGroup>
                <Input id={'cardNumber'}  type={'number'} onChange={handleOnChange} placeholder="Enter card number here"/>
                <InputGroupAddon  addonType="append">
                    <InputGroupText>Card.no</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <Input id={'month'}  type={'number'} onChange={handleOnChange} placeholder="Enter month"/>
                <InputGroupAddon  addonType="append">
                    <InputGroupText>Month</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <Input id={'year'}  type={'number'} onChange={handleOnChange} placeholder="Enter year"/>
                <InputGroupAddon  addonType="append">
                    <InputGroupText>Year</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <Input id={'securityCode'}  type={'number'} onChange={handleOnChange} placeholder="Enter security code"/>
                <InputGroupAddon  addonType="append">
                    <InputGroupText>security code</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <Button size={'lg'}  outline={true} onClick={handleCancel}>Cancel</Button>
            <Button size={'lg'} color={'success'} outline={true} onClick={handleSubmit}>Pay</Button>
        </>
    )
}


export default Purchase;
