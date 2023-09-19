import React from 'react';
import edit from '../../assets/icons/edit.png';
import del from '../../assets/icons/delete.png';
import st from './tablerow.module.scss';
import { useContext } from 'react';
import Context from '../../context/Context';



export default function Tablerow() {

  const wordsApi = useContext(Context);
  console.log(wordsApi);

  return (
    <>
         {wordsApi.map((item, index) => (
    <tr className='wordlist__item' key={index}>
  <td>{item.english}</td>
  <td>{item.transcription}</td>
  <td>{item.russian}</td>
  <td>
    <img src={edit} alt="edit" className={st.wordlist__actionIcon} title="Edit"/>
    <img src={del} alt="delete"className={st.wordlist__actionIcon} title="Delete"/></td>
</tr>
))}
    </>
  )
}
