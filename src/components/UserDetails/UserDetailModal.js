import React from "react";
import "./UserDetails.css";

const UserDetailModal = ({ closeModal }) => {
  return (
    <div>
      <div className="modal-header">
        <h6 className="modal-title">Forget password ?</h6>
      </div>
      <div className="modal-body" style={{ padding: "45px 10px 50px 15px" }}>
        <p className="font-weight-normal">
          <p>
            Please input the email address and click the “Send” button. We will
            send a URL of password reset
          </p>
          <p>page to the registered account.</p>
        </p>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Server's email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              server@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="button" onClick={closeModal}>
          Send
        </button>
      </div>
    </div>
  );
};

export default UserDetailModal;
