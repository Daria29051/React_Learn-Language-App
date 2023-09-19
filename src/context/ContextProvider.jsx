import { useEffect, useState } from "react";
import React from "react";
import Context from "./Context";
import App from "../App";


function ContextProvider() {
  let [wordsApi, setWordsApi] = useState([]);

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => response.json())
      .then((response) => setWordsApi((wordsApi = response)));
  }, []);

  console.log(wordsApi);
  
 if (wordsApi.length !== 0) {
  return (
<Context.Provider value = {wordsApi}>
  <App/>
</Context.Provider>
  );
} else {
  return (<div>Ошибка</div>)
}
}

export default ContextProvider;
