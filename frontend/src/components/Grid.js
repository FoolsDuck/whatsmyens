import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import logo from "../images/logo.png";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import EnsCard from "./Card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {props.data.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            key={index}
            style={{ padding: "0px" }}
          >
            <Item
              style={{ padding: "0px", margin: "10px", borderRadius: "10px" }}
            >
              <EnsCard item={item} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
