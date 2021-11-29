import "./header.css";
import { useContext } from "react";
import { DarkContext } from "../../contextApi";
import Toggle from "../toggle/Toggle";

const Header = () => {
  const dark = useContext(DarkContext);

  return (
    <div className={!dark.state.darkmode ? "header" : "header darkEL shadow"}>
      <div className="header-wrapper">
        <h1
          className={
            !dark.state.darkmode ? "header-title" : "header-title darkColor"
          }
        >
          Phone Catalog
        </h1>
        <Toggle />
      </div>
    </div>
  );
};

export default Header;
