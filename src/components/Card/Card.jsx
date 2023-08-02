import React from "react";
import { useState, useEffect } from "react";
import st from "./card.module.scss";

export default function Card(props) {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    setClicked(false);
  }, [props.item]);

  {
    if (clicked) {
      return (
        <div className={st.flashcard}>
          <h2 className={st.flashcard__word}>{props.item.english}</h2>
          <p className={st.flashcard__transcription}>
            {props.item.transcription}
          </p>
          <p className={st.flashcard__translation}>{props.item.russian}</p>
        </div>
      );
    } else {
      return (
        <div className={st.flashcard}>
          <h2 className={st.flashcard__word}>{props.item.english}</h2>
          <p className={st.flashcard__transcription}>
            {props.item.transcription}
          </p>
          <button
            className={st.flashcard__button}
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            Проверить
          </button>
        </div>
      );
    }
  }
}
