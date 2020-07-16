import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
}) => {
  return (
    <ul className="list-group text-left">
      {items.map((item) => (
        <button
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem
              ? "text-left list-group-item list-group-item-secondary active"
              : "text-left list-group-item list-group-item-secondary"
          }
        >
          {item[textProperty]}
        </button>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
};

export default ListGroup;
