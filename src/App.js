import React from "react";
import { Home, Users } from "./Pages";
import { Header } from "./Components";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Route path="/" component={Home} />
          <Route path="/users" component={Users} />
        </div>
      </Router>
    </div>
  );
}

export default App;
