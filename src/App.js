import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Home, Cardblock, Slider, NotFoundPage} from '../src/pages';
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import flashcards from "./data/flashcard.json";
import st from "./assets/styles/app.module.scss";
import ContextProvider from "./context/ContextProvider";
import Tablerow from "./components/Tablerow/Tablerow";




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
