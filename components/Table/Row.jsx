/* eslint-disable no-undef */
// Row.js
import React, { useContext } from "react";
import { CardContext } from "../../store/words-context";

const Row = ({ row, isEditing, onEdit, onSave, onCancel, onInputChange }) => {
  const { editWord, deleteWord } = useContext(CardContext);

  const isFieldEmpty = (fieldName) =>
    !row[fieldName] || row[fieldName].trim() === "";

  // Проверка на заполнение полей
  const isAnyFieldEmpty =
    isFieldEmpty("english") ||
    isFieldEmpty("transcription") ||
    isFieldEmpty("russian");

  const handleSave = () => {
    const updatedWord = {
      english: row.english,
      transcription: row.transcription,
      russian: row.russian,
    };
    editWord(row.id, updatedWord);
    onSave();
  };

  const handleDelete = () => {
    if (window.confirm("Вы уверены, что хотите удалить это слово?")) {
      deleteWord(row.id);
    }
  };

  const handleInputChange = (field, value) => {
    onInputChange(row.id, field, value);
  };

  return (
    <tr key={row.id}>
      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              value={row.english}
              onChange={(e) => handleInputChange("english", e.target.value)}
              style={{
                border: isFieldEmpty("english")
                  ? "1px solid red"
                  : "1px solid black",
              }}
            />
          </td>
          <td>
            <input
              type="text"
              value={row.transcription}
              onChange={(e) =>
                handleInputChange("transcription", e.target.value)
              }
              style={{
                border: isFieldEmpty("transcription")
                  ? "1px solid red"
                  : "1px solid black",
              }}
            />
          </td>
          <td>
            <input
              type="text"
              value={row.russian}
              onChange={(e) => handleInputChange("russian", e.target.value)}
              style={{
                border: isFieldEmpty("russian")
                  ? "1px solid red"
                  : "1px solid black",
              }}
            />
          </td>
          <td className="cell-button">
            <button
              className="button-save"
              onClick={handleSave}
              disabled={isAnyFieldEmpty}
            ></button>
            <button className="button-cancel" onClick={onCancel}></button>
          </td>
        </>
      ) : (
        <>
          <td>{row.english}</td>
          <td>{row.transcription}</td>
          <td>{row.russian}</td>
          <td className="cell-button">
            <button
              className="button-edit"
              onClick={() => onEdit(row.id)}
            ></button>
            <button className="button-delete" onClick={handleDelete}></button>
          </td>
        </>
      )}
    </tr>
  );
};

export default Row;
