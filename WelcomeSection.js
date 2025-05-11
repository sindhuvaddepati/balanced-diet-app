import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const WelcomeSection = () => {
  return (
    <Card sx={{ mb: 2, backgroundColor: "#f5f5f5" }}>
      <CardContent>
        <Typography variant="h5">Welcome, User!</Typography>
        <Typography variant="body2">Start tracking your meals and stay healthy.</Typography>
      </CardContent>
    </Card>
  );
};

export default WelcomeSection;
