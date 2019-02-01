import React from 'react';
import {Link} from "react-router-dom";
import {Nav, NavItem, NavLink} from "reactstrap";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className={'container'}>
                <a className="navbar-brand " href="#">
                    AYRIA-WEB
                </a>
                {/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
                        {/*data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
                        {/*aria-expanded="false"*/}
                        {/*aria-label="Toggle navasdasdigation">*/}
                    {/*<span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}
                <Nav>
                    <NavItem>
                        <NavLink href="#"><Link to={'/dashboard'} >Dashboard</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to={'/profile'} >Profile</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to={'/refuel'} >Refuel</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><Link to={'/anonymouspurchase'} >Anonymouse Purchase</Link></NavLink>
                    </NavItem>
                </Nav>
            </div>
        </nav>
    )
}


export default Header;
