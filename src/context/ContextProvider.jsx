import { useEffect, useState } from "react";
import Context from "./Context";

function ContextProvider({ children }) {
  const [wordsApi, setWordsApi] = useState([]); // массив слов
  const [errorApi, setErrorApi] = useState([]); //массив ошибок
  const [isLoading, setIsLoading] = useState(false); //индикатор загрузки
  const baseURL = "/api/words";

  //ПОЛУЧЕНИЕ СЛОВ С СЕРВЕРА
  useEffect(() => {
    setIsLoading(true);
    fetch(baseURL)
      .then((response) => {
        if (response.ok) {
          setIsLoading(false);
          // console.log(response);
          return response;
        } else {
          setIsLoading(false);
          throw new Error("Ошибка загрузки данных");
        }
      })
      .then((response) => response.json())
      .then((response) => checkResponse(response))
      .then((response) => setWordsApi(response))
      .catch((error) => setErrorApi(error));
  }, []);

  // console.log(errorApi);
  // console.log(wordsApi);

  //функция проверки на пустой ответ от сервера
  function checkResponse(resp) {
    if (resp.length === 0) {
      setIsLoading(false);
      console.log("Object is empty");
      throw new Error("Нет слов для изучения.");
    } else {
      return resp;
    }
  }

  //ДОБАВЛЕНИЕ СЛОВ НА СЕРВЕР
  function addNewWordToServer(word) {
    fetch(`${baseURL}/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(word),
    });
  }

  //УДАЛЕНИЕ СЛОВА С СЕРВЕРА
  function deleteWordFromServer(id) {
    fetch(`${baseURL}/${id}/delete`, { method: "POST" });
  }

  //РЕДАКТИРОВАНИЕ СЛОВА НА СЕРВЕРЕ
  function updateWordOnServer(id, word) {
    fetch(`${baseURL}/${id}/update`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(word),
    });
  }

  const value = {
    wordsApi,
    errorApi,
    isLoading,
    addNewWordToServer,
    deleteWordFromServer,
    updateWordOnServer,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default ContextProvider;
