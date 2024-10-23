import React from "react";
import { Button, Divider, List, ListItem, ListItemText } from "@mui/material";

export default function ReusableList({ items }) {
  return (
    <>
      <List>
        {items.map((value, index) => (
          <React.Fragment key={value.id}>
            <ListItem sx={{ padding: 0 }}>
              <Button fullWidth sx={{ textAlign: "left" }}>
                <ListItemText primary={value.label} secondary={value.text} />
              </Button>
            </ListItem>
            {index !== items.length - 1 && (
              <Divider key={`divider-${value.id}`} />
            )}
          </React.Fragment>
        ))}
      </List>
    </>
  );
}
