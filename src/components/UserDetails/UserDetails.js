import React, { useEffect } from "react";
import Header from "../Header/Header";
import "./UserDetails.css";
import { fetchUserDetails } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import UserDetailModal from "./UserDetailModal";

const UserDetails = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  useEffect(() => {
    dispatch(fetchUserDetails());
  }, []);
  return (
    <div>
      <Header />
      <div className="table-list-custom">
        <div className="mar col-5">
          {userDetails.data && (
            <div>
              <p className="list-group-item">
                First Name: {userDetails.data.firstName}
              </p>
              <p className="list-group-item">
                Last Name: {userDetails.data.lastName}
              </p>
              <p className="list-group-item">
                Username: {userDetails.data.username}
              </p>
              <p className="list-group-item">Email: {userDetails.data.email}</p>
            </div>
          )}
        </div>
        <UserDetailModal />
      </div>
    </div>
  );
};

export default UserDetails;
