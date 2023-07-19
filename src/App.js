import Header from "./components/Header";
import Home from "./components/Home";
import Learning from "./components/Learning";
import Training from "./components/Training";
import './assets/styles/Style.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Learning></Learning>
      <Training></Training>
    </div>
  );
}

export default App;
