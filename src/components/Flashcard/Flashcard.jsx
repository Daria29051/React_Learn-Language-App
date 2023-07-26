import React from 'react';
import st from './flashcard.module.scss';
import flashcards from '../../data/flashcard.json';


class Flashcard extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pressed: false,
    }
  }

  handleClick = () =>{
    this.setState({
      pressed: !this.state.pressed
    });
  }
render() {
  return (<>
  <h1 className={st.title}>Flashcards</h1>
    <div  className={st.container} >
    {flashcards.map((item, index) => (
      <div className={st.flashcard} key={index}>
<h2 className={st.flashcard__word}>{item.english}</h2>
<p className={st.flashcard__transcription}>{item.transcription}</p>
<button className={st.flashcard__button} onClick = {this.handleClick}>Проверить</button>
</div>
    ))}
  </div>
  </>
  );
}}

export default Flashcard;
