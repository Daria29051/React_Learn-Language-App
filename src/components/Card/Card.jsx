import React from "react";
import { useState, useEffect, useRef } from "react";
import st from "./card.module.scss";


export default function Card(props) {
  const { english, transcription, russian} = props.item;
  console.log(props.item);
  const { learnt, setLearnt } = props;
  const [clicked, setClicked] = useState(false);
  const focusBtn = useRef();

 

  const tranlateAndCount = () => {
    setClicked(!clicked);
    setLearnt(learnt + 1);
  };



  useEffect(() => {
    setClicked(false);
  }, [props.item]);

  useEffect(() => {
    !clicked && focusBtn.current.focus();
  }, [props.item]);

  console.log(focusBtn);

  return (
    <div className={st.flashcard}>
      <h2 className={st.flashcard__word}>{english}</h2>
      <p className={st.flashcard__transcription}>{transcription}</p>
      {clicked ? (
        <p className={st.flashcard__translation}>{russian}</p>
      ) : (
        <button
          ref={focusBtn}
          className={st.flashcard__button}
          onClick={tranlateAndCount}
        >
          Проверить
        </button>
      )}
    </div>
  );
}
