
import st from './home.module.scss';
import mainImg from '../../assets/img/home/main-img.jpg';
import Table from '../../components/Table/Table';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();
  const goToCards=()=> {
    navigate('/cards');
  }

  return (
  <div className={st.homepage}>
  <div className={st.screen1} >
      <div  className={st.home}>
      <img src={mainImg} alt="main-image" className={st.home__img}/>
      <div className={st.home__text}>
      <p className={st.home__paragraph}> Привет, дорогой друг!<br/> Если ты читаешь это текст, значит, пришло время выучить английский язык.<br/> Наша команда надеется, что предстоящие занятия будут для тебя не только полезными и эффективными, но также захватывающими и вдохновляющими.<br/>
      Желаем приятного путешествия! </p>
      <p className={st.home__paragraph}>Hello, dear friend!<br/> If you are reading this text, then it's time to learn English.<br/> Our team hopes that the upcoming classes will be not only useful and effective for you, but also exciting and inspiring.<br/>
      We wish you a pleasant trip!</p>
      <button className={st.button}>ADD NEW WORDS</button>
      <button className={st.button} onClick={goToCards}>STUDY CARDS</button>
      </div>
      </div>
      </div>
      <div className={st.table}><Table/></div>
      </div>

  );
}

export default Home;
