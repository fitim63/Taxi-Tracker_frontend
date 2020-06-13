import React from "react";
import "./Welcome.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Welcome = () => {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const handleOnClick = () => {
    if (token) {
      history.push("/home");
    } else {
      history.push("/login");
    }
  };
  return (
    <div className="background-image">
      <p className="main-title" onClick={handleOnClick}>
        WELCOME
      </p>
    </div>
  );
};

export default Welcome;
