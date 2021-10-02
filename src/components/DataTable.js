import React from "react";
import DataTableBody from "./DataTableBody";
import DataTableHead from "./DataTableHead";

function DataTable({ columns, data, hoverable = false }) {
  return (
    <div className={`data-table ${hoverable ? "hoverable" : ""}`}>
      <DataTableHead columns={columns} />
      <DataTableBody columns={columns} data={data} />
    </div>
  );
}

export default DataTable;
