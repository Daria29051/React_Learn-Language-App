import Flashcard from "./Flashcard";
import '../assets/styles/Style.scss';

function Learning() {
  return (
    <>
      <div className="learning">Learning</div>
      <div className="learning__flashcards">
      <Flashcard></Flashcard>
      <Flashcard></Flashcard>
      <Flashcard></Flashcard>
      <Flashcard></Flashcard>
      </div>
    </>
  );
}

export default Learning;
