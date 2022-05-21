import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function BasicChips(props) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label={props.label} />
    </Stack>
  );
}
