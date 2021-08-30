import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/products" exact component={Home} />
      <Route path="/products/:id" exact component={Home} />
      <Route path="/cart/" exact component={Home} />
      <Route path="/orders/" exact component={Home} />
    </Router>
  );
}

export default App;
