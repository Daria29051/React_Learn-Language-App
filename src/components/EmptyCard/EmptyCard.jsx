import st from "./emptycard.module.scss";


export default function EmptyCard() {
  return (
    <div className={st.flashcard}>
    <h2 className={st.flashcard__word}>Нет данных</h2>
  </div>
  )
}
