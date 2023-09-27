import { useEffect, useState } from "react";
import React from "react";
import Context from "./Context";


function ContextProvider({children}) {
  let [wordsApi, setWordsApi] = useState([]);
  let [errorApi, setErrorApi] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

//получение слов с сервера
  useEffect(() => {
    setIsLoading(true);
    fetch("http://itgirlschool.justmakeit.ru/api/words")
    .then((response) => {
        if (response.ok) {
          setIsLoading(false);
          console.log(response);
          return response;
        } else {
          throw new Error("Ошибка загрузки данных");
        }
      })
      .then((response) => response.json())
      .then((response)=> checkResponse(response))
      .then((response) => setWordsApi(response))
      .catch((error) => setErrorApi(error));
  }, []);


 
  console.log(wordsApi);
  console.log(errorApi);


//функция проверки на пустой ответ от сервера
function checkResponse(resp) {
  if (resp.length === 0) {
    console.log('Object is empty');
    throw new Error("Нет слов для изучения.");  
  }
  else {
        return resp;
      }
}


  //добавление слов на сервер
  function addNewWordToServer(word) {

    fetch("http://itgirlschool.justmakeit.ru/api/words"), {
      method: 'POST',
      body: JSON.stringify(word),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  }

  const value = {wordsApi, errorApi, isLoading, addNewWordToServer}

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
