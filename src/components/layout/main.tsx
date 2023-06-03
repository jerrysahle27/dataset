import React from "react";
import {
  Chip,
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
function Main(props: PropTypes) {
  const FilesTitle = ["dataform", "package-lock", "package"];
  console.log(props);
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Typography variant="h6" className={props.classes.title}>
          Files
        </Typography>
        <div className={props.classes.demo}>
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
      <Grid item xs={8} sm container>
        <Grid item xs={12} container direction="column" spacing={2}>
          <Grid item xs={12} sm={8}>
            <Editor />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CustomizedTabs />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ComplexGrid />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Main;
