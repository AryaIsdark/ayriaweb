import React, {useReducer} from 'react';
import reducer from './reducer';
import SignupFormStepOne from "./steps/one";


const SignupForm = () => {
    const initialState = {
        formObject: {
            name: '',
            personalId: '',
            email:'',
            username: '',
            password:''
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const {formObject} = state;
    const handleStepOnChange = (e) => {
        debugger;
        dispatch({ type: 'updateFormObject', payload: { target: e.target } })
    }

    return (
        <div>
            <SignupFormStepOne onInputChange={handleStepOnChange} />
            {JSON.stringify(formObject)}
        </div>
    )
}


export default SignupForm;
