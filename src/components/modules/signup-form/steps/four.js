import React from 'react';



const SignupFormStepFour = ({data}) => {


    const handleLogin = () => {
        console.log('Attempted to login')
    }

    return (
        <div>
            <div>
                You have succesfully signed up with the following information.
                <hr></hr>
                <pre>{JSON.stringify(data)}</pre>
            </div>
            <hr></hr>
            <div className={'form-group'}>
                <button onClick={handleLogin} className={'btn btn-primary'}>Login now</button>
            </div>
        </div>
    )
}


export default SignupFormStepFour;
