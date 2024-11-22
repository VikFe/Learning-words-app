import React, { useState, useContext, useEffect } from "react";
import "./Table.css";
import Loader from "../Loader/Loader";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { CardContext } from "../../store/words-context";

export default function Table() {
  const { words, addWord, editWord, deleteWord, loading, error } =
    useContext(CardContext);
  const [editingRow, setEditingRow] = useState(null);
  const [updatedRows, setUpdatedRows] = useState(words);

  useEffect(() => {
    setUpdatedRows(words); // обновляем updatedRows при изменении words
  }, [words]);

  const handleEdit = (id) => {
    setEditingRow(id);

    // Устанавливаем значение строки в состояние для редактирования
    const rowToEdit = words.find((word) => word.id === id);
    setUpdatedRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? rowToEdit : row))
    );
  };

  const handleCancel = () => {
    setEditingRow(null);
    setUpdatedRows(words); // сбрасываем строку редактирования
  };

  const handleSave = () => {
    const rowToSave = updatedRows.find((row) => row.id === editingRow);
    if (!rowToSave) {
      console.error("Строка для сохранения не найдена");
      return; // Предотвращаем выполнение кода ниже, если строка не найдена
    }

    editWord(editingRow, rowToSave);
    setEditingRow(null);
    setUpdatedRows(words); // обновляем состояние слов после редактирования
  };

  const handleInputChange = (id, field, value) => {
    setUpdatedRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id
          ? {
              ...row,
              [field]: value,
            }
          : row
      )
    );
  };
  // Добавление нового слова
  const handleAddWord = (newWord) => {
    // генерация нового id
    const newId = Date.now();
    addWord({ id: newId, ...newWord });
  };

  const handleDeleteWord = (id) => {
    deleteWord(id);
  };

  return (
    <div className={`table-container ${loading ? "loading" : ""}`}>
      {loading && <Loader />} {/* Вставляем компонент Loader */}
      {error && <p className="error-message">{error}</p>}
      <table className="table">
        <TableHeader onAddWord={handleAddWord} />
        <TableBody
          updatedRows={words}
          editingRow={editingRow}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
          onInputChange={handleInputChange}
          onDelete={handleDeleteWord}
        />
      </table>
    </div>
  );
}
