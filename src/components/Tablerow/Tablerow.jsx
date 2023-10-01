import React, { useEffect, useState } from "react";
import edit from "../../assets/icons/edit.png";
import del from "../../assets/icons/delete.png";
import st from "./tablerow.module.scss";


export default function Tablerow(props) {
  const { wordList, deleteWord,  isEdit, setIsEdit,  setEditWordInput, setEditTranscriptionInput, setEditTranslationInput, getItem, setSuccessEnter} = props;

//ФУНКЦИЯ НАЧАЛА РЕДАКТИРОВАНИЯ
  const startEditing = (item)=> {
    setSuccessEnter('');  
    getItem(item);
    // console.log(item);
    setIsEdit(!isEdit);
    setEditWordInput(item.english);
    setEditTranscriptionInput(item.transcription);
    setEditTranslationInput(item.russian);
 
  }

  return (
    <>
      {wordList.map((item) => (
        <tr className="wordlist__item" key={item.id}>
          <td>{item.english}</td>
          <td>{item.transcription}</td>
          <td>{item.russian}</td>
          <td>
            <img
              src={edit}
              alt="edit"
              className={st.wordlist__actionIcon}
              title="Edit"
              onClick={()=>startEditing(item)}
            />
            <img
              src={del}
              alt="delete"
              className={st.wordlist__actionIcon}
              title="Delete"
              onClick={() => {deleteWord(item)}}
            />
          </td>
        </tr>
      ))}
    </>
  );
}
