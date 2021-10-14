import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { ButtonGroup, createTheme, FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { ThemeProvider, createMulTheme, Typography } from "@material-ui/core";
import { Delete, SaveTwoTone, Transform } from "@material-ui/icons";
import "fontsource-roboto";
import { Container } from "@material-ui/core";
const Ulist = () => {
  const CheckboxExample = () => {
    const [checked, setChecked] = useState(true);
    return (
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            icon={<SaveIcon />}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label="Testing Checkbox"
      />
    );
  };

  return (
    <ThemeProvider>
      <Container maxWidth="5">
        <div className="App">
          <header className="App-header">
            <Typography variant="h4">Welcome to my home</Typography>
            <Typography variant="h5">Learn how to use material UI</Typography>
            <div>
              <TextField type="time" variant="outlined" color="secondary" />
            </div>
            <br />
            <div>
              <TextField
                type="email"
                placeholder="test@test.com"
                variant="outlined"
                color="secondary"
              />
            </div>

            <br />
            <ButtonGroup>
              <Button
                Icon={<SaveTwoTone />}
                startIcon={<SaveIcon />}
                variant="contained"
                color="primary"
              >
                Save
              </Button>

              <Button
                endIcon={<Delete />}
                startIcon={<Transform />}
                variant="contained"
                color="secondary"
              >
                Hello
              </Button>
            </ButtonGroup>
            <div>
              <CheckboxExample />
            </div>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Ulist;
