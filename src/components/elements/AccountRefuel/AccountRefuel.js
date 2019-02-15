import React, {useState} from 'react';

const AccountRefuel = ({amount, onChange, onSubmit}) => {

    const [_amount, setAmount] = useState(amount);

    const handleOnChange = (event) => {
        const value = Number(event.target.value)
        if (value) {
            setAmount(value);
            onChange(value);
        }
    }

    const handleSubmit = () => {
        onSubmit(_amount);
    }

    return (
        <>
            <div className={'form-group'}>
                <input className={'form-control input-lg'} onChange={handleOnChange} placeholder={'رغم دلخواه را اینجا وارد کن '}></input>
            </div>
            <div className={'form-group'}>
                <button className={'btn btn-lg btn-success'} onClick={handleSubmit}>شارژ کن</button>
            </div>
        </>
    )
}


export default AccountRefuel;
