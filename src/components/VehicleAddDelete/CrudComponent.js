import React from "react";
import "./CrudComponent.css";

const CrudComponent = ({
  closeModal,
  saveModal,
  vehicleName,
  vehicleModel,
  vehicleFuelType,
  vehicleStatus,
  setVehicleName,
  setVehicleModel,
  setVehicleFuelType,
  setVehicleStatus,
}) => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Add Vehicles</h5>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={closeModal}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body" align="center">
        <h6> Vehicle </h6>
        <input value={vehicleName} onChange={setVehicleName}></input>
      </div>
      <div className="modal-body" align="center">
        <h6> Model </h6>
        <input value={vehicleModel} onChange={setVehicleModel}></input>
      </div>
      <div className="modal-body" align="center">
        <h6> Fuel Type </h6>
        <input value={vehicleFuelType} onChange={setVehicleFuelType}></input>
      </div>
      <div className="modal-body" align="center">
        <h6> Status </h6>
        <input value={vehicleStatus} onChange={setVehicleStatus}></input>
      </div>

      <div className="modal-footer">
        <button type="button" className="button" onClick={saveModal}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CrudComponent;
