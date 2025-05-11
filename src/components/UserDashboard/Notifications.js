import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Chip,
  Divider,
  Badge,
  Button,
  Box
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Notifications.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      text: "🍽️ Meal plan updated!",
      type: "Meal",
      time: "Just now",
      read: false
    },
    {
      text: "💡 New diet tip available!",
      type: "Tip",
      time: "2 min ago",
      read: false
    }
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    const updated = notifications.map((n) => ({ ...n, read: true }));
    setNotifications(updated);
  };

  const handleClose = (index) => {
    const newList = [...notifications];
    newList.splice(index, 1);
    setNotifications(newList);
  };

  const typeColor = {
    Meal: "primary",
    Tip: "success"
  };

  return (
    <div className="notification-container">
      <Card className="notification-card">
        <CardContent>
          <Box className="notification-header">
            <Badge
              badgeContent={unreadCount > 0 ? unreadCount : null}
              color="error"
              sx={{ mr: 1 }}
            >
              <NotificationsIcon sx={{ color: "#ff5722" }} />
            </Badge>
            <Typography variant="h6">Notifications</Typography>
          </Box>

          {unreadCount > 0 && (
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              sx={{ mb: 1 }}
              onClick={markAllAsRead}
            >
              Mark all as read
            </Button>
          )}

          <List>
            {notifications.length === 0 ? (
              <Typography className="empty-text">🎉 You're all caught up!</Typography>
            ) : (
              notifications.map((note, index) => (
                <React.Fragment key={index}>
                  <ListItem
                    className={`notification-item ${note.read ? "read" : ""}`}
                    secondaryAction={
                      <IconButton onClick={() => handleClose(index)}>
                        <CloseIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText
                      primary={note.text}
                      secondary={note.time}
                      primaryTypographyProps={{
                        className: `notification-text ${note.read ? "read-text" : ""}`
                      }}
                    />
                    <Chip
                      label={note.type}
                      color={typeColor[note.type]}
                      size="small"
                      sx={{ ml: 2 }}
                    />
                  </ListItem>
                  {index !== notifications.length - 1 && <Divider />}
                </React.Fragment>
              ))
            )}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notifications;
