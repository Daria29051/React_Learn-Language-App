import Register from "./Register";
import Login from "./Login";

function Home() {
  return (
    <>
      <div className="home">Home</div>
      <div className="home__text"></div>
      <Register></Register>
      <Login></Login>
    </>
  );
}

export default Home;
