import React, { useState } from "react";
import ListGroup from "./ListGroup";
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import ReportsDataComponent from "./ReportsDataComponent";
import { getReportsAction } from "../../actions";

const Reports = () => {
  const [types] = useState([
    { id: 0, name: "Vehicle Reports" },
    { id: 1, name: "Driver Work Schedule" },
    { id: 2, name: "Drivers" },
    { id: 3, name: "Servers" },
  ]);
  const [selectedType, setSelectedType] = useState(null);

  const reports = useSelector((state) => state.reports.data);
  const reportStatusPending = useSelector((state) => state.reports.pending);

  const dispatch = useDispatch();

  const handleSelectedType = async (type) => {
    setSelectedType(type);
    dispatch(await getReportsAction(type.id));
  };

  return (
    <div>
      <Header />
      <div className="table-list-custom">
        <div className="col-3">
          <ListGroup
            items={types}
            selectedItem={selectedType}
            onItemSelect={(type) => handleSelectedType(type)}
          />
        </div>
      </div>
      <div>
        <ReportsDataComponent
          reportData={reports}
          status={reportStatusPending}
          type={selectedType === null ? 0 : selectedType.id}
        />
      </div>
    </div>
  );
};

export default Reports;
