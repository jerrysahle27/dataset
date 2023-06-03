import {
  AppBar,
  Toolbar,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import BootstrapButton from "../../common/button";
import { PropTypes } from "../../App";
import DockOutlinedIcon from "@material-ui/icons/DockOutlined";
import InputOutlinedIcon from "@material-ui/icons/InputOutlined";

export default function Appbar(props: PropTypes) {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      className={clsx(props.classes.appBar, {
        // [classes.appBarShift]: open,
      })}
    >
      <Toolbar className={props.classes.toolbar}>
        <div className={props.classes.group}>
          {/* <FormControl>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="outlined"
              color="primary"
              className=""
              placeholder="Product"
            >
              <MenuItem  value={10}>Product Name</MenuItem>
            </Select>
          </FormControl>{" "} */}
          {/* <ButtonGroup
            disableRipple
            variant="contained"
            color="primary"
            aria-label="split button"
          >
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                variant="outlined"
                color="primary"
                placeholder="Development"
              >
                <MenuItem value={10}>Development</MenuItem>
              </Select>
            </FormControl>{" "}
            <BootstrapButton
              color="inherit"
              size="small"
              aria-label="select merge strategy"
              aria-haspopup="menu"
            >
              ..
            </BootstrapButton>
          </ButtonGroup> */}
          <BootstrapButton
            variant="contained"
            color="primary"
            disableRipple
              // className={classes.margin}
          >
            Commit (2 files)
          </BootstrapButton>
        </div>
        <div className={props.classes.group}>
          <InputOutlinedIcon color="primary" />
          <DockOutlinedIcon color="primary" />
          <InputOutlinedIcon color="primary" />
        </div>
      </Toolbar>
    </AppBar>
  );
}
