import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Home} />
        </Router>
    );
}

export default App;
