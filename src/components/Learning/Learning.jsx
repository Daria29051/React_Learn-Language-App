import Flashcard from "../Flashcard/Flashcard";
import st from './learning.module.scss';

function Learning() {
  return (
    <>
      <div className={st.learning}></div>
      <div className={st.learning__flashcards}>
      <Flashcard></Flashcard>
      </div>
    </>
  );
}

export default Learning;
