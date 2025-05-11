import React from "react";
import { Container, Tabs, Tab, Box } from "@mui/material";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

const AuthPage = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <Container sx={{ mt: 4 }}>
      <Tabs value={tabIndex} onChange={(e, newIndex) => setTabIndex(newIndex)} centered>
        <Tab label="Login" />
        <Tab label="Signup" />
      </Tabs>
      <Box sx={{ mt: 2 }}>{tabIndex === 0 ? <Login /> : <Signup />}</Box>
    </Container>
  );
};

export default AuthPage;
