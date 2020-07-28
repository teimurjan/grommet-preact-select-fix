import React, { useState } from "react";
import { Box, Grommet, Select, Button } from "grommet";
import { grommet } from "grommet/themes";

const SimpleSelect = ({ theme, ...rest }) => {
  const options = ["one", "two"];
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Grommet full theme={theme || grommet}>
      <Box fill align="center" justify="start" pad="large" gap="small">
        <Button onClick={() => setOpen(!open)} label="Control the select" />
        <Select
          id="select"
          name="select"
          placeholder="Select"
          open={open}
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          {...rest}
        />
      </Box>
    </Grommet>
  );
};

export default SimpleSelect;
