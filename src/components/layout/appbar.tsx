import {
  AppBar,
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
} from "@material-ui/core";

import clsx from "clsx";

import React from "react";

import BootstrapButton from "../../common/button";

import { PropTypes } from "../../App";

import DockOutlinedIcon from "@material-ui/icons/DockOutlined";

import InputOutlinedIcon from "@material-ui/icons/InputOutlined";

import { createStyles, makeStyles, Theme, withStyles } from "@material-ui/core";

import NativeSelect from "@material-ui/core/NativeSelect";

import InputBase from "@material-ui/core/InputBase";

import LinearScaleOutlinedIcon from "@material-ui/icons/LinearScaleOutlined";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },

      "&$selected": {
        color: "#ffffff",
      },
    },

    input: {
      color: "#ffffff",

      borderRadius: 4,

      position: "relative",

      backgroundColor: "#24303C",

      border: "1px solid #ced4da",

      fontSize: 16,

      padding: "10px 42px 8px 22px",

      transition: theme.transitions.create(["border-color", "box-shadow"]),

      // Use the system font instead of the default Roboto font.

      fontFamily: [
        "-apple-system",

        "BlinkMacSystemFont",

        '"Segoe UI"',

        "Roboto",

        '"Helvetica Neue"',

        "Arial",

        "sans-serif",

        '"Apple Color Emoji"',

        '"Segoe UI Emoji"',

        '"Segoe UI Symbol"',
      ].join(","),

      "&:focus": {
        borderRadius: 4,

        borderColor: "#2F3B47",

        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },

    IconComponent: {
      fill: "#ffffff",
    },
  })
)(InputBase);

const BootstrapInputOutlined = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },

      "&$selected": {
        color: "#ffffff",
      },
    },

    input: {
      color: "#ffffff",

      borderRadius: 4,

      position: "relative",

      backgroundColor: "#24303C",

      border: "1px solid #ced4da",

      fontSize: 16,

      padding: "10px 42px 8px 22px",

      fontFamily: [
        "-apple-system",

        "BlinkMacSystemFont",

        '"Segoe UI"',

        "Roboto",

        '"Helvetica Neue"',

        "Arial",

        "sans-serif",

        '"Apple Color Emoji"',

        '"Segoe UI Emoji"',

        '"Segoe UI Symbol"',
      ].join(","),

      "&:focus": {
        border: "none",
      },
    },

    IconComponent: {
      fill: "#ffffff",
    },
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(2),
    },

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },

    selectEmpty: {
      marginTop: theme.spacing(2),
    },

    select: {
      "& .*": {
        color: "#fff",
      },
    },
  })
);

export default function Appbar(props: PropTypes) {
  const classes = useStyles();

  const [enviroment, setEnviroment] = React.useState("Development");

  const [projectMenu, setprojectMenu] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEnviroment(event.target.value as string);
  };

  const handleProjectMenuChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setprojectMenu(event.target.value as string);
  };

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
          <FormControl className={classes.margin}>
            <NativeSelect
              style={{ border: "none" }}
              IconComponent={ExpandMoreIcon}
              id="demo-customized-select-native"
              value={projectMenu}
              onChange={handleProjectMenuChange}
              input={<BootstrapInputOutlined />}
            >
              <option value="Project Name">Project Name</option>

              <option value="Project Title">Project Title</option>

              <option value="Project Name">Project Name</option>
            </NativeSelect>
          </FormControl>

          <FormControl className={classes.margin}>
            <NativeSelect
              IconComponent={ExpandMoreIcon}
              id="demo-customized-select-native"
              value={enviroment}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option value="Development">Development</option>

              <option value="Staging">Staging</option>

              <option value="Production">Production</option>
            </NativeSelect>
          </FormControl>

          <BootstrapButton
            startIcon={<LinearScaleOutlinedIcon />}
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
