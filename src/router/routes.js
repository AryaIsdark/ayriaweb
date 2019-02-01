import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from "../components/screens/dashboard/dashboard";
import Profile from "../components/screens/profile/profile";
import Refuel from "../components/screens/refuel/refuel";
import AnonymousPurchase from "../components/screens/anonymous_purchase/anonymous_purchase";


const Routes = () => {

    return(
        <div className={'page-container'}>
            <Route exact  path='/dashboard' component={Dashboard}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/refuel' component={Refuel}/>
            <Route path='/anonymouspurchase' component={AnonymousPurchase}/>
        </div>
        )

};

export default Routes;
