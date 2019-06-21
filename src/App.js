import React from "react";
import { Home, Books, Users } from "./Pages";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Home>
          <div>
            <Route path="/books" component={Books} />
            <Route path="/users" component={Users} />
          </div>
        </Home>
      </Router>
    </div>
  );
}

export default App;
