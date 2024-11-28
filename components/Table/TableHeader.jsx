import React, { useContext, useState } from "react";
import { CardContext } from "../../store/words-context";
import addButtonStyles from "./AddButton.module.css";
import tableHeaderStyles from "./TableHeader.module.css";

const TableHeader = () => {
  const { addWord } = useContext(CardContext);
  const [english, setWord] = useState("");
  const [transcription, setTranscription] = useState("");
  const [russian, setTranslation] = useState("");

  const handleAddWord = () => {
    if (english && transcription && russian) {
      const newWord = {
        english,
        transcription,
        russian,
        tags: "",
        tags_json: "[]",
      };

      addWord(newWord);
      // onAddWord({ english, transcription, russian });
      setWord("");
      setTranscription("");
      setTranslation("");
    }
  };

  return (
    <thead>
      <tr className="string-table">
        <th>
          <input
            type="text"
            className={tableHeaderStyles.input}
            placeholder="Слово"
            value={english}
            onChange={(e) => setWord(e.target.value)}
            // style={{ color: "gray" }}
          />
        </th>

        <th>
          <input
            type="text"
            className={tableHeaderStyles.input}
            placeholder="Транскрипция"
            value={transcription}
            onChange={(e) => setTranscription(e.target.value)}
            // style={{ color: "gray" }}
          />
        </th>

        <th>
          <input
            type="text"
            className={tableHeaderStyles.input}
            placeholder="Перевод"
            value={russian}
            onChange={(e) => setTranslation(e.target.value)}
          />
        </th>
        <th>
          <button className={addButtonStyles.addButton} onClick={handleAddWord}>
            Добавить
          </button>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
