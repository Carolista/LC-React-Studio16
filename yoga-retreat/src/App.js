import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home.js'
import BookNow from './pages/BookNow';

function App() {

    // const [currPage, setCurrPage] = useState("book");

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
                    <BookNow />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
