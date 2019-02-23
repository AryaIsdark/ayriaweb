import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Nav, NavItem, NavLink} from "reactstrap";
import Signup from "../../screens/signup/signup";
import Auth from '../../../utility/auth/Auth';
import Profile from "../../screens/profile/profile";

const auth = new Auth();

const Header = () => {

    const [showSignUp, setShowSignUp] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState({});

    const handleSignUpOnClick = () => {
        setShowSignUp(true);
    }

    useEffect(()=>{
        setLoggedInUser(auth.getLoggedInUser());
    },[])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className={'container'}>
                <a className="navbar-brand " href="#">
                    <img src={'http://me.id.au/images/logo-white.png'} width={120}></img>
                </a>
                <Nav>
                    <NavItem>
                        <button className={'btn btn-green'} onClick={handleSignUpOnClick}>{loggedInUser.email}</button>
                        <Profile/>
                    </NavItem>
                </Nav>
            </div>
        </nav>
    )
}


export default Header;
