import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from "../components/screens/dashboard/dashboard";
import Profile from "../components/screens/profile/profile";


const Routes = () => {

    return(
        <div className={'page-container'}>
            <Route exact  path='/dashboard' component={Dashboard}/>
            <Route path='/profile' component={Profile}/>
        </div>
        )

};

export default Routes;
