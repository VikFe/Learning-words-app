import React, { useContext, useState, useEffect } from "react";
import { CardContext } from "../../store/words-context";
import "./Table.css";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export default function Table() {
  const { words, deleteWord, editWord } = useContext(CardContext);
  const [editingRow, setEditingRow] = useState(null);
  const [updatedRows, setUpdatedRows] = useState(words);
  const [showWarning, setShowWarning] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);

  // Инициализируем updatedRows при монтировании компонента
  useEffect(() => setUpdatedRows(words), [words]);

  const handleEdit = (id) => {
    setEditingRow(id);
  };

  const handleCancel = () => {
    setEditingRow(null);
  };

  const handleSave = () => {
    const rowToSave = updatedRows.find((row) => row.id === editingRow);
    editWord(editingRow, rowToSave);
    // setUpdatedRows((prevRows) =>
    //   prevRows.map((row) => (row.id === editingRow ? rowToSave : row))
    // );
    setEditingRow(null);
    // Обновление списка слов, если необходимо
    setUpdatedRows((prevRows) =>
      prevRows.map((row) => (row.id === editingRow ? rowToSave : row))
    );
  };

  const handleInputChange = (id, field, value) => {
    setUpdatedRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleDelete = (id) => {
    setRowToDelete(id);
    setShowWarning(true);
  };

  const confirmDelete = () => {
    deleteWord(rowToDelete);
    setUpdatedRows((prevRows) =>
      prevRows.filter((row) => row.id !== rowToDelete)
    );
    setShowWarning(false);
    setRowToDelete(null);
  };

  const cancelDelete = () => {
    setShowWarning(false);
    setRowToDelete(null);
  };

  return (
    <div>
      <table className="table">
        <TableHeader />
        <TableBody
          updatedRows={updatedRows}
          editingRow={editingRow}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
          onInputChange={handleInputChange}
          onDelete={handleDelete}
        />
      </table>
      {showWarning && (
        <div className="warning">
          <p>Вы уверены, что хотите удалить это слово?</p>
          <button onClick={confirmDelete}>Да</button>
          <button onClick={cancelDelete}>Нет</button>
        </div>
      )}
    </div>
  );
}
