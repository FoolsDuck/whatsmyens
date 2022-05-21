import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import logo from "../images/trans-logo.png";
import Chip from "@mui/material/Chip";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "#668cf3",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "600px",
  overflowY: "scroll",
};

export default function BasicModal(props) {
  const item = props.item;
  return (
    <div className="modal">
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="inner-modal"
      >
        <Box sx={style} className="modal-box">
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
            <h2
              style={{ fontWeight: "900", color: "white", textAlign: "center" }}
            >
              {item.num}
            </h2>
          </div>
          <br />
          <table className="modalTable">
            {Object.entries(item.analysis).map(([key, value], i) => (
              <tr key={i}>
                <td className="roboto">
                  <Chip className="roboto capitalize" label={key}></Chip>
                </td>
                <td>
                  <Chip
                    label={
                      typeof item.analysis[`${key}`] === "boolean"
                        ? value.toString()
                        : typeof item.analysis[`${key}`] === "object"
                        ? value.join(", ")
                        : value
                    }
                  ></Chip>
                </td>
              </tr>
            ))}
          </table>
        </Box>
      </Modal>
    </div>
  );
}
