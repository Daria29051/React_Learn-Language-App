import { useEffect, useState } from "react";
import React from "react";
import Context from "./Context";


function ContextProvider({children}) {
  let [wordsApi, setWordsApi] = useState([]);
  let [errorApi, setErrorApi] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

//ПОЛУЧЕНИЕ СЛОВ С СЕРВЕРА
  useEffect(() => {
    setIsLoading(true);
    fetch("http://itgirlschool.justmakeit.ru/api/words")
    .then((response) => {
        if (response.ok) {
          setIsLoading(false);
          // console.log(response);
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


 

  // console.log(errorApi);


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


  //ДОБАВЛЕНИЕ СЛОВ НА СЕРВЕР
  function addNewWordToServer(word) {

    fetch(`http://itgirlschool.justmakeit.ru/api/words/add`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(word),
    })
  }

//УДАЛЕНИЕ СЛОВ С СЕРВЕРА
function deleteWordFromServer(id) {
  fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, 
  { method: 'POST'})
}


//РЕДАКТИРОВАНИЕ СЛОВА НА СЕРВЕРЕ
function editWordOnServer(id) {
  fetch (`http://itgirlschool.justmakeit.ru/api/words/${id}/update`,
  {method: 'POST'})
}

  const value = {wordsApi, errorApi, isLoading, addNewWordToServer , deleteWordFromServer, editWordOnServer}

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
