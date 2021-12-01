import "./phoneCard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkContext } from "../../contextApi";

const PhoneCard = ({ name, price, processor, img }) => {
  const dark = useContext(DarkContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={!dark.state.darkmode ? "cc" : "cc shadow"}>
      <div className="cc-img">
        <Link to={`/${name}`}>
          <img
            className={
              !dark.state.darkmode ? "cc-img-img" : "cc-img-img border"
            }
            src={PF + img}
            alt={`${name} phone`}
          />
        </Link>
      </div>
      <div className={!dark.state.darkmode ? "cc-info" : "cc-info darkEL"}>
        <div
          className={!dark.state.darkmode ? "cc-title" : "cc-title darkColor"}
        >
          {name}
        </div>
        <div className="cc-moreInfo">
          <ul>
            <li className={!dark.state.darkmode ? null : "darkColor"}>
              <strong className={!dark.state.darkmode ? null : "darkColor"}>
                Price:
              </strong>{" "}
              {price}{" "} €
            </li>
            <li className={!dark.state.darkmode ? null : "darkColor"}>
              <strong className={!dark.state.darkmode ? null : "darkColor"}>
                Processor:
              </strong>{" "}
              {processor}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
