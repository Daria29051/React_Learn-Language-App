import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import st from "./slider.module.scss";

export default function Slider(props) {
  const flashcards = props.flashcards;

  let cardsIndexArray = []; //массив с индексами карточек
  let cardIndex; // индекс карточки

  for (let card of flashcards) {
    cardIndex = flashcards.indexOf(card);
    cardsIndexArray.push(cardIndex);
  }
  // console.log(cardsIndexArray);

  // задаем состояние - начальный индекс карточки к показу 0
  const [selectedIndex, setSelectedIndex] = useState(cardsIndexArray[0]);

  //  функция показа следующей карточки
  const showNextCard = () => {
    setSelectedIndex(selectedIndex + 1);
    console.log(selectedIndex);
  };

  //  функция показа предыдущей карточки
  const showPrevCard = () => {
    setSelectedIndex(selectedIndex - 1);
    console.log(selectedIndex);
  };

  return (
    <>
      <div className={st.container}>
        <h1 className={st.slider__title}>Random card learning</h1>
        <div className={st.slider}>
          <button className={st.slider__button} onClick={showPrevCard}>
          <span className={st.slider__arrow}>&lt;</span>
          </button>
          <Card  item={flashcards[selectedIndex]}></Card>
          <button className={st.slider__button} onClick={showNextCard}>
          <span className={st.slider__arrow}>&gt;</span>
          </button>
        </div>
        <div className={st.slider__counter}>{selectedIndex+1} / {cardsIndexArray.length}</div>
      </div>
    </>
  );
}
