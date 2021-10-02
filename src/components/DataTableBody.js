import React from "react";

function DataTableBody({ columns, data }) {
  function renderCellContent(item, index, column) {
    if (column.content) return column.content(item.id);
    return column.path === "index" ? index + 1 : item[column.path];
  }

  function createKey(item, column) {
    return item.id + (column.path || column.key);
  }

  return (
    <div className='data-table-body'>
      {data &&
        data.map((item, index) => (
          <div key={item.id} className='data-table-body__row'>
            {columns &&
              columns.map((column) => (
                <div
                  key={createKey(item, column)}
                  className={`data-table-body__cell ${
                    column.isSmall && column.isSmall ? "small" : ""
                  }`}
                >
                  {renderCellContent(item, index, column)}
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}

export default DataTableBody;
