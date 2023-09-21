import { useEffect, useState } from "react";
import React from "react";
import Context from "./Context";
import App from "../App";


function ContextProvider() {
  let [wordsApi, setWordsApi] = useState([]);
  let [errorApi, setErrorApi]= useState(null);



  useEffect(()=> {

    fetch("http://itgirlschool.justmakeit.ru/api/words")
   .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Ошибка загрузки данных');
    }
   })

   .then((response) => setWordsApi((wordsApi = response)))
   .catch((error) =>
 setErrorApi((errorApi = error)));

  },[])

  console.log(errorApi);


  return (
<Context.Provider value = {{wordsApi , errorApi}}>
  <App/>
</Context.Provider>
  );
}

export default ContextProvider;
