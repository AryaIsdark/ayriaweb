import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Nav, NavItem, NavLink} from "reactstrap";
import Signup from "../../screens/signup/signup";
import Auth from '../../../utility/auth/Auth';

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className={'container'}>
                <a className="navbar-brand " href="#">
                    <img src={'http://me.id.au/images/logo-white.png'} width={120}></img>
                </a>
                <Nav>
                    <NavItem className={'active'}>
                        <NavLink href="#"><Link to={'/dashboard'}>صفحه اصلی</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to={'/refuel'}>شارژ </Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to={'/anonymouspurchase'}>ثبت خرید بدون کارت </Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <button className={'btn btn-green'} onClick={handleSignUpOnClick}>{loggedInUser.email}</button>
                        <Signup showModal={showSignUp}/>
                    </NavItem>
                </Nav>
            </div>
        </nav>
    )
}


export default Header;
