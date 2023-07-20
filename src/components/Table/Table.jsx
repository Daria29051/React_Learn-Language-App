import words from '../../data/words.json'
import st from './table.module.scss';



function Table() {
  return (
<div className={st.wordlist}>
<h1 className={st.wordlist__title} >List of words</h1>
<table className={st.wordlist__table}>
<thead>
<tr>
<th>Word</th>
<th>Transcription</th>
<th>Translation</th>
</tr>
<tr className={st.wordlist__inputRow}>
    <td><input className={st.wordlist__input} type="text" placeholder="Word"></input></td>
    <td><input className={st.wordlist__input}  type="text" placeholder="Transcription"></input></td>
    <td><input className={st.wordlist__input}  type="text" placeholder="Translation"></input></td>
</tr>
</thead>
<tbody> { words.map((item, index) => (
    <tr className='wordlist__item' key={index}>
  <td>{item.english}</td>
  <td>{item.transcription}</td>
  <td>{item.russian}</td>
</tr>
))}

</tbody>
</table>
</div>
);
}

export default Table;