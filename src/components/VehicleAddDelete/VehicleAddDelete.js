import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Table } from "react-bootstrap";
import createVehicle from "../../actions/createVehicleAction";
import deleteVehicle from "../../actions/deleteVehicleAction";
import editVehicleById from "../../actions/updateVehicleAction";
import getAllVehicles from "../../actions/getVehicleAction";
import { useDispatch, useSelector } from "react-redux";
import "./CrudComponent.css";
import CrudComponent from "./CrudComponent";

const VehicleAddDelete = () => {
  const dispatch = useDispatch();
  const allVehicles = useSelector((state) => state.getAllVehicle);

  let [visibleModal, setVisibleModal] = useState(false);
  let [vehicleName, setVehicleName] = useState("");
  let [vehicleModel, setVehicleModel] = useState("");
  let [vehicleFuelType, setVehicleFuelType] = useState("");
  let [vehicleStatus, setVehicleStatus] = useState("");

  useEffect(() => {
    dispatch(getAllVehicles());
  }, []);

  const handleOnClick = async () => {
    dispatch(getAllVehicles());
    setEditClicked({
      clicked: !editClicked.clicked,
    });
  };

  const [editClicked, setEditClicked] = useState({
    clicked: false,
    itemSelected: -2,
  });

  const handleEdit = (isClicked, id, item) => {
    const editClickedObject = { clicked: isClicked, itemSelected: id };
    setEditClicked(editClickedObject);
  };

  const renderItems = ({ data, pending }) => {
    if (data !== null && !pending) {
      return data.map((item) => {
        const id = item.id;
        return (
          (!editClicked.clicked && (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.model}</td>
              <td>{item.fuelType}</td>
              <td>{item.currentStatus ? "true" : "false"}</td>
              <button
                className="button2  mr-3"
                onClick={() => handleEdit(true, id)}
              >
                Edit
              </button>
              <button
                className="button3  mr-3"
                onClick={() => {
                  dispatch(deleteVehicle(item.id));
                  window.location.reload(false);
                }}
              >
                Delete
              </button>
            </tr>
          )) ||
          (editClicked && item.id === editClicked.itemSelected && (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>
                <input
                  value={vehicleName}
                  onChange={(e) => setVehicleName(e.target.value)}
                />
              </td>
              <td>
                <input
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                />
              </td>{" "}
              <td>
                <input
                  value={vehicleFuelType}
                  onChange={(e) => setVehicleFuelType(e.target.value)}
                />
              </td>{" "}
              <td>
                <input
                  value={vehicleStatus ? "true" : "false"}
                  onChange={(e) => setVehicleStatus(e.target.value)}
                />
              </td>
              <button
                className="button2  mr-3"
                onClick={() => {
                  handleEdit(false, id, item);
                  dispatch(
                    editVehicleById({
                      vehicleName,
                      vehicleModel,
                      vehicleStatus,
                      vehicleFuelType,
                    })
                  );
                }}
              >
                Save
              </button>
            </tr>
          ))
        );
      });
    }
  };
  return (
    <div>
      <Header />

      <div className="container">
        <button className="button1 mr-3" onClick={handleOnClick}>
          {" "}
          Vehicles{" "}
        </button>
        <button className="button1  mr-3" onClick={() => setVisibleModal(true)}>
          Create{" "}
        </button>

        {visibleModal && (
          <CrudComponent
            vehicleName={vehicleName}
            setVehicleName={(e) => setVehicleName(e.target.value)}
            vehicleModel={vehicleModel}
            setVehicleModel={(e) => setVehicleModel(e.target.value)}
            vehicleStatus={vehicleStatus}
            setVehicleStatus={(e) => setVehicleStatus(e.target.value)}
            vehicleFuelType={vehicleFuelType}
            setVehicleFuelType={(e) => setVehicleFuelType(e.target.value)}
            closeModal={() => setVisibleModal(false)}
            saveModal={() =>
              dispatch(
                createVehicle({
                  vehicleName,
                  vehicleModel,
                  vehicleStatus,
                  vehicleFuelType,
                })
              )
            }
          />
        )}
        <Table responsive hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>VEHICLE</th>
              <th>MODEL</th>
              <th>FUEL TYPE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>{renderItems(allVehicles)}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default VehicleAddDelete;
