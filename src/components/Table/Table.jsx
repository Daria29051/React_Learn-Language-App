import React, { useEffect } from "react";
import { useState } from "react";
import uniqid from "uniqid";
import classNames from "classnames";
import Tablerow from "../Tablerow/Tablerow";
import WordStore from "../../assets/stores/WordStore";
import { observer, inject } from "mobx-react";
import save from "../../assets/icons/save.png";
import cancel from "../../assets/icons/cancel.png";
import st from "./table.module.scss";

const Table = inject(["WordStore"])(
  observer(({ WordStore }) => {
    const [visibility, setVisibility] = useState(false);
    const [pressed, setPressed] = useState(false);
    const [wordInputValue, setWordInputValue] = useState("");
    const [transcriptionInputValue, setTranscriptionInputValue] = useState("");
    const [translationInputValue, setTranslationInputValue] = useState("");
    const [editWordInput, setEditWordInput] = useState("");
    const [editTranscriptionInput, setEditTranscriptionInput] = useState("");
    const [editTranslationInput, setEditTranslationInput] = useState("");
    const [wordItem, setWordItem] = useState(""); //wordItem из Tablerow.jsx
    const [isEdit, setIsEdit] = useState(false); //скрыть/показать  режим редактирования слова
    // const [wordList, setWordList] = useState([]);
    const [errorList, setErrorList] = useState([]); //ошибки ввода нового слова
    const [editErrorList, setEditErrorList] = useState([]);// ошибки обновления слова
    const [successEnter, setSuccessEnter] = useState("");
    
     //рег выражения для проверки правильности заполнения полей
  const testEnglishLetters = /^[a-z]+$/i;
  const testTranscription = /^\[[a-z:\.ˈΛɑɒəeɛɜɔоɪʊæŋʒʤʃθðː\s]+\]/;
  const testRussianLetters = /^[а-я]+$/i;



    let errors = []; //массив вывода ошибок заполнения полей для нового слова
    let editErrors = [];//массив вывода ошибок заполнения полей для updated слова
    let wordClassNames = classNames(
      st.wordlist__input,
      wordInputValue === "" ? st.inputError : st.wordlist__input
    );
    let transcriptionClassNames = classNames(
      st.wordlist__input,
      transcriptionInputValue === "" ? st.inputError : st.wordlist__input
    );
    let translationClassNames = classNames(
      st.wordlist__input,
      translationInputValue === "" ? st.inputError : st.wordlist__input
    );

    useEffect(() => {
      WordStore.loadWords();
    }, []);

    // console.log(WordStore.words);

    //смена кнопки Study words
    const handleClick = () => {
      setVisibility(!visibility);
      setPressed(!pressed);
    };

    //скрываем вывод ошибок и очищаем поля ввода при клике на кнопку Study words/Add word
    useEffect(() => {
      setErrorList([]);
      clearFields();
    }, [pressed]);

    //очистка полей инпутов
    const clearFields = () => {
      setWordInputValue("");
      setTranscriptionInputValue("");
      setTranslationInputValue("");
    };

    //получение wordItem из Tablerow.jsx
    const getItem = (item) => {
      setWordItem(item);
      // console.log(item);
    };

    //updated слово
    let updatedWord = {
      id: wordItem.id,
      english: editWordInput,
      transcription: editTranscriptionInput,
      russian: editTranslationInput,
      tags: " ",
      tags_json: [],
    };

    //создаем уникальный id
    let uniqId = require("uniqid");

    const newWord = {
      id: uniqId(),
      english: wordInputValue,
      transcription: transcriptionInputValue,
      russian: translationInputValue,
      tags: "",
    };

    //проверка правильности заполнения инпутов
  const testInputs = () => {

    if (!isEdit) {
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

  }

    if (isEdit) {

      if (
        editWordInput === "" ||
        editTranscriptionInput === "" ||
        editTranslationInput === ""
      ) {
        editErrors.push("Заполните все поля ввода.");
      }

      if (!testEnglishLetters.test(editWordInput)) {
        editErrors.push("Используйте английские буквы для ввода слова.");  
      }

      if (!testTranscription.test(editTranscriptionInput)) {
        editErrors.push("Проверьте правильность ввода транскрипции.");
      }

      if (!testRussianLetters.test(editTranslationInput)) {
        editErrors.push("Используйте русские буквы для ввода перевода.");
      }

    }
    // console.log(errors);
    // console.log(editErrors);
    setErrorList(errors);
    setEditErrorList(editErrors);
  };

    //добавление нового слова в таблицу
    const addNewWord = () => {
      if (errors.length === 0) {
        // setWordlist((prevState) => [newWord, ...prevState]);
        setWordInputValue("");
        setTranscriptionInputValue("");
        setTranslationInputValue("");
        setErrorList([]);
        WordStore.addWord(newWord);
        console.log(newWord);
        console.log(Array.from(WordStore.words));
      } else {
        setErrorList(errors);
      }
    };

    //проверяем инпуты и добавляем слово в таблицу, если всё корректно заполнено
    const testInputsAndAddWord = () => {
      testInputs();
      addNewWord();
    };

    //ФУНКЦИЯ РЕДАКТИРОВАНИЯ СЛОВА
    const editWord = () => {
      testInputs();
      if (editErrors.length === 0) {
        WordStore.editWord(wordItem.id, updatedWord);
        wordItem.english = editWordInput;
        wordItem.transcription = editTranscriptionInput;
        wordItem.russian = editTranslationInput;
        setIsEdit(!isEdit);
        setSuccessEnter("Слово успешно обновлено!");
      }
    };

    //ФУНКЦИЯ ЗАКРЫТИЯ РЕЖИМА РЕДАКТИРОВАНИЯ
    const stopEditing = () => {
      setIsEdit(false);
      setEditErrorList([]);
    };

    if (WordStore.loading === true) {
      return (
        <div className={st.wordlist__loading}>
          <h1>Loading...</h1>
        </div>
      );
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
          {errorList.length !== 0
            ? errorList.map((item, index) => (
                <div className={st.wordlist__errorListItem} key={index}>
                  {item}
                </div>
              ))
            : ""}
        </div>
        <div className={st.wordlist__editErrorList}>
        {editErrorList.length !== 0
          ? editErrorList.map((item, index) => (
              <div className={st.wordlist__editErrorListItem} key={index}>
                {item}
              </div>
            ))
          : ""}
      </div>
        <div className={st.wordlist__successEnter}>{successEnter}</div>
        {!isEdit ? (
          ""
        ) : (
          <div className={st.wordlist__editPart}>
            <input
              type="text"
              value={editWordInput}
              onChange={(e) => setEditWordInput(e.target.value)}
            />
            <input
              type="text"
              value={editTranscriptionInput}
              onChange={(e) => setEditTranscriptionInput(e.target.value)}
            />
            <input
              type="text"
              value={editTranslationInput}
              onChange={(e) => setEditTranslationInput(e.target.value)}
            />
            <button className={st.editor__saveButton} onClick={editWord}>
              Save
            </button>
            <button className={st.editor__cancelButton} onClick={stopEditing}>
              Cancel
            </button>
          </div>
        )}
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
            {WordStore.words.map((item) => (
              <Tablerow
                item = {item}
                id={item.id}
                key={item.id}
                english={item.english}
                transcription={item.transcription}
                russian={item.russian}
                WordStore={WordStore}
                setIsEdit={setIsEdit}
                setEditWordInput={setEditWordInput}
                setEditTranscriptionInput={setEditTranscriptionInput}
                setEditTranslationInput={setEditTranslationInput}
                getItem={getItem}
                setSuccessEnter={setSuccessEnter}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  })
);

export default Table;
