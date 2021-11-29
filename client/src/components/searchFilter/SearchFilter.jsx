import "./searchFilter.css";
import {Search} from "react-feather";
import { useState } from "react";
import PhoneList from "../phoneList/PhoneList";
import { useContext } from "react";
import {DarkContext} from '../../contextApi'

const SearchFilter = () => {

  const dark = useContext(DarkContext)

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
        </div>
      </div>
      <PhoneList search={search} />
    </>
  );
};

export default SearchFilter;
