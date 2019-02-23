import React, {useEffect, useState} from 'react';
import {Nav, NavItem} from "reactstrap";
import Auth from '../../../utility/auth/Auth';

const auth = new Auth();

const Header = () => {

    const [showSignUp, setShowSignUp] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState({});

    const handleSignUpOnClick = () => {
        setShowSignUp(true);
    }


    const handleLogOff = (event) =>{
        event.preventDefault();
        auth.logout();
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
                        <button className={'btn btn-danger danger'} onClick={handleLogOff}>Log off</button>

                    </NavItem>
                </Nav>
            </div>
        </nav>
    )
}


export default Header;
