import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import axios from "axios";
import Loader from "./Loader";

export default function Businesses() {
  const [responseData, setResponseData] = useState([]);
  async function data() {
    // https://dsboxapi.beatsacademy.in/api/AdminHome2/
    const d = await axios.get("/api/AdminHome2/", {
      withCredentials: true,
    });

    setResponseData([...d.data?.data]);
  }
  useEffect(() => {
    data();
  }, []);
  return <>{!responseData ? <Loader /> : <DataTable data={responseData} />}</>;
}
