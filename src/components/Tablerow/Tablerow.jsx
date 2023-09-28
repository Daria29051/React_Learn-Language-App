import React, { useEffect, useState } from "react";
import edit from "../../assets/icons/edit.png";
import del from "../../assets/icons/delete.png";
import st from "./tablerow.module.scss";
import { useContext } from "react";
import Context from "../../context/Context";

export default function Tablerow(props) {
  let { wordList, deleteWord, editWord, isEdit, setIsEdit} = props;

  


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
              onClick={()=> {setIsEdit(!isEdit)}}
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
