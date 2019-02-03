import React from 'react';
import {Input} from "reactstrap";


const SignupFormStepOne = ({onInputChange}) => {

    const handleFormObject = (e) => {
        onInputChange(e)
    }

    return (
        <div>
            <div>
                <div className={'form-group'}>
                    <label>Name</label>
                    <Input id={'name'} onChange={e => handleFormObject(e)}/>
                </div>
                <div className={'form-group'}>
                    <label>PersonalId</label>
                    <Input id={'personalId'} onChange={e => handleFormObject(e)}/>
                </div>
                <div className={'form-group'}>
                    <label>Email</label>
                    <Input id={'email'} onChange={e => handleFormObject(e)}/>
                </div>
                <div className={'form-group'}>
                    <label>Username</label>
                    <Input id={'username'} onChange={e => handleFormObject(e)} />
                </div>
                <div className={'form-group'}>
                    <label>Password</label>
                    <Input id={'password'} onChange={e => handleFormObject(e)} />
                </div>
            </div>
        </div>
    )
}


export default SignupFormStepOne;
