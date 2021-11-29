import Header from "../header/Header";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import getApi from "../../services/getApi";
import PhoneCardPage from "../phoneCardPage/PhoneCardPage";


const PhonePage = () => {
  const [data, setData] = useState();
  const phone = useParams().phone;

  useEffect(() => {
    getApi.getPhoneByName(phone, setData);
  }, [phone]);
  console.log(data)

  return (
    <>
      <Header />
      <PhoneCardPage data={data} />
    </>
  );
};

export default PhonePage;
