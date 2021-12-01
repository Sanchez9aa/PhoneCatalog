import "./modalEditPhone.css";
import { useState } from "react";
import { DarkContext } from "../../contextApi";
import { useContext } from "react";
import getApi from "../../services/getApi";
import { useNavigate } from "react-router-dom";


const ModalEditPhone = ({ show, setShow, id }) => {
  const [info, setInfo] = useState();
  const [data, setData] = useState();
  const dark = useContext(DarkContext);
  const navigate = useNavigate();

  const handleInputs = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(info);
  };

  const handleClick = (e) => {
    e.preventDefault();
    getApi.updatePhone(id, info, setData)
    navigate("/")
  };

  if (!show) {
    return null;
  }

  return (
    <div className="m-overlay" onClick={() => setShow(!show)}>
      <div
        className={!dark.state.darkmode ? "m-content" : "m-content darkBG"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={!dark.state.darkmode ? "m-header" : "m-header darkEL"}>
          <h2 className={!dark.state.darkmode ? "null" : "darkColor"}>
            Fill the fields that u need to update
          </h2>
        </div>
        <div className={!dark.state.darkmode ? "m-body" : "m-body border"}>
          <form className="m-body-form">
            <input
              id={!dark.state.darkmode ? "black" : "white"}
              className={
                !dark.state.darkmode ? "null" : "darkColor darkEL border"
              }
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => handleInputs(e)}
            />
            <input
              id={!dark.state.darkmode ? "black" : "white"}
              className={
                !dark.state.darkmode ? "null" : "darkColor darkEL border"
              }
              type="text"
              name="color"
              placeholder="Color"
              onChange={(e) => handleInputs(e)}
            />
            <input
              id={!dark.state.darkmode ? "black" : "white"}
              className={
                !dark.state.darkmode ? "null" : "darkColor darkEL border"
              }
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => handleInputs(e)}
            />
            <input
              id={!dark.state.darkmode ? "black" : "white"}
              className={
                !dark.state.darkmode ? "null" : "darkColor darkEL border"
              }
              type="text"
              name="manufacturer"
              placeholder="Manufacturer"
              onChange={(e) => handleInputs(e)}
            />
            <input
              id={!dark.state.darkmode ? "black" : "white"}
              className={
                !dark.state.darkmode ? "null" : "darkColor darkEL border"
              }
              type="number"
              name="price"
              placeholder="Price"
              onChange={(e) => handleInputs(e)}
            />
            <input
              id={!dark.state.darkmode ? "black" : "white"}
              className={
                !dark.state.darkmode ? "null" : "darkColor darkEL border"
              }
              type="text"
              name="processor"
              placeholder="Processor"
              onChange={(e) => handleInputs(e)}
            />
            <input
              id={!dark.state.darkmode ? "black" : "white"}
              className={
                !dark.state.darkmode ? "null" : "darkColor darkEL border"
              }
              type="number"
              name="ram"
              placeholder="Ram"
              onChange={(e) => handleInputs(e)}
            />
            <input
              id={!dark.state.darkmode ? "black" : "white"}
              className={
                !dark.state.darkmode ? "null" : "darkColor darkEL border"
              }
              type="text"
              name="screen"
              placeholder="Screen"
              onChange={(e) => handleInputs(e)}
            />
          </form>
          {!data ? null : data}
        </div>
        <div className="m-footer">
          <button
            onClick={(e) => handleClick(e)}
            className={
              !dark.state.darkmode
                ? "m-footer-button"
                : "m-footer-button darkColor darkEL shadow"
            }
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEditPhone;
