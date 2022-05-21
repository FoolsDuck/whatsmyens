import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_RANK, SERVER_URL } from "../Config";

export default function Form() {
  const [data, setData] = useState([]);
  const [num, setNum] = useState("");
  const [page, setPage] = useState("");

  const onChangeNum = async (e) => {
    setNum(e.target.value);
  };

  const submit = async () => {
    const rank = await axios
      .get(`${SERVER_URL}/${API_RANK}?page=${page}`)
      .then((res) => res.data)
      .catch((err) => err);

    setData(rank);
  };

  return (
    <form onSubmit={submit}>
      <input type="text" onChange={onChangeNum} />
    </form>
  );
}
