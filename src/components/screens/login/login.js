import React, {useEffect, useState} from 'react';
import Auth from '../../../utility/auth/Auth';
import Signup from "../signup/signup";
import {NavItem} from "reactstrap";
import CustomModal from "../../elements/CustomModal/CustomModal";

const auth = new Auth();

const Login = () => {

    async function handleLogin(event){
        event.preventDefault();
        try{
            const response = await auth.login('user','user',false);
            if(response){
                window.location.reload();
            }
        }
        catch (err) {
            console.log(err);
        }

    }

    useEffect(()=>{

    },[])

    return (
        <CustomModal
            title={'login'}
            showModal={true}
            content={
            <form>
                <div className={'form-group'}>
                    <input className={'form-control input-lg'} placeholder={'username'} />
                </div>
                <div className={'form-group'}>
                    <input className={'form-control input-lg'} placeholder={'password'} />
                </div>
                <button className={'btn btn-primary btn-lg'} onClick={handleLogin}>Login</button>
                <button className={'btn btn-green'} >ثبت نام کنید</button>
            </form>
            }
        />

    )
}


export default Login;
