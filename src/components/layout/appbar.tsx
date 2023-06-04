import { AppBar, FormControl, Toolbar } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import BootstrapButton from "../../common/bootstrapbutton";
import { PropTypes } from "../../App";
import DockOutlinedIcon from "@material-ui/icons/DockOutlined";
import InputOutlinedIcon from "@material-ui/icons/InputOutlined";
import { createStyles, makeStyles, Theme, withStyles } from "@material-ui/core";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import LinearScaleOutlinedIcon from "@material-ui/icons/LinearScaleOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const BootstrapInputOutlined = withStyles((theme: Theme) =>
  createStyles({
    input: {
      color: "#ffffff",
      borderRadius: 2,
      position: "relative",
      backgroundColor: "#24303C",
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 42px 8px 22px",
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
      marginLeft: theme.spacing(8),
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

  const handleProjectMenuChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setprojectMenu(event.target.value as string);
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      className={clsx(props.classes.appBar, {})}
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
            </NativeSelect>
          </FormControl>
          <FormControl>
            <NativeSelect
              style={{ border: "none" }}
              IconComponent={ExpandMoreIcon}
              id="demo-customized-select-native"
              value={enviroment}
              onChange={handleProjectMenuChange}
              input={<BootstrapInputOutlined />}
            >
              <option value="Project Name">Devlopment</option>
            </NativeSelect>
          </FormControl>

          <BootstrapButton
            className={classes.margin}
            startIcon={<LinearScaleOutlinedIcon />}
            variant="contained"
            color="primary"
            disableRipple
          >
            Commit (2 files)
          </BootstrapButton>
        </div>

        <div className={props.classes.group}>
          <InputOutlinedIcon className={props.classes.whiteItem} />
          <DockOutlinedIcon className={props.classes.whiteItem} />
          <InputOutlinedIcon className={props.classes.whiteItem} />
        </div>
      </Toolbar>
    </AppBar>
  );
}
