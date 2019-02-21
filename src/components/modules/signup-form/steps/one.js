import React from 'react';
import {Input} from "reactstrap";


const SignupFormStepOne = ({data, onInputChange, onNext}) => {

    const handleFormObject = (e) => {
        onInputChange(e)
    }

    const handleNext= () => {
        onNext()
    }

    return (
        <div>
            <div>
                <div className={'form-group'}>
                    <label>Name</label>
                    <Input id={'name'} value={data.name} onChange={e => handleFormObject(e)}/>
                </div>
                <div className={'form-group'}>
                    <label>PersonalId</label>
                    <Input id={'personalId'} value={data.personalId} onChange={e => handleFormObject(e)}/>
                </div>
                <div className={'form-group'}>
                    <label>Email</label>
                    <Input id={'email'} value={data.email} onChange={e => handleFormObject(e)}/>
                </div>
                <div className={'form-group'}>
                    <label>Mobile</label>
                    <Input id={'mobile'} value={data.mobile} onChange={e => handleFormObject(e)}/>
                </div>
                <div className={'form-group'}>
                    <label>Username</label>
                    <Input id={'username'} value={data.username} onChange={e => handleFormObject(e)} />
                </div>
                {/*//TODO Add password strengh: use @react-password-strength*/}
                <div className={'form-group'}>
                    <label>Password</label>
                    <Input id={'password'} value={data.password} onChange={e => handleFormObject(e)} />
                </div>
                <hr></hr>
                <div className={'form-group'}>
                    <button onClick={handleNext} className={'btn btn-primary'}>Next</button>
                </div>
            </div>
        </div>
    )
}


export default SignupFormStepOne;
