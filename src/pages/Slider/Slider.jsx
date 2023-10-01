import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import Context from "../../context/Context";
import Card from "../../components/Card/Card";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import st from "./slider.module.scss";

export default function Slider() {
  const { wordsApi } = useContext(Context);
  const [sliderWordList, setSliderWordList] = useState(wordsApi);
  const [learnt, setLearnt] = useState(0);
 console.log(sliderWordList);



  let cardsIndexArray = []; //массив с индексами карточек
  let cardIndex; // индекс карточки

  if (sliderWordList.length !== 0) {
    for (let card of sliderWordList) {
      cardIndex = sliderWordList.indexOf(card);
      cardsIndexArray.push(cardIndex);
    }
  }

  // console.log(cardsIndexArray);

  // задаем состояние - начальный индекс карточки к показу 0

  const [selectedIndex, setSelectedIndex] = useState(cardsIndexArray[0]);

  //  функция показа следующей карточки
  const showNextCard = () => {
    if (selectedIndex < cardsIndexArray.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      console.log(selectedIndex);
    } else {
      setSelectedIndex(cardsIndexArray[0]);
    }
  };

  //  функция показа предыдущей карточки
  const showPrevCard = () => {
    if (selectedIndex > cardsIndexArray[0]) {
      setSelectedIndex(selectedIndex - 1);
      console.log(selectedIndex);
    } else {
      setSelectedIndex(cardsIndexArray.length - 1);
    }
  };

  return (
    <>
      <div className={st.container}>
        <h1 className={st.slider__title}>Random card learning</h1>
        <div className={st.slider}>
          <button className={st.slider__button} onClick={showPrevCard}>
            <span className={st.slider__arrow}>&lt;</span>
          </button>{" "}
          {sliderWordList.length !== 0 ? (
            <Card
              item={sliderWordList[selectedIndex]}
              learnt={learnt}
              setLearnt={setLearnt}
              setSliderWordList={setSliderWordList}
            ></Card>
          ) : (
            <EmptyCard />
          )}
          <button className={st.slider__button} onClick={showNextCard}>
            <span className={st.slider__arrow}>&gt;</span>
          </button>
        </div>
        {sliderWordList.length !== 0 ? (
          <div className={st.slider__counter}>
            {selectedIndex + 1} / {cardsIndexArray.length}
          </div>
        ) : (
          <div className={st.slider__counter}> 0 / 0</div>
        )}
        {sliderWordList.length !== 0 ? (
          <div className={st.slider__learnt}>
            Изучено слов: <strong>{learnt}</strong>
          </div>
        ) : (
          <div className={st.slider__learnt}>
            Изучено слов: <strong>0</strong>
          </div>
        )}
      </div>
    </>
  );
}
