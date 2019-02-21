import React from 'react';
import CommonDetailsView from "../../../elements/CommonDetailsView/CommonDetailsView";


const SignupFormStepThree = ({data, onInputChange, onNext, onPrev}) => {


    const handleFinish= () => {
        console.log(data);
        onNext()
    }

    const handlePrev= () => {
        onPrev()
    }

    return (
        <div>
            <div>
            <CommonDetailsView dataObject={data} fields={['name','email','mobile','Username','fatherName']}/>
            </div>
            <hr></hr>
            <div className={'form-group'}>
                <button onClick={handleFinish} className={'btn btn-primary'}>I agree, let's finish it</button>
            </div>
            <div className={'form-group'}>
                <button onClick={handlePrev} className={'btn btn-primary'}>Back</button>
            </div>
        </div>
    )
}


export default SignupFormStepThree;
