import React from "react";
import "./reports.css";
import moment from "moment-timezone";

const renderReports = (reportData, type, reportStatusPending) => {
  if (reportData && reportData.length > 0 && !reportStatusPending) {
    return reportData.map((r) => {
      if (type === 0 && r.vehicles) {
        return (
          <tr key={r.id}>
            <td>{r.id}</td>
            <td>{r.vehicles.name}</td>
            <td>{r.distanceTraveledInKilometers}</td>
            <td>{r.totalFuelSpentUntilNow}</td>
          </tr>
        );
      } else if (type === 1) {
        return (
          <tr key={r.id}>
            <td>{r.id}</td>
            <td>{moment(r.driverWorkStartTime).format("MM/DD/YYYY")}</td>
            <td>{moment(r.driverWorkEndTime).format("MM/DD/YYYY")}</td>
            <td>{r.is_working}</td>
          </tr>
        );
      } else if (type === 2) {
        return (
          <tr key={r.id}>
            <td>{r.id}</td>
            <td>{r.firstName}</td>
            <td>{r.lastName}</td>
            <td>{r.uuid}</td>
            <td>{r.age}</td>
          </tr>
        );
      } else if (type === 3) {
        return (
          <tr key={r.id}>
            <td>{r.id}</td>
            <td>{r.firstName}</td>
            <td>{r.lastName}</td>
            <td>{r.email}</td>
            <td>{r.username}</td>
            <td>{r.uuid}</td>
          </tr>
        );
      }
      return null;
    });
  } else if (!reportData) {
    return (
      <tr align="center">
        <td colSpan="5">No reports available.</td>
      </tr>
    );
  }
};

const renderHeader = (id) => {
  const headerTypes = [
    {
      id: 0,
      head: ["Id", "Vehicle name", "Distance Traveled", "Total fuel spent"],
    },
    {
      id: 1,
      head: ["Work schedule Id", "Start Time", "End Time", "Working status"],
    },
    {
      id: 2,
      head: ["Id", "First Name", "Last Name", "Driver UUID", "Age"],
    },
    {
      id: 3,
      head: [
        "Server Id",
        "First Name",
        "Last Name",
        "Email",
        "Username",
        "UUID",
      ],
    },
  ];
  return headerTypes[id].head.map((value, key) => (
    <th key={key} scope="col">
      {value}
    </th>
  ));
};

const ReportsDataComponent = ({ reportData, type, reportStatusPending }) => {
  console.log("Report Data: ", reportData);
  console.log("Type: ", type);
  return (
    <div className="col-9">
      <table className="table">
        <thead className="thead-dark">
          <tr>{renderHeader(type)}</tr>
        </thead>
        <tbody>{renderReports(reportData, type, reportStatusPending)}</tbody>
      </table>
    </div>
  );
};

export default ReportsDataComponent;
