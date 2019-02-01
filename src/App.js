import React, {Component} from 'react';
import './App.css';
import Header from "./components/structures/header/header";
import Routes from "./router/routes";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className={'patterned-content'}>
                        Test
                    </div>
                    <div className="container">
                        <Routes/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
