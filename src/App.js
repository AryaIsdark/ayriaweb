import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/structures/header/header";
import Routes from "./router/routes";
import {BrowserRouter as Router} from "react-router-dom";
import Auth from "./utility/auth/Auth";
import api from './api/Api';
import CustomModal from "./components/elements/CustomModal/CustomModal";
import Login from "./components/screens/login/login";

const auth = new Auth();

const App = () => {

    const[isAuthenticated, setIsAuthenticated] = useState(false)

    async function getAccount(){
        try {
            const response = await api.fn.getAccount();
            console.log(response);
            if(response.ok){
                auth.setLoggedInUser(response.data);
                setIsAuthenticated(true);
            }
       }
       catch (err) {
            console.log(err);
       }
    }

    useEffect(()=>{
        getAccount();
    },[])

    return (
        <Router>
            <>
            {isAuthenticated && <div>
                <Header/>
                <div className={'patterned-content'}></div>
                <div className="container">
                    <Routes/>
                </div>
            </div>}
            {!isAuthenticated &&
            <CustomModal showModal={true} title={'Login'} content={<Login/>}/>
            }
            </>
        </Router>
    );
}

export default App;
