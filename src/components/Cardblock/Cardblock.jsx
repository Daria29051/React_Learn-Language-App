import Card from "../Card/Card"
import st from "./cardblock.module.scss";
import flashcards from "../../data/flashcard.json";

export default function Cardblock() {
  return (
    <>
    <div className={st.block}>
    <h1 className={st.title}>Flashcards</h1>
    <div className={st.container}>
      {flashcards.map((item, index) => (
        <Card item={item} key={index}/>
      ))}
    </div>
    </div>
    </>
  );
}