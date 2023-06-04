import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedCameraOutlinedIcon from "@material-ui/icons/LinkedCameraOutlined";
import {
  AlarmOutlined,
  StorageOutlined,
  Search,
  EventNoteOutlined,
  GraphicEqOutlined,
} from "@material-ui/icons";

import { PropTypes } from "../../App";
export default function SideDrawer(props: PropTypes) {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer
      variant="permanent"
      className={clsx(props.classes.drawer, {
        [props.classes.drawerOpen]: open,
        [props.classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [props.classes.drawerOpen]: open,
          [props.classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={props.classes.toolbar}></div>
      <Divider className={props.classes.whiteItem} />
      <List>
        <ListItem button>
          <ListItemIcon>
            <YouTubeIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Youtube" />
        </ListItem>
      </List>
      <Divider className={props.classes.divider} />
      <List>
        {["Camera", "Search"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <LinkedCameraOutlinedIcon className={props.classes.whiteItem} />
              ) : (
                <Search className={props.classes.whiteItem} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider className={props.classes.divider} />
      <List>
        {["Graph", "Counter", "Note", "Container"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? (
                <GraphicEqOutlined className={props.classes.whiteItem} />
              ) : index === 1 ? (
                <AlarmOutlined className={props.classes.whiteItem} />
              ) : index === 2 ? (
                <EventNoteOutlined className={props.classes.whiteItem} />
              ) : (
                <StorageOutlined className={props.classes.whiteItem} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider className={props.classes.divider} />
      <List>
        <ListItem button>
          <ListItemIcon>
            <ChevronRightIcon className={props.classes.whiteItem} />
          </ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
    </Drawer>
  );
}
