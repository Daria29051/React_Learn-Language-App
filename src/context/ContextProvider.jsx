import { useEffect, useState } from "react";
import React from "react";
import Context from "./Context";
import App from "../App";

function ContextProvider() {
  let [wordsApi, setWordsApi] = useState([]);
  let [errorApi, setErrorApi] = useState(null);

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) {
          if (Object.keys(response).length === 0) {
            throw new Error("Нет данных.");
          } else {
            console.log(response);
            return response;
          }
        } else {
          throw new Error("Ошибка загрузки данных");
        }
      })

      .then((response) => setWordsApi((wordsApi = response)))
      .catch((error) => setErrorApi((errorApi = error)));
  }, []);

  console.log(wordsApi);
  console.log(errorApi);

  return (
    <Context.Provider value={{ wordsApi, errorApi }}>
      <App />
    </Context.Provider>
  );
}

export default ContextProvider;
