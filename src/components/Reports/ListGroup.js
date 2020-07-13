import React from "react";

const ListGroup = ({
    items,
    textProperty,
    valueProperty,
    selectedItem,
    onItemSelect
}) =>{
    return (
        <ul className="list-group">
            {items.map(item => (
                <a
                    onClick={() => onItemSelect(item)}
                    key={item[valueProperty]}
                    className={
                        item === selectedItem ? "list-group-item list-group-item-action active"
                            : "list-group-item list-group-item-action"
                    }
                >
                    {item[textProperty]}
                </a>
            ))}
        </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "id"
};


export default ListGroup;