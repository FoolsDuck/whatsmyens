import React, { useEffect, useState } from "react";
import "./App.css";
import { API_RANK, SERVER_URL, API_FILTER } from "./Config";
import BasicGrid from "./components/Grid";
import axios from "axios";
import SearchAppBar from "./components/AppBar";
import LoaderIcon from "react-loader-icon";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import BasicSelect from "./components/Select";
const options = [
  "Default",
  "dividersCount",
  "dividersSum",
  "unixDate",
  "possibleNumeralSystem",
  "reversedNumber",
  "sine",
  "cosine",
  "tangent",
];

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  useEffect(() => {
    getData();
  }, [page]);

  const getData = async () => {
    setLoading(true);
    const rank = await axios
      .get(`${SERVER_URL}/${API_RANK}?page=${page}&q=${filterValue}`)
      .then((res) => res.data)
      .catch((err) => err);
    setLoading(false);
    setData([...data, ...rank]);
  };

  const filter = async (e) => {
    setFilterValue(e.target.value);
    const rank = await axios
      .get(`${SERVER_URL}/${API_FILTER}?q=${e.target.value}&page=0`)
      .then((res) => res.data)
      .catch((err) => err);
    setData(rank);
  };

  const sort = async (e) => {
    setSortValue(e.target.value);
    const rank = await axios
      .get(`${SERVER_URL}/${API_RANK}?page=0&sortby=${e.target.value}`)
      .then((res) => res.data)
      .catch((err) => err);
    console.log(rank);
    setData(rank);
  };

  return (
    <div className="App">
      <SearchAppBar
        filter={filter}
        sortValue={sortValue}
        handleChange={sort}
        options={options}
      />
      <div style={{ padding: "3rem", textAlign: "center" }} className="main">
        <div className="sortDiv">
          <BasicSelect
            sortValue={sortValue}
            handleChange={sort}
            options={options}
          />
        </div>
        {data.length > 0 ? (
          <BasicGrid data={data} />
        ) : (
          <button
            onClick={() => getData()}
            className="btn bg-blue"
            style={{
              backgroundColor: "#668cf3",
              fontSize: "22px",
              padding: "6px 15px",
            }}
          >
            CLEAR
          </button>
        )}
        <br />
        {data.length >= 60 && (
          <button
            onClick={() => setPage(page + 1)}
            className="btn bg-blue"
            style={{
              backgroundColor: "#668cf3",
              fontSize: "22px",
              padding: "6px 15px",
            }}
          >
            {loading ? (
              <LoaderIcon
                type="spin"
                style={{
                  width: "22px",
                  height: "22px",
                  // marginTop: "-4px",
                  padding: "6px 15px",
                }}
              />
            ) : (
              "Load More"
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
