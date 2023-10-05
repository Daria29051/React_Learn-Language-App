import React, { useEffect } from "react";
import { useState } from "react";
import { observer, inject } from "mobx-react";
import classNames from 'classnames';
import Tablerow from "../Tablerow/Tablerow";
import words from "../../data/words.json";
import save from "../../assets/icons/save.png";
import cancel from "../../assets/icons/cancel.png";
import st from "./table.module.scss";


const  Table = inject(["wordStore"])(observer(({wordStore})=> {
  const [visibility, setVisibility] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [wordInputValue, setWordInputValue] = useState("");
  const [transcriptionInputValue, setTranscriptionInputValue] = useState("");
  const [translationInputValue, setTranslationInputValue] = useState("");
  const [wordList, setWordList] = useState([]);
  const [errorList, setErrorList] = useState([]);
  let errors = [];
  let wordClassNames = classNames(st.wordlist__input, wordInputValue ==='' ? st.inputError : st.wordlist__input);
  let transcriptionClassNames = classNames(st.wordlist__input, transcriptionInputValue ==='' ? st.inputError : st.wordlist__input);
  let translationClassNames = classNames(st.wordlist__input, translationInputValue ==='' ? st.inputError : st.wordlist__input);


  useEffect(() => {
    wordStore.loadWords();
    setWordList(wordStore.words);
  }, []);

  console.log(wordStore.words);



  //смена кнопки Study words
  const handleClick = () => {
    setVisibility(!visibility);
    setPressed(!pressed);
  };

  //скрываем вывод ошибок и очищаем поля ввода при клике на кнопку Study words/Add word
  useEffect(()=> {
    setErrorList([]);
    clearFields();
  }
  , [pressed]);

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
      setWordlist((prevState) => [newWord, ...prevState]);
      setWordInputValue("");
      setTranscriptionInputValue("");
      setTranslationInputValue("");
      setErrorList([]);
      console.log(wordList);
      console.log(newWord);
    } else {
      setErrorList(errors);
    }
  };

  //проверяем инпуты и добавляем слово в таблицу, если всё корректно заполнено
  const testInputsAndAddWord = () => {
    testInputs();
    addNewWord();
  };

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
          <Tablerow wordList={wordList} />
        </tbody>
      </table>
    </div>
  );
}))

export default Table;