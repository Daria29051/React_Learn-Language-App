import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Table from "./components/Table/Table";
import Learning from "./components/Learning/Learning";
import Training from "./components/Training/Training";
import st from './assets/styles/App.scss';
import Cardblock from "./components/Cardblock/Cardblock";
import Slider from "./components/Slider/Slider";
import flashcards from "./data/flashcard.json";



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Table></Table>
      <Cardblock></Cardblock>
      {/* <Learning></Learning> */}
      <Slider flashcards={flashcards}></Slider>
      <Training></Training>
    </div>
  );
}



export default App;
