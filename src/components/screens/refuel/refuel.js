import React, {useState} from 'react';
import AccountBalance from "../../elements/AccountBalance/AccountBalance";
import AccountRefuel from "../../elements/AccountRefuel/AccountRefuel";
import CustomModal from "../../elements/CustomModal/CustomModal";
import Purchase from "../../elements/Purchase/Purchase";

const Refuel = () => {

    const balance = 10000;

    const [_amount, setAmount] = useState(0);
    const [_showModal, setShowModal] = useState(false);

    const handleAccountRefuelOnChange = (value) => {
        if (value) {
            setAmount(value);
        }
    }

    const handleAccountRefuelOnSubmit = (value) => {
        if (value) {
            setShowModal(true);
        }
    }

    const handlePurchaseOnSubmit = (value) => {
        if (value === 'success') {
            setShowModal(false);
        }
    }

    const handlePurchaseOnCancel = () => {
        setShowModal(false);
    }

    return (
        <div>
            <AccountBalance backgroundColor={'whitesmoke'} size={'50'} orientation={'right'}/>
            <AccountRefuel amount={0} onChange={handleAccountRefuelOnChange} onSubmit={handleAccountRefuelOnSubmit}/>
            `Your new balance will be ${balance + _amount}`

            <CustomModal showModal={_showModal}
                         title={'Shetab modal'}
                         content={<Purchase amount={_amount} onSubmit={handlePurchaseOnSubmit} onCancel={handlePurchaseOnCancel}/>}/>
        </div>
    )
}


export default Refuel;
