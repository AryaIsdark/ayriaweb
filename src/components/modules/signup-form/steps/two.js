import React from 'react';
import {Input} from "reactstrap";


const SignupFormStepTwo = ({data, onInputChange, onNext, onPrev}) => {

    const handleFormObject = (e) => {
        onInputChange(e)
    }

    const handleNext= () => {
        onNext()
    }

    const handlePrev= () => {
        onPrev()
    }

    return (
        <div>
            {/*{JSON.stringify(data)}*/}
            <div>
                <div className={'form-group'}>
                    <label>Father's name</label>
                    <Input id={'fatherName'} value={data.fatherName}  onChange={e => handleFormObject(e)}/>
                </div>
                <div className={'form-group'}>
                    <button onClick={handleNext} className={'btn btn-primary'}>Next</button>
                </div>
                <div className={'form-group'}>
                    <button onClick={handlePrev} className={'btn btn-primary'}>Back</button>
                </div>
            </div>
        </div>
    )
}


export default SignupFormStepTwo;
