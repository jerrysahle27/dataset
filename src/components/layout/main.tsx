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
  Typography,
} from "@material-ui/core";
import { PropTypes } from "../../App";
import FileTreeView from "../File/filetree";
import Editor from "../File/Editor";
import ComplexGrid from "../File/filedetail";
import CustomizedTabs from "../File/Editordetail";
import BootstrapButton from "../../common/button";
function Main(props: PropTypes) {
  const FilesTitle = ["dataform", "package-lock", "package"];

  return (
    <Grid container xs direction="row">
      <Grid item xs={3} sm={2}>
        <Typography variant="h6" className={props.classes.title}>
          Files
        </Typography>
        <div className={props.classes?.fileMenu}>
          <List>
            {FilesTitle.map((row, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Chip label="config" color="default" />
                </ListItemAvatar>
                <ListItemText primary={row} />
              </ListItem>
            ))}
          </List>
          <FileTreeView />
        </div>
      </Grid>
      <Grid item xs container direction="column">
        <Grid item xs container direction="row">
          <Grid item xs>
            <div className={props.classes.container}>
              <Typography variant="body2" className={props.classes.whiteItem}>
                definitions/1_simple_examples/dataset_2_with_ref.sql
              </Typography>
              <BootstrapButton size="small">Save</BootstrapButton>
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
