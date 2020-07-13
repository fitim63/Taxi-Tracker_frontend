import React from "react";
import Login from "./components/Login/Login";
import home from "./components/Home/Home";
import {Route} from "react-router-dom";
import {ProtectedRoute} from "./components/ProtectedRoute";
import Welcome from "./components/Welcome/Welcome";
import Register from "./components/Register/Register";
import Reports from "./components/Reports/Reports";
import DriverReports from "./components/Reports/DriverReports";
import ReportsDataComponent from "./components/Reports/ReportsDataComponent";

const App = () => {
    return (
        <div className="loginContainer">
            <Route exact path="/" component={Welcome}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/reports" component={Reports}/>
            <Route path="/reports/driver-reports" component={DriverReports}/>
            <Route path="/reports/vehicle-reports" component={ReportsDataComponent}/>
            <ProtectedRoute path="/home" component={home}/>
        </div>
    );
};

export default App;
