import React from "react";

const Row = ({
  row,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  onInputChange,
  onDelete,
}) => {
  const isFieldEmpty = (fieldName) =>
    !row[fieldName] || row[fieldName].trim() === "";

  const isAnyFieldEmpty =
    isFieldEmpty("english") ||
    isFieldEmpty("transcription") ||
    isFieldEmpty("russian");

  return (
    <tr key={row.id}>
      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              value={row.english}
              onChange={(e) => onInputChange(row.id, "english", e.target.value)}
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
                onInputChange(row.id, "transcription", e.target.value)
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
              onChange={(e) => onInputChange(row.id, "russian", e.target.value)}
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
              onClick={onSave}
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
            <button
              className="button-delete"
              onClick={() => onDelete(row.id)}
            ></button>
          </td>
        </>
      )}
    </tr>
  );
};

export default Row;
