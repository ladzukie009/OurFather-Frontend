import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import CircularProgressWithPercentage from "../progress/CircularWithPercentage";

export default function ListIconWithPercent({ icon, data }) {
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {data.map((value) => {
          return (
            <ListItem key={value.id}>
              <ListItemAvatar>
                <Avatar>{icon}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={value.label} secondary={value.text} />
              <CircularProgressWithPercentage
                value={value.percentage}
                size={50}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
