import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewClient from './pages/NewClient';
import NewAddress from './pages/NewAddress';

export default function Routes() {
    return (
        <Switch>
            <Route path="/novo-cliente" component={NewClient} />
            <Route path="/novo-endereco/:clientId" exact component={NewAddress} />
        </Switch>
    );
}