import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Divider, Grid, Button } from "@mui/material"; // Import Grid and Button from Material UI
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
// Import your custom styles for the carousel

SwiperCore.use([Navigation]);

const NewAlbumCarousel = ({ albums }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleView = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div>
      <h2>New Albums</h2>
      <Button
        style={{
          color: "#34C94B",
          float: "right",
          marginRight: "50px",
          marginTop: "-50px",
        }}
        onClick={toggleView}
      >
        {showAll ? "Collapse" : "Show All"}
      </Button>
      {showAll ? (
        // Display the grid view
        <Grid container spacing={0.5}>
          <Grid item xs={12}>
            <Grid container justifyContent="start" spacing={2}>
              {albums.map((album) => (
                <Grid item key={album.id}>
                  <Grid item lg={2}>
                    <div className="album-card" style={{ width: "200px" }}>
                      <div className="album-image">
                        <img src={album.image} alt={album.title} />
                      </div>
                      <div className="album-info">
                        <div className="album-follows">
                          <span>{album.follows}Follows</span>
                        </div>
                      </div>
                      <Divider variant="middle" />
                      <div className="album-name">
                        <p>{album.title}</p>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        // Display the Swiper carousel
        <Swiper
          spaceBetween={1}
          slidesPerView={7}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="album-carousel"
        >
          {albums.map((album) => (
            <SwiperSlide key={album.id} className="album-card">
              <div className="album-image">
                <img src={album.image} alt={album.title} />
              </div>
              <div className="album-info">
                <div className="album-follows">
                  <span>{album.follows}Follows</span>
                </div>
              </div>
              <Divider variant="middle" />
              <div className="album-name">
                <p>{album.title}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      )}
    </div>
  );
};

export default NewAlbumCarousel;
