import React, { useEffect } from "react";
import { useState } from "react";
import Tablerow from "../Tablerow/Tablerow";
import words from "../../data/words.json";
import edit from "../../assets/icons/edit.png";
import del from "../../assets/icons/delete.png";
import save from "../../assets/icons/save.png";
import cancel from "../../assets/icons/cancel.png";
import st from "./table.module.scss";

export default function Table() {
  const [visibility, setVisibility] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [wordInputValue, setWordInputValue] = useState("");
  const [transcriptionInputValue, setTranscriptionInputValue] = useState("");
  const [translationInputValue, setTranslationInputValue] = useState("");
  const [wordList, setWordlist] = useState(words);
  const [errorList, setErrorList]= useState([]);


  useEffect(()=> {
    setErrorList(errorList);
  }, [errorList]);

  //смена кнопки Stud words
  const handleClick = () => {
    setVisibility(!visibility);
    setPressed(!pressed);
  };

  //очистка полей инпутов
  const clearFields = () => {
    setWordInputValue("");
    setTranscriptionInputValue("");
    setTranslationInputValue("");
  };

  const newWord = {
    id: "",
    english: wordInputValue,
    transcription: transcriptionInputValue,
    russian: translationInputValue,
    tags: "",
  };


//проверка правильности заполнения инпутов
  const testInputs = () => {
    setErrorList([]);
    const testEnglishLetters = /^[a-z]+$/i;
    const testTranscription = /^\[[a-z:\.ˈΛɑəeɛɜɔоɪʊæŋʒʤʃθðː\s]+\]/;
    const testRussianLetters = /^[а-я]+$/i;
 if (!testEnglishLetters.test(wordInputValue)) {
  errorList.push('Используйте английские буквы для ввода слова.');
 }

 if (!testTranscription.test(transcriptionInputValue)) {
  errorList.push('Проверьте правильность ввода транскрипции.');
 }

 if (!testRussianLetters.test(translationInputValue)) {
  errorList.push('Используйте русские буквы для ввода перевода.');
 }

 if (wordInputValue === '') {
  errorList.push('Заполните поле ввода слова.');
 } 

 if (transcriptionInputValue === '') {
  errorList.push('Заполните поле ввода транскрипции.');
 } 

 if (translationInputValue === '') {
  errorList.push('Заполните поле ввода перевода.');
 } 


 console.log(errorList);
 return errorList;

    
  };

//добавление нового слова в таблицу
  const addNewWord = () => {
    testInputs();
    if (errorList.length === 0) {
    setWordlist(prevState => [newWord, ...prevState]);
    setWordInputValue('');
    setTranscriptionInputValue('');
    setTranslationInputValue('');
    console.log(wordList);
    console.log(newWord);
  } else {
    return errorList;
  }

  }

  return (
    <div className={st.wordlist}>
      <h1 className={st.wordlist__title}>List of words</h1>
      <div className={st.wordlist__optionButtonsContainer}>
        <button className={st.wordlist__optionButton} onClick={handleClick}>
          {pressed ? "Study words" : "Add a new word"}
        </button>
      </div>
     <div className={st.wordlist__errorList}>
     {errorList.length !==0 ? errorList : ''}
     </div>
      <table className={st.wordlist__table}>
        <thead>
          <tr>
            <th>Word</th>
            <th>Transcription</th>
            <th>Translation</th>
            <th>Options</th>
          </tr>
          {visibility ? (
            <tr className={st.wordlist__inputRow}>
              <td>
                <input
                  className={st.wordlist__input}
                  type="text"
                  placeholder="Word"
                  value={wordInputValue}
                  onChange={(e) => setWordInputValue(e.target.value)}
                ></input>
              </td>
              <td>
                <input
                  className={st.wordlist__input}
                  type="text"
                  placeholder="Transcription"
                  value={transcriptionInputValue}
                  onChange={(e) => setTranscriptionInputValue(e.target.value)}
                ></input>
              </td>
              <td>
                <input
                  className={st.wordlist__input}
                  type="text"
                  placeholder="Translation"
                  value={translationInputValue}
                  onChange={(e) => setTranslationInputValue(e.target.value)}
                ></input>
              </td>
              <td>
                <img
                  src={save}
                  alt="save"
                  className={st.wordlist__actionIcon}
                  title="Save"
                  onClick={addNewWord}
                />
                <img
                  src={cancel}
                  alt="delete"
                  className={st.wordlist__actionIcon}
                  title="Delete"
                  onClick={clearFields}
                />
              </td>
            </tr>
          ) : (
            ""
          )}
        </thead>
        <tbody>
          <Tablerow wordList={wordList} />
        </tbody>
      </table>
    </div>
  );
}
