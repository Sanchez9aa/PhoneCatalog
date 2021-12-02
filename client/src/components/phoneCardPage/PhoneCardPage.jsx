import "./phoneCardPage.css";
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Edit } from "react-feather";
import { useContext, useState } from "react";
import { DarkContext } from "../../contextApi";
import getApi from '../../services/getApi'
import { useNavigate } from "react-router-dom";
import ModalEditPhone from '../modalEditPhone/ModalEditPhone'

const PhoneCardPage = ({ data }) => {
  const dark = useContext(DarkContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  const deleteThisPhone = () => {
    getApi.deletePhone(data._id)
    console.log(data._id)
    navigate("/")
  }

  const handleModal = () => {
    setShow(!show)
  }

  return (
    <>
      {data ? (
        <div className={!dark.state.darkmode ? "cp" : "cp darkBG"}>
          <div className="cp-wrapper">
            <div className="cp-topBar">
              <div
                className={
                  !dark.state.darkmode ? "cp-topbar-item" : "cp-topbar-item shadow darkEL"
                }
              >
                <Link to={"/"}>
                  <ArrowLeft arial-hidden="true" size={20} color={!dark.state.darkmode ? "black" : "white"} />
                  <span className={!dark.state.darkmode ? null : "darkColor"}>
                    {" "}
                    Back{" "}
                  </span>
                </Link>
              </div>
              <div
              onClick={() => handleModal()}
                className={
                  !dark.state.darkmode ? "cp-topbar-item" : "cp-topbar-item shadow darkEL"
                }
              >
                  <Minus arial-hidden="true" size={20} color={!dark.state.darkmode ? "black" : "white"} />
                  <span className={!dark.state.darkmode ? null : "darkColor"}>
                    {" "}
                    Update{" "}
                  </span>
              </div>
              <div
                onClick ={() => deleteThisPhone()}
                className={
                  !dark.state.darkmode ? "cp-topbar-item" : "cp-topbar-item shadow darkEL"
                }
              >
                <Edit arial-hidden="true" size={20} color={!dark.state.darkmode ? "black" : "white"} />
                <span className={!dark.state.darkmode ? null : "darkColor"}>
                  {" "}
                  Delete{" "}
                </span>
              </div>
            </div>

            <div className="cp-country">
              <div className="cp-img">
                <img src={PF + data.imageFileName} alt={`${data.name} phone`} />
              </div>
              <div className="cp-info">
                <h1
                  className={
                    !dark.state.darkmode ? "cp-title" : "cp-title darkColor"
                  }
                >
                  {data.name}
                </h1>
                <div className="cp-moreInfo">
                  <div className="cp-moreInfo1">
                    <ul>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong
                          className={!dark.state.darkmode ? null : "darkColor"}
                        >
                          Color:
                        </strong>{" "}
                        {data.color}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong
                          className={!dark.state.darkmode ? null : "darkColor"}
                        >
                          Description:
                        </strong>{" "}
                        {data.description}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong
                          className={!dark.state.darkmode ? null : "darkColor"}
                        >
                          Manufacturer:
                        </strong>{" "}
                        {data.manufacturer}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong
                          className={!dark.state.darkmode ? null : "darkColor"}
                        >
                          Price:
                        </strong>{" "}
                        {data.price}
                      </li>
                    </ul>
                  </div>
                  <div className="cp-moreInfo2">
                    <ul>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong
                          className={!dark.state.darkmode ? null : "darkColor"}
                        >
                          Processor
                        </strong>{" "}
                        {data.processor}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong
                          className={!dark.state.darkmode ? null : "darkColor"}
                        >
                          Ram:
                        </strong>{" "}
                        {data.ram}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong
                          className={!dark.state.darkmode ? null : "darkColor"}
                        >
                          Screen:
                        </strong>{" "}
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
      {!show ? null : <ModalEditPhone show={show} setShow={setShow} id={data._id}/> }
    </>
  );
};

export default PhoneCardPage;
