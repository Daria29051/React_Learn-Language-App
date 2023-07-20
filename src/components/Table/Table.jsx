import words from '../../data/words.json'
import st from './table.module.scss';
import edit from '../../assets/icons/edit.png';
import del from '../../assets/icons/delete.png';
import save from '../../assets/icons/save.png';
import cancel from '../../assets/icons/cancel.png';



function Table() {
  return (
<div className={st.wordlist}>
<h1 className={st.wordlist__title} >List of words</h1>
<div className={st.wordlist__optionButtonsContainer}>
<button className={st.wordlist__optionButton}>Add a new word</button>
<button className={st.wordlist__optionButton}>Study words</button>
</div>
<table className={st.wordlist__table}>
<thead>
<tr>
<th>Word</th>
<th>Transcription</th>
<th>Translation</th>
<th>Options</th>
</tr>
<tr className={st.wordlist__inputRow}>
    <td><input className={st.wordlist__input} type="text" placeholder="Word"></input></td>
    <td><input className={st.wordlist__input}  type="text" placeholder="Transcription"></input></td>
    <td><input className={st.wordlist__input}  type="text" placeholder="Translation"></input></td>
    <td>
    <img src={save} alt="save" className={st.wordlist__actionIcon} title="Save"/>
    <img src={cancel} alt="cancel"className={st.wordlist__actionIcon} title="Cancel"/></td>
</tr>
</thead>
<tbody> { words.map((item, index) => (
    <tr className='wordlist__item' key={index}>
  <td>{item.english}</td>
  <td>{item.transcription}</td>
  <td>{item.russian}</td>
  <td>
    <img src={edit} alt="edit" className={st.wordlist__actionIcon} title="Edit"/>
    <img src={del} alt="delete"className={st.wordlist__actionIcon} title="Delete"/></td>
</tr>
))}

</tbody>
</table>
</div>
);
}

export default Table;