import React from "react";
import logo from "../images/trans-logo.png";
import BasicModal from "./Modal.js";

export default function EnsCard(props) {
  const item = props.item;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="col-md-4 col-sm-12">
      <div className="w-100 hoverable">
        <div className="container">
          <div className="logo item1">
            <img
              alt="logo"
              src={logo}
              style={{
                width: "80px",
                // height: "150px",
                borderRadius: "5px",
              }}
            />
            <span
              style={{
                fontWeight: "900",
                color: "white",
                textAlign: "center",
                fontSize: "22px",
              }}
            >
              {item.num}
            </span>
          </div>
          <div className="content item2">
            <p>binary</p>
            <p>hex</p>
            <p>Is Fibonacci</p>
            <p>roman numerals</p>
            <p>square</p>
            <p>Reversed</p>
          </div>
          <div className="content2 item3">
            <p>{item.analysis.binary}</p>
            <p>{item.analysis.hex}</p>
            <p>{item.analysis.isFibonacci.toString()}</p>
            <p>
              {item.analysis.romanNumerals
                ? item.analysis.romanNumerals
                : "None"}
            </p>
            <p>{item.analysis.square}</p>
            <p>
              {parseFloat(item.num.toString().split("").reverse().join(""))}
            </p>
          </div>
          <button className="btn" onClick={() => handleOpen()}>
            all properties
          </button>
          <BasicModal open={open} handleClose={handleClose} item={item} />
        </div>
      </div>
    </div>
  );
}
