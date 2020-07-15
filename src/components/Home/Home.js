import React, { useEffect } from "react";
import MapComponent from "../MapComponent/MapComponent";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (token) {
      const url = window.location.href;
      if (url === "/http://localhost:3000/home") {
        history.push("/home");
        window.onpopstate = function (event) {
          history.go(1);
        };
      }
    }
  });

  return (
    <div>
      <Header />
      <MapComponent />
    </div>
  );
};

export default Home;
