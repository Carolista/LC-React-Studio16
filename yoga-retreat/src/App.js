import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header';
import BookNow from './pages/BookNow';

function App() {

    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/book">
                    <Header />
                    <BookNow />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
