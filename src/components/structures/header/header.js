import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Button, Nav, NavItem, NavLink} from "reactstrap";
import Signup from "../../screens/signup/signup";

const Header = () => {

    const [showSignUp, setShowSignUp] = useState(false)

    const handleSignUpOnClick = () => {
        setShowSignUp(true);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className={'container'}>
                <a className="navbar-brand " href="#">
                    AYRIA-WEB
                </a>
                <Nav>
                    <NavItem>
                        <Button color={'success'} onClick={handleSignUpOnClick}>Signup</Button>
                        <Signup showModal={showSignUp}/>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to={'/dashboard'}>Dashboard</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to={'/profile'}>Profile</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to={'/refuel'}>Refuel</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to={'/anonymouspurchase'}>Anonymouse Purchase</Link></NavLink>
                    </NavItem>
                </Nav>
            </div>
        </nav>
    )
}


export default Header;
