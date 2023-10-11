import React from "react";
import { useState, useEffect } from "react";
import WordStore from "../../assets/stores/WordStore";
import { observer, inject } from "mobx-react";
import Card from "../../components/Card/Card";
import EmptyCard from "../../components/EmtyCard/EmptyCard";
import st from "./slider.module.scss";

const Slider = inject(["WordStore"])(
  observer(({ WordStore }) => {
    const [learnt, setLearnt] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
      WordStore.loadWords();
    }, []);

    console.log(WordStore.words);

    //  функция показа следующей карточки
    const showNextCard = () => {
      if (selectedIndex < WordStore.words.length - 1) {
        setSelectedIndex(selectedIndex + 1);
        // console.log(selectedIndex);
      } else {
        setSelectedIndex(0);
      }
    };

    //  функция показа предыдущей карточки
    const showPrevCard = () => {
      if (selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
        // console.log(selectedIndex);
      } else {
        setSelectedIndex(WordStore.words.length - 1);
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
            {WordStore.words.length !== 0 && WordStore.words[selectedIndex] ? (
              <Card
                item={WordStore.words[selectedIndex]}
                learnt={learnt}
                setLearnt={setLearnt}
              ></Card>
            ) : (
              <EmptyCard />
            )}
            <button className={st.slider__button} onClick={showNextCard}>
              <span className={st.slider__arrow}>&gt;</span>
            </button>
          </div>
          <div className={st.slider__counter}>
            {WordStore.words.length !== 0
              ? `${selectedIndex + 1} / ${WordStore.words.length}`
              : "0/0"}
          </div>
          <div className={st.slider__leart}>
            Изучено слов: <strong>{learnt}</strong>
          </div>
        </div>
      </>
    );
  })
);

export default Slider;
