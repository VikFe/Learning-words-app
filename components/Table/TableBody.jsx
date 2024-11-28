import React from "react";
import Row from "./Row";

const TableBody = ({
  updatedRows,
  editingRow,
  onEdit,
  onSave,
  onCancel,
  onInputChange,
  onDelete,
}) => {
  return (
    <tbody>
      {updatedRows.map((row) => (
        <Row
          key={row.id}
          row={row}
          isEditing={editingRow === row.id}
          onEdit={onEdit}
          onSave={onSave}
          onCancel={onCancel}
          onInputChange={onInputChange}
          onDelete={onDelete}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
