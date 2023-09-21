import React from "react";
import { Stack, InputBase, IconButton, Paper, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../assets/Logo.svg";
import Button from "../../assets/Frame 532.svg";
import search from "../../assets/search.svg";

const Header = () => {
  const inputStyles = {
    border: "none",
    outline: "none",
    width: "100%",
    padding: "0 10px",
    boxSizing: "border-box",
    textColor: "#121212",
  };
  const stackStyle = {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    borderRadius: "8px",
    border: "1px solid #121212",
    width: "568px",
    height: "48px",
    paddingRight: "0",
  };

  return (
    <Paper
      component={Stack}
      width={{ lg: "100%", xs: "100%", sm: "100%" }} // Adjusted width based on breakpoints
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      position="sticky"
      p={1}
      sx={{
        background: "#34C94B",
      }}
    >
      <img src={Logo} alt="logo" style={{ width: "67px", height: "34px" }} />
      <Stack direction="row" alignItems="center">
        <div style={stackStyle}>
          <input placeholder="Search album of your voice" style={inputStyles} />
          <div
            style={{
              borderLeft: "2px solid #121212",
              height: "100%",
              margin: "0 10px",
            }}
          />
          <IconButton
            sx={{
              color: "#34C94B",
            }}
          >
            <img src={search} alt="search" />
          </IconButton>
        </div>
      </Stack>
      <div style={{ marginRight: "22px" }}>
        <img src={Button} alt="button" />
      </div>
    </Paper>
  );
};

export default Header;
