import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import st from "./assets/styles/app.module.scss";
import flashcards from "./data/flashcard.json";
import Home from "./pages/Home/Home";
import Cardblock from "./pages/Cardblock/Cardblock";
import Slider from "./pages/Slider/Slider";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className={st.wrapper}>
        <Header />
        <main className={st.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<Cardblock />} />
            <Route path="/game" element={<Slider flashcards={flashcards} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <footer className={st.footer}>Footer</footer>
      </div>
    </Router>
  );
}

export default App;
