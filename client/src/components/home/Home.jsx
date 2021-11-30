import Header from "../header/Header";
import Main from "../main/Main";
import { useContext } from "react";
import { DarkContext } from "../../contextApi";
import "./home.css"
const Home = () => {
  const dark = useContext(DarkContext);

  return (
    <>
      
      <Header />
      <div className={!dark.state.darkmode ? "home" : "darkBG"}>
        <Main />
      </div>
    </>
  );
};

export default Home;
