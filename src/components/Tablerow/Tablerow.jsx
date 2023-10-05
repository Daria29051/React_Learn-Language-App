import React from "react";
import edit from "../../assets/icons/edit.png";
import del from "../../assets/icons/delete.png";
import st from "./tablerow.module.scss";
import { observer, inject } from "mobx-react";
import { useEffect } from "react";

const Tablerow = (props) => {
 
  const { english, transcription, russian, id,  WordStore} = props;
 
  const handleDelete = () => {
  WordStore.deleteWord(id);
  };

  

  return (
    <>
      <tr className="wordlist__item">
        <td>{english}</td>
        <td>{transcription}</td>
        <td>{russian}</td>
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
            onClick={handleDelete}
          />
        </td>
      </tr>
    </>
  );
};

export default Tablerow;
