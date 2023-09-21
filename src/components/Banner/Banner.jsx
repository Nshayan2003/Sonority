import React from "react";
import banner from "../../assets/banners.png";

const Banner = () => {
  const containerStyle = {
    margin: "0",
    padding: "0",

    backgroundColor: "#121212",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyle = {
    maxWidth: "100%", // Set maximum width to maintain aspect ratio
    maxHeight: "100%", // Set maximum height to maintain aspect ratio
  };

  return (
    <div
      style={containerStyle}
      width={{ lg: "100%", xs: "100%", sm: "fit-content" }}
    >
      <img src={banner} alt="banner" style={imageStyle} />
    </div>
  );
};

export default Banner;
