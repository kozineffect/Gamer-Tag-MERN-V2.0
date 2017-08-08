// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

var browserHistory = router.browserHistory;

{/*ADD IMPORTS FOR PARENT AND CHILD COMPONENTS*/}
import App from "../App.js";

module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Search" component={Search} />
      <Route path="Saved" component={Saved} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Search} />

    </Route>
  </Router>
);