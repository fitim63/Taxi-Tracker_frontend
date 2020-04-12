import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Footer />
            </BrowserRouter>
        </Provider>
    );
};

export default App;


