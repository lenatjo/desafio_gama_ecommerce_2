import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from "./view/Home";
import Customer from "./view/Customer";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/clientes' component={Customer} />
            </Switch>
        </BrowserRouter>

    );
};

