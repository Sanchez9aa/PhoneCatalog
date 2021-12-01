import "./phoneList.css";
import PhoneCard from "../phoneCard/PhoneCard";
import { useState, useEffect } from "react";
import getApi from "../../services/getApi";

const PhoneList = ({ search }) => {
  const [phones, setPhones] = useState([]);
  const [phonesSearched, setPhonesSearched] = useState([]);

  useEffect(() => {
    getApi.getAllPhones(setPhones);
  }, []);

  useEffect(() => {
    const searchPhones = () => {
    if (search !== ""){
      const filterPhones = phones.filter(
        (x) =>
          x.name.toLowerCase().indexOf(search.toLowerCase()) > -1
      );
      setPhonesSearched(filterPhones);
    }
  }
  searchPhones()
  }, [search]);

  return (
    <>
    
      {search === "" ? (
        <div className="cl">
          <div className="cl-wrapper">
            {phones.map((x) => (
              <PhoneCard
                key={x._id}
                name={x.name}
                price={x.price}
                processor={x.processor}
                img={x.imageFileName}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="cl">
          <div className="cl-wrapper">
            {phonesSearched.map((x) => (
              <PhoneCard
                key={x._id}
                name={x.name}
                price={x.price}
                processor={x.processor}
                img={x.imageFileName}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default PhoneList;
