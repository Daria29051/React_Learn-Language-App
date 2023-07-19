import Register from "./Register";
import Login from "./Login";
import '../assets/styles/Style.scss';
import logo from '../assets/icons/logo.png';
import mainImg from '../assets/img/home/main-img.jpg';

function Home() {
  return (

      <div  className="home">
      <img src={mainImg} alt="main-image" className="home__img"/>
      <div className="home__text">
      <p className="home__paragraph"> Привет, дорогой друг!<br/> Если ты читаешь это текст, значит, пришло время выучить английский язык.<br/> Наша команда надеется, что предстоящие занятия будут для тебя не только полезными и эффективными, но также захватфвающими и вдохновляющими.<br/>
      Желаем приятного путешествия! </p>
      <p className="home__paragraph">Hello, dear friend!<br/> If you are reading this text, then it's time to learn English.<br/> Our team hopes that the upcoming classes will be not only useful and effective for you, but also exciting and inspiring.<br/>
      We wish you a pleasant trip!</p>
      <button className="button home__button">GET STARTED</button>
      </div>
      </div>

  );
}

export default Home;
