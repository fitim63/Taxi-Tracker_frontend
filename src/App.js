import React from "react";
import Login from "./components/Login/Login";
import home from "./components/Home/Home";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Welcome from "./components/Welcome/Welcome";
import Register from "./components/Register/Register";

import UserDetails from "./components/UserDetails/UserDetails";
import VehicleAddDelete from "./components/VehicleAddDelete/VehicleAddDelete";
import Reports from "./components/Reports";


const App = () => {
  return (
    <div className="loginContainer">
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={home} />
      <ProtectedRoute path="/reports" component={Reports} />
      <Route path="/userDetails" component={UserDetails} />
      <Route path="/vehicleAddDelete" component={VehicleAddDelete} />
    </div>
  );
};

export default App;
