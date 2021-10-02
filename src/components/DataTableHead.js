import React from "react";

function DataTableHead({ columns }) {
  return (
    <div className='data-table-head'>
      {columns &&
        columns.map((column) => (
          <div
            className={`data-table-head__cell ${
              column.isSmall && column.isSmall ? "small" : ""
            }`}
            key={column.path || column.key}
          >
            <p>{column.label}</p>
          </div>
        ))}
    </div>
  );
}

export default DataTableHead;
