import React, { useEffect } from "react";
import { useState } from "react";
import Context from "../../context/Context";
import { useContext } from 'react';
import classNames from 'classnames';
import uniqid from 'uniqid';
import Tablerow from "../Tablerow/Tablerow";
import edit from "../../assets/icons/edit.png";
import del from "../../assets/icons/delete.png";
import save from "../../assets/icons/save.png";
import cancel from "../../assets/icons/cancel.png";
import st from "./table.module.scss";

export default function Table() {
  let {wordsApi , errorApi, addNewWordToServer} = useContext(Context);
  let [visibility, setVisibility] = useState(false);
  let [pressed, setPressed] = useState(false);
  let [wordInputValue, setWordInputValue] = useState("");
  let [transcriptionInputValue, setTranscriptionInputValue] = useState("");
  let [translationInputValue, setTranslationInputValue] = useState("");
  let [wordList, setWordList] = useState(wordsApi);
  let [errorList, setErrorList] = useState([]);
  let [successEnter , setSuccessEnter] = useState('');
  let errors = [];
  let wordClassNames = classNames(st.wordlist__input, wordInputValue ==='' ? st.inputError : st.wordlist__input);
  let transcriptionClassNames = classNames(st.wordlist__input, transcriptionInputValue ==='' ? st.inputError : st.wordlist__input);
  let translationClassNames = classNames(st.wordlist__input, translationInputValue ==='' ? st.inputError : st.wordlist__input);


  useEffect(()=>{
    setWordList(wordsApi);
  }, [wordsApi]);



  // console.log(wordsApi);
  // console.log(wordList);
  // console.log(errorApi);
  

  //смена кнопки Study words
  const handleClick = () => {
    setVisibility(!visibility);
    setPressed(!pressed);
  };

  //скрываем вывод ошибок и уведомление о добавлении слова, и очищаем поля ввода при клике на кнопку Study words/Add word
  useEffect(()=> {
    setErrorList([]);
    setSuccessEnter('');
    clearFields();
  }
  , [pressed]);

  //очистка полей инпутов
  const clearFields = () => {
    setWordInputValue("");
    setTranscriptionInputValue("");
    setTranslationInputValue("");
  };

  //создаем уникальный id
  let uniqId = require('uniqid'); 
 


  let newWord = {
    "id": uniqId(),
    "english": wordInputValue,
    "transcription": transcriptionInputValue,
    "russian": translationInputValue,
    "tags": " ",
    "tags_json":"[]"
  };


  //проверка правильности заполнения инпутов
  const testInputs = () => {
    errors = [];
    const testEnglishLetters = /^[a-z]+$/i;
    const testTranscription = /^\[[a-z:\.ˈΛɑəeɛɜɔоɪʊæŋʒʤʃθðː\s]+\]/;
    const testRussianLetters = /^[а-я]+$/i;

    if (
      wordInputValue === "" ||
      transcriptionInputValue === "" ||
      translationInputValue === ""
    ) {
      errors.push("Заполните все поля ввода.");
    }

    if (!testEnglishLetters.test(wordInputValue)) {
      errors.push("Используйте английские буквы для ввода слова.");
    }

    if (!testTranscription.test(transcriptionInputValue)) {
      errors.push("Проверьте правильность ввода транскрипции.");
    }

    if (!testRussianLetters.test(translationInputValue)) {
      errors.push("Используйте русские буквы для ввода перевода.");
    }

    console.log(errors);
    setErrorList(errors);
  };

  //добавление нового слова в таблицу
  const addNewWord = () => {
    if (errors.length === 0) {
      setWordList((prevState) => [newWord, ...prevState]);
      console.log(wordList);
      setWordInputValue("");
      setTranscriptionInputValue("");
      setTranslationInputValue("");
      setErrorList([]);
      setSuccessEnter('Новое слово успешно добавлено!');
    } else {
      setErrorList(errors);
      setSuccessEnter('');
    }
  };



  //ОБЩАЯ ФУНКЦИЯ ДОБАВЛЕНИЯ СЛОВА(ПРОВЕРКА ИНПУТОВ И ДОБАВЛЕНИЕ В СЛУЧАЕ КОРРЕКТНОГО ЗАПОЛНЕНИЯ)
  const testInputsAndAddWord = () => {
    testInputs();
    addNewWord();
    addNewWordToServer(newWord); //передаем новое слово на сервер
  };

//  console.log(errorApi);

//ФУНКЦИЯ УДАЛЕНИЯ СЛОВА

const deleteWord = (item) => {
    setSuccessEnter('');
    setWordList(wordList.filter((word) => word.id !== item.id));
    // console.log(wordList);
  }

  useEffect(()=> {
    setWordList(wordList);
  },
  [wordList.length])

  return (
    <div className={st.wordlist}>
      <h1 className={st.wordlist__title}>List of words</h1>
      <div className={st.wordlist__optionButtonsContainer}>
        <button className={st.wordlist__optionButton} onClick={handleClick}>
          {pressed ? "Study words" : "Add a new word"}
        </button>
      </div>
      <div className={st.wordlist__errorList}>
        {errorList.length !== 0
          ? errorList.map((item, index) => (
              <div className={st.wordlist__errorListItem} key={index}>{item}</div>
            ))
          : ""}
      </div>
      <div className={st.wordlist__successEnter}>
        {successEnter}
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
                  className={wordClassNames}
                  placeholder="Word"
                  value={wordInputValue}
                  onChange={(e) => setWordInputValue(e.target.value)}
                ></input>
              </td>
              <td>
                <input
                  className={transcriptionClassNames}
                  type="text"
                  placeholder="Transcription"
                  value={transcriptionInputValue}
                  onChange={(e) => setTranscriptionInputValue(e.target.value)}
                ></input>
              </td>
              <td>
                <input
                  className={translationClassNames}
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
                  onClick={testInputsAndAddWord}
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
          { wordList.length !== 0 ?
          <Tablerow wordList={wordList} deleteWord={deleteWord} />  :
          <div className={st.wordlist_errorMessage}>{`Возникла проблема: ${errorApi.message}. Пожалуйста, попробуйте позднее.`}</div>
          }
        </tbody>
      </table>
    </div>
  );
}
