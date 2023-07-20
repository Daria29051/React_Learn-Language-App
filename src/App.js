import Header from "./components/Header";
import Home from "./components/Home";
import Table from "./components/Table";
import Learning from "./components/Learning";
import Training from "./components/Training";
import './assets/styles/Style.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Table></Table>
      <Learning></Learning>
      <Training></Training>
    </div>
  );
}

export default App;
