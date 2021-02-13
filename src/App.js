import React from 'react'
import Header from '../src/components/Header';
import Home from '../src/pages/Home';
import Account from '../src/pages/Account';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Destination from '../src/containers/Destination'
export default function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/city/:destination">
					<Destination />
				</Route>
                <Route path="/account">
                    <Account/>
                </Route>
            </Switch>
        </div>
    )
}
