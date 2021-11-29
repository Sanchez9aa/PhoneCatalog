import "./phoneCardPage.css";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";
import { useContext } from "react";
import { DarkContext} from "../../contextApi";

const PhoneCardPage = ({ data }) => {
  const dark = useContext(DarkContext)

  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <>
      {data ? (
        <div className={!dark.state.darkmode ? "cp" : "cp darkBG"}>
          <div className="cp-wrapper">
            <div className={!dark.state.darkmode ? "cp-back" : "cp-back shadow darkEL" }>
              <Link to={"/"}>
                <ArrowLeft color={!dark.state.darkmode ? "black" : "white"} />
                <span className={!dark.state.darkmode ? null : "darkColor"}> Back </span>
              </Link>
            </div>

            <div className="cp-country">
              <div className="cp-img">
                <img
                  src={PF + data.imageFileName}
                  alt={`${data.name} phone`}
                />
              </div>
              <div className="cp-info">
                <h1 className={!dark.state.darkmode ? "cp-title" : "cp-title darkColor"}>{data.name}</h1>
                <div className="cp-moreInfo">
                  <div className="cp-moreInfo1">
                    <ul>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Color:</strong> {data.color}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Description:</strong> {data.description}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Manufacturer:</strong> {data.manufacturer}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Price:</strong> {data.price}
                      </li>
                    </ul>
                  </div>
                  <div className="cp-moreInfo2">
                    <ul>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Processor</strong> {data.processor}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Ram:</strong>{" "}
                        {data.ram}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Screen:</strong>{" "}
                        {data.screen}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PhoneCardPage;
