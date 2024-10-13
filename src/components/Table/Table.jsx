import React, { useState } from "react";
import "./Table.css";
// import words from "../../words.json";

export default function Table({ initialWords }) {
  const [editingRow, setEditingRow] = useState(null);
  const [updatedRows, setUpdatedRows] = useState(initialWords);

  const handleEdit = (id) => {
    setEditingRow(id);
  };

  const handleCancel = () => {
    setEditingRow(null);
  };

  function handleSave() {
    setUpdatedRows(function (prevRows) {
      return prevRows.map(function (row) {
        if (row.id === editingRow) {
          return {
            ...row,
            english: row.updatedEnglish,
            transcription: row.updatedTranscription,
            russian: row.updatedRussian,
          };
        }
        return row;
      });
    });
    setEditingRow(null);
  }

  const handleInputChange = (id, field, value) => {
    setUpdatedRows((prevRows) => {
      return prevRows.map((row) => {
        if (row.id === id) {
          return {
            ...row,
            [field]: value,
          };
        }
        return row;
      });
    });
  };

  return (
    <table className="table">
      <thead>
        <tr className="string-table">
          <th>Английский</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {updatedRows.map((row) => (
          <tr key={row.id}>
            {editingRow === row.id ? (
              <>
                <td>
                  <input
                    type="text"
                    value={row.english}
                    onChange={(e) =>
                      handleInputChange(row.id, "english", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.transcription}
                    onChange={(e) =>
                      handleInputChange(row.id, "transcription", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.russian}
                    onChange={(e) =>
                      handleInputChange(row.id, "russian", e.target.value)
                    }
                  />
                </td>
                <td className="cell-button">
                  <button className="button-save" onClick={handleSave}></button>
                  <button
                    className="button-cancel"
                    onClick={handleCancel}
                  ></button>
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
                    onClick={() => handleEdit(row.id)}
                  ></button>
                  <button className="button-delete"></button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
