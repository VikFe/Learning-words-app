// TableBody.js
import React, { useContext } from "react";
import { CardContext } from "../../store/words-context";
import Row from "./Row";

const TableBody = ({ editingRow, onEdit, onSave, onCancel, onInputChange }) => {
  const { words } = useContext(CardContext);
  return (
    <tbody>
      {words.map((row) => (
        <Row
          key={row.id}
          row={row}
          isEditing={editingRow === row.id}
          onEdit={onEdit}
          onSave={onSave}
          onCancel={onCancel}
          onInputChange={onInputChange}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
