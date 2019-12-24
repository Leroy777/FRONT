import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Private from './Private';
import Admin from './Admin';

import shoppers from '../Component/master/shoppers';
import signIn from '../Component/master/signIn';
import signUp from '../Component/master/signUp';
import news from '../Component/master/news';
import privateDashboard from '../Component/private/privateDashboard';
import adminDashboard from '../Component/admin/adminDashboard';
import adminInsert from '../Component/admin/adminInsert';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact />
                <Route path="/signin" exact component={signIn}/>
                <Route path="/signup" exact component={signUp}/>
                <Route path="/news" exact component={news}/>
                <Route path="/shoppers" exact component={shoppers}/>
                <Private path="/user/dashboard" exact component={privateDashboard}/>
                <Admin path="/admin/dashboard" exact component={adminDashboard} />
                <Admin path="/admin/dashboard/insert" exact component={adminInsert}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;