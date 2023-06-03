import React from "react";
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Alert from "@material-ui/lab/Alert";
import { Accordion, Button, Chip, Typography } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import BootstrapButton from "../../common/button";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const AntTabs = withStyles({
  root: {
    borderBottom: "2px solid grey",
  },
  indicator: {
    backgroundColor: "#fff",
  },
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      minWidth: 72,
      color: "#fff",
      //   fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
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
      "&:hover": {
        color: "#fff",
        opacity: 1,
      },
      "&$selected": {
        color: "#fff",
        fontWeight: theme.typography.fontWeightMedium,
      },
      "&:focus": {
        color: "#fff",
      },
    },
    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.grey[900],
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.grey[900],
  },

  container: {
    display: "flex",
    mariginTop: "16",
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Outline" />
          <AntTab label="Documentation" />
        </AntTabs>
      </div>
      <Alert severity="warning">No Compilation issue</Alert>
      <div className={classes.container}>
        <div className={classes.title}>
          <div style={{ marginRight: 10 }}>
            <Chip label="View" />
          </div>
          <Typography variant="body2">dataset_5_from_script_builder</Typography>
        </div>
        {/* <CloseOutlinedIcon /> */}
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Dependencies</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Compiled</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Query</Typography>
          {/* <div className={classes.container}>
            <BootstrapButton>Execute query</BootstrapButton>
            <BootstrapButton>Run this node</BootstrapButton>
          </div> */}
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
