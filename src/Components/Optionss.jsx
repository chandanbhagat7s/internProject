import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Optionss() {
  const [Subscription, setSubscription] = React.useState("");

  const handleChange = (event) => {
    setSubscription(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Subscription</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Subscription}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Monthly Rs : 149</MenuItem>
          <MenuItem value={20}>Yearly Single User Rs : 999</MenuItem>
          <MenuItem value={30}>Yearly Multi User Rs : 1799</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
