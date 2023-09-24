import { useEffect, useState } from "react";
import React from "react";
import Context from "./Context";


function ContextProvider({children}) {
  let [wordsApi, setWordsApi] = useState([]);
  let [errorApi, setErrorApi] = useState([]);
  let [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) {
          setIsLoading(false);
          if (Object.keys(response).length === 0) {
            throw new Error("Нет слов для изучения.");
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

  const value = {wordsApi, errorApi, isLoading}

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
