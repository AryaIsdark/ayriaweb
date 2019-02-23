import React from 'react';
import * as Auth from "../../../utility/auth/TokenTools";

const Profile = () => {

    const handleLogOff = (event) =>{
        event.preventDefault();
        Auth.logout();
    }

    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Profile
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#" onClick={handleLogOff}>Logoff</a>
                </div>
            </div>
        </div>
    )
}


export default Profile;
