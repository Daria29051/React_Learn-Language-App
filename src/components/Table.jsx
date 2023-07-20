import words from '../data/words.json'
import '../assets/styles/Style.scss';



function Table() {
  return (
<div className="wordlist">
<h1 className="wordlist__title" >List of words</h1>
<table className="wordlist__table">
<thead>
<tr>
<th>Word</th>
<th>Transcription</th>
<th>Translation</th>
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