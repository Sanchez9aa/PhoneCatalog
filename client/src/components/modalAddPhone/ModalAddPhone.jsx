import "./modalAddPhone.css";
import { useState } from "react";
import { DarkContext } from "../../contextApi";
import { useContext } from "react";
import getApi from "../../services/getApi";

const ModalAddPhone = ({ show, setShow }) => {
  const [info, setInfo] = useState();
  const [data, setData] = useState();
  const dark = useContext(DarkContext);

  const handleInputs = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(info);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if(!info){
      setData("Fill all inputs properly")
      return
    }
    if (!info.name || !info.color ||  !info.description || !info.manufacturer || !info.price || !info.processor || !info.ram || !info.screen){
      setData("Fill all inputs properly")
      return
    }
    getApi.addPhone(info, setData)
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
            Add a new phone
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
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddPhone;
