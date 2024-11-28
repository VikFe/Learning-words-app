import React, { createContext, useState, useEffect } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWords = () => {
      setLoading(true);
      setError(null);
      fetch("/api/words")
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Ошибка при получении данных" + response.statusText
            );
          }
          return response.json();
        })

        .then((data) => {
          console.log("Fetched words:", data);
          setWords(data);
        })
        .catch((err) => {
          console.error("Ошибка при получении слов", err);
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchWords();
  }, []);

  // Добавление нового слова
  const addWord = (newWord) => {
    setLoading(true);
    setError(null);

    fetch("/api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWord),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }
        return response.json();
      })
      .then((addedWord) => {
        setWords((prevWords) => [...prevWords, addedWord]);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const editWord = (id, updatedWord) => {
    setLoading(true);
    setError(null);

    fetch(`/api/words/${id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWord),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при обновлении слова");
        }
        return response.json();
      })

      .then((savedWord) => {
        setWords((prevWords) =>
          prevWords.map((word) => (word.id === id ? savedWord : word))
        );
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Удаление слова

  const deleteWord = (id) => {
    setLoading(true);
    setError(null);
    fetch(`/api/words/${id}/delete`, {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при удалении слова");
        }
        setWords((prevWords) => prevWords.filter((word) => word.id !== id));
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <CardContext.Provider
      value={{ words, loading, error, addWord, editWord, deleteWord }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
