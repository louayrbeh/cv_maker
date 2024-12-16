import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

const Root = () => {
  return (
    <Box
      component="main"
      sx={{
        display: " flex",
        justifyContent: "center",
        mt: "66px",
        maxHeight: "20px",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Root;
