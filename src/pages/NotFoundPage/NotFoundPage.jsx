import { useNavigate } from "react-router-dom";
import gif from "../../assets/gif/errorGif.gif";
import st from "./notfound.module.scss";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  }
  
  return (
    <div className={st.container}>
      <div className={st.errorGifPart}>
      <img src={gif} className={st.errorGif} alt="cat" />
      </div>
      <div className={st.errorContent}>
        <h1 className={st.errorTitle}>Error Page</h1>
        <p className={st.errorMessage}>
          Sorry, the page you are looking for could not be found.{" "}
        </p>
        <section className={st.errorContainer}>
          <span className={st.four}>
            <span class="screen-reader-text">4</span>
          </span>
          <span className={st.zero}>
            <span class="screen-reader-text">0</span>
          </span>
          <span className={st.four}>
            <span class="screen-reader-text">4</span>
          </span>
        </section>
        <button className={st.homeButton} onClick={navigateHome}>Go to Home Page</button>
      </div>
    </div>
  );
}
