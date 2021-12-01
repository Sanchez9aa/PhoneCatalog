import "./searchFilter.css";
import {Search, Plus} from "react-feather";
import { useState } from "react";
import PhoneList from "../phoneList/PhoneList";
import { useContext } from "react";
import {DarkContext} from '../../contextApi'
import ModalAddPhone from '../modalAddPhone/ModalAddPhone'

const SearchFilter = () => {

  const dark = useContext(DarkContext)
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState("")

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
        <div className="sf">
        <div className="sf-wrapper">
          <div className={!dark.state.darkmode ? "sf-left" : "sf-left darkEL shadow"}>
            <Search arial-hidden="true" size={20} color={!dark.state.darkmode ? "black" : "white"}  />
            <input
              type="text"
              name="search"
              className={!dark.state.darkmode ? "sf-left-search" : "sf-left-search darkColor" }
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className={!dark.state.darkmode ? "sf-rigth" : "sf-rigth darkEL shadow"} onClick={() => setShow(!show)}>
            <Plus arial-hidden="true" size={20} color={!dark.state.darkmode ? "black" : "white"}  />
            <input
              type="button"
              name="search"
              value="Add Phone"
              className={!dark.state.darkmode ? "sf-left-search" : "sf-left-search darkColor" }
            />
          </div>
        </div>
      </div>
      <PhoneList search={search} />
      {
        !show ? null : <ModalAddPhone show={show} setShow={setShow} />
      }
    </>
  );
};

export default SearchFilter;
