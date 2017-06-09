import React from "react"
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"

import Index from "./Index"
import Overview from "./Overview"

ReactDOM.render(
    <Router>
        <Switch>
             <Route exact path="/" component={Index} />
             <Route exact path="/overview" component={Overview} />
        </Switch>
    </Router>,
    document.body
)