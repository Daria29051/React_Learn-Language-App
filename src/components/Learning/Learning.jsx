import Flashcard from "../Flashcard/Flashcard";
import st from './learning.module.scss';

function Learning() {
  return (
    <>
      <div className={st.learning}>Learning</div>
      <div className={st.learning__flashcards}>
      <Flashcard></Flashcard>
      <Flashcard></Flashcard>
      <Flashcard></Flashcard>
      <Flashcard></Flashcard>
      </div>
    </>
  );
}

export default Learning;
