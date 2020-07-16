import React from 'react'
import "./UserDetails.css";

const UserDetailModal = ({ closeModal }) => {
    return (
        <div>
            <div className="modal-header">
                <h6 className="modal-title">Change Password</h6>
            </div>
            <div className="modal-body" style={{padding:"45px 10px 50px 15px"}}>
                <label>Enter New Password: <input />
                </label>
                <p></p>
                <label>Confirm New Password: <input />
                </label>
            </div>
            <div className="modal-footer">
                <button type="button" className="button" onClick={closeModal}>Save Changes</button>
            </div>
        </div>
    )
}

export default UserDetailModal