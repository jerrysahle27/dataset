import React from "react";
import {
  Button,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Theme,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { PropTypes } from "../../App";
import FileTreeView from "../File/filetree";
import Editor from "../File/Editor";
import ComplexGrid from "../File/filedetail";
import CustomizedTabs from "../File/Editordetail";
import DefaultButton from "../../common/defaultbutton";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      backgroundColor: "#24303",
    },
    text: {
      color: theme.palette.common.white,
      margin: theme.spacing(1),
    },
    title: {
      color: theme.palette.common.white,
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(2),
    },
    chip: {
      backgroundColor: "#6CA598",
      color: theme.palette.common.white,
    },
  })
);
function Main(props: PropTypes) {
  const FilesTitle = ["dataform", "package-lock", "package"];
  const classes = useStyles();
  return (
    <Grid container xs direction="row">
      <Grid item xs={3} sm={2} className={classes.main}>
        <Typography variant="h5" className={classes.title}>
          Files
        </Typography>
        <div>
          <List>
            {FilesTitle.map((row, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Chip label="config" className={classes.chip} />
                </ListItemAvatar>
                <ListItemText primary={row} className={classes.text} />
              </ListItem>
            ))}
          </List>
          <FileTreeView />
        </div>
      </Grid>
      <Grid item xs container direction="column">
        <Grid item xs container direction="row">
          <Grid item xs={9} >
            <div className={props.classes.container}>
              <Typography variant="body2" className={props.classes.whiteItem}>
                definitions/1_simple_examples/dataset_2_with_ref.sql
              </Typography>
              <DefaultButton size="small">Save</DefaultButton>
            </div>
            <Divider />
            <Editor />
          </Grid>
          <Grid item xs>
            <CustomizedTabs />
          </Grid>
        </Grid>
        <Grid item xs>
          <ComplexGrid />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Main;
