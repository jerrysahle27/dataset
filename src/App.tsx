import React from "react";
import Main from "./components/layout/main";
import SideDrawer from "./components/layout/drawer";
import { useStyles } from "./hooks/style";
import { CssBaseline } from "@material-ui/core";
import Appbar from "./components/layout/appbar";
export interface PropTypes {
  classes: any;
}
export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Appbar classes={classes} />
      <SideDrawer classes={classes} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Main classes={classes} />
      </main>
    </div>
  );
}
