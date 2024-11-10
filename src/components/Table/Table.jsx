import React, { useState } from "react";
import "./Table.css";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export default function Table({ initialWords }) {
  const [editingRow, setEditingRow] = useState(null);
  const [updatedRows, setUpdatedRows] = useState(initialWords);

  const handleEdit = (id) => {
    setEditingRow(id);
  };

  const handleCancel = () => {
    setEditingRow(null);
  };

  const handleSave = () => {
    const rowToSave = updatedRows.find((row) => row.id === editingRow);

    if (!rowToSave.english || !rowToSave.transcription || !rowToSave.russian) {
      alert("Ошибка: все поля должны быть заполнены.");
      return;
    }

    console.log("Сохраненные параметры:", {
      english: rowToSave.english,
      transcription: rowToSave.transcription,
      russian: rowToSave.russian,
    });

    setUpdatedRows((prevRows) =>
      prevRows.map((row) =>
        row.id === editingRow
          ? {
              ...row,
              english: rowToSave.english,
              transcription: rowToSave.transcription,
              russian: rowToSave.russian,
            }
          : row
      )
    );

    setEditingRow(null);
  };

  const handleInputChange = (id, field, value) => {
    setUpdatedRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };
  return (
    <table className="table">
      <TableHeader />
      <TableBody
        updatedRows={updatedRows}
        editingRow={editingRow}
        onEdit={handleEdit}
        onSave={handleSave}
        onCancel={handleCancel}
        onInputChange={handleInputChange}
      />
    </table>
  );
}
