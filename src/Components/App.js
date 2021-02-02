import React from 'react'
import { BrowserRouter, Route} from "react-router-dom";
import LandingPage from '../Pages/LandingPage/LandingPage';
import SignupPage from '../Pages/SignupPage/SignupPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import Charecter from '../Pages/CharecterPage/Charecter'


function app() {
    return (
        <div>
           <BrowserRouter>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/landing" component={LoginPage} />
            <Route exact path="/charecter" component={Charecter} />
           </BrowserRouter>
        </div>
    )
}

export default app
