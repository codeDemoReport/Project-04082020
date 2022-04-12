import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
// import EmailIcon from "@mui/icons-material/Email";

function VerifyToken(props) {
  return (
    <Container>
      <Box sx={{ margin: "auto", textAlign: "center" }}>
        <Box sx={{ background: "#cfe8fc" }}>
          <MarkEmailReadIcon sx={{ fontSize: "200px" }} />
        </Box>
        <Box>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Your email address has been verified
          </Typography>
          <br />
          <Button variant="contained" size="large">
            Login Now
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default VerifyToken;
