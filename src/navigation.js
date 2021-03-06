import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Publications from "./pages/publications";
import ShareThoughtsPage from "./pages/share-thoughts";
import RegisterPage from './pages/register';
import LoginPage from './pages/login';


function Navigation() {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Publications}/>
            <Route path="/share" component={ShareThoughtsPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/login" component={LoginPage}/>
        </Switch>
    </BrowserRouter>
)
}

export default Navigation;