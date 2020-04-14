import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Header1 from "./header1.js"

const App = ({ children }) => {
    return (

        <div>
            <Header1 />
            {children}
        </div>
    );
};

export default App;


{/*       <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Footer />
            </BrowserRouter>
        </Provider>*/}
