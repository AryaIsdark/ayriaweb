import React, {useState} from 'react';
import CustomModal from "../../elements/CustomModal/CustomModal";
import SignupForm from "../../modules/signup-form/signup-form";



const Signup = ({showModal}) => {

    return (
        <div>
            <CustomModal title={'Signup'}
                         showModal={showModal}
                         content={<SignupForm/>}
            />
        </div>
    )
}


export default Signup;
