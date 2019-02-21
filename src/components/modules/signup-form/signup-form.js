import React, {useReducer, useState} from 'react';
import reducer from './reducer';
import SignupFormStepOne from "./steps/one";
import CustomModal from "../../elements/CustomModal/CustomModal";
import SignupFormStepTwo from "./steps/two";
import SignupFormStepThree from "./steps/three";
import SignupFormStepFour from "./steps/four";


const SignupForm = () => {
    const initialState = {
        formObject: {
            name: '',
            personalId: '',
            email: '',
            mobile: '',
            username: '',
            password: '',
            fatherName: '',
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const {formObject} = state;
    const [activeStepId, setActiveStepId] = useState(1);

    const handleStepOnChange = (e) => {
        dispatch({type: 'updateFormObject', payload: {target: e.target}})
    }

    return (
        <CustomModal
            title={'signup'}
            showModal={true}
            content={
                <div>
                    Step: {activeStepId}
                    <hr></hr>
                    {activeStepId === 1 &&
                    <SignupFormStepOne data={formObject} onNext={() => setActiveStepId(2)}
                                       onInputChange={handleStepOnChange}/>
                    }
                    {activeStepId === 2 &&
                    <SignupFormStepTwo data={formObject} onPrev={() => setActiveStepId(1)}
                                       onNext={() => setActiveStepId(3)} onInputChange={handleStepOnChange}/>
                    }
                    {activeStepId === 3 &&
                    <SignupFormStepThree data={formObject} onPrev={() => setActiveStepId(2)}
                                         onNext={() => setActiveStepId(4)} onInputChange={handleStepOnChange}/>
                    }
                    {activeStepId === 4 &&
                    <SignupFormStepFour data={formObject} onInputChange={handleStepOnChange}/>
                    }
                </div>
            }>
        </CustomModal>
    )
}


export default SignupForm;
