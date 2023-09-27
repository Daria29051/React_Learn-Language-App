import React, { useEffect } from "react";
import edit from "../../assets/icons/edit.png";
import del from "../../assets/icons/delete.png";
import st from "./tablerow.module.scss";
import { useContext } from "react";
import Context from "../../context/Context";

export default function Tablerow(props) {
  const { setWordList, wordList, deleteWord} = props;
  const { deleteWordFromServer } = useContext(Context);

  console.log(wordList);

// useEffect(()=> {
//   setWordList(wordList)
// }, 
// [wordList.length])

  return (
    <>
      {wordList.map((item, id) => (
        <tr className="wordlist__item" key={id}>
          <td>{item.english}</td>
          <td>{item.transcription}</td>
          <td>{item.russian}</td>
          <td>
            <img
              src={edit}
              alt="edit"
              className={st.wordlist__actionIcon}
              title="Edit"
            />
            <img
              src={del}
              alt="delete"
              className={st.wordlist__actionIcon}
              title="Delete"
              onClick={() => deleteWord(id)}
            />
          </td>
        </tr>
      ))}
    </>
  );
}
