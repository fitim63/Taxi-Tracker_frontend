import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer";

const App = () => {
    return (
        // header and footer are child components of BrowserRouter
        <BrowserRouter>
            <Header/>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
