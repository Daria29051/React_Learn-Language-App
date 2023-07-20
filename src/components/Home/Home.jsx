
import st from './home.module.scss';
import mainImg from '../../assets/img/home/main-img.jpg';

function Home() {
  return (

      <div  className={st.home}>
      <img src={mainImg} alt="main-image" className={st.home__img}/>
      <div className={st.home__text}>
      <p className={st.home__paragraph}> Привет, дорогой друг!<br/> Если ты читаешь это текст, значит, пришло время выучить английский язык.<br/> Наша команда надеется, что предстоящие занятия будут для тебя не только полезными и эффективными, но также захватфвающими и вдохновляющими.<br/>
      Желаем приятного путешествия! </p>
      <p className={st.home__paragraph}>Hello, dear friend!<br/> If you are reading this text, then it's time to learn English.<br/> Our team hopes that the upcoming classes will be not only useful and effective for you, but also exciting and inspiring.<br/>
      We wish you a pleasant trip!</p>
      <button className={st.button}>GET STARTED</button>
      </div>
      </div>

  );
}

export default Home;
