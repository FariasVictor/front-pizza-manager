import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewClient from './pages/NewClient';

export default function Routes() {
    return (
        <Switch>
            <Route path="/novo-cliente" component={NewClient} />
        </Switch>
    );
}