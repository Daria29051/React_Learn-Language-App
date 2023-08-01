import React from "react";
import st from "./flashcard.module.scss";
import flashcards from "../../data/flashcard.json";

class Flashcard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
    };
  }

  handleChange = (index) => {
    this.setState((prevState) => {
      const updatedSelection = Array.from(prevState.pressed);
      console.log(updatedSelection);
      updatedSelection[index] = !updatedSelection[index];
      console.log(updatedSelection);
      return { pressed: updatedSelection };
    });
  };

  render() {
    return (
      <>
        <div className={st.block}>
          <h1 className={st.title}>Flashcards</h1>
          <div className={st.container}>
            {flashcards.map((item, index) => (
              <div className={st.flashcard} key={index}>
                <h2 className={st.flashcard__word}>{item.english}</h2>
                <p className={st.flashcard__transcription}>
                  {item.transcription}
                </p>
                {this.state.pressed[index] ? (
                  <p className={st.flashcard__translation}>{item.russian}</p>
                ) : (
                  <button
                    className={st.flashcard__button}
                    onClick={() => this.handleChange(index)}
                  >
                    Проверить
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Flashcard;
