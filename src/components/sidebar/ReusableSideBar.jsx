import React from "react";
import {
  ButtonBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function ReusableSideBar({ items }) {
  return (
    <>
      <List component="nav">
        {items.map((item, index) => (
          <ListItem
            component={ButtonBase}
            onClick={item.onClick}
            key={index}
            style={{ fontSize: "2rem" }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
