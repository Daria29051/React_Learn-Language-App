import { useState, useEffect } from "react";
import { useContext } from "react";
import Context from "../../context/Context";
import Card from "../../components/Card/Card";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import st from "./slider.module.scss";

export default function Slider() {
  const { wordsApi } = useContext(Context);
  const [sliderWordList, setSliderWordList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [learnt, setLearnt] = useState(0);

  useEffect(() => {
    setSliderWordList(wordsApi);
  }, [wordsApi]);

  //  console.log(sliderWordList);

  const showNextCard = () => {
    if (selectedIndex < sliderWordList.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      // console.log(selectedIndex);
    } else {
      setSelectedIndex(0);
    }
  };

  const showPrevCard = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      // console.log(selectedIndex);
    } else {
      setSelectedIndex(sliderWordList.length - 1);
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
          {sliderWordList.length !== 0 && sliderWordList[selectedIndex] ? (
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
        <div className={st.slider__counter}>
          {sliderWordList.length !== 0
            ? `${selectedIndex + 1} / ${sliderWordList.length}`
            : "0/0"}
        </div>
        <div className={st.slider__leart}>
          Изучено слов: <strong>{learnt}</strong>
        </div>
      </div>
    </>
  );
}
