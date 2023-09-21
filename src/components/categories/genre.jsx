import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Divider, Grid, Button } from "@mui/material";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "./genre.css";
SwiperCore.use([Navigation]);
const Genre = ({ albums }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("all");

  const toggleView = () => {
    setShowAll((prev) => !prev);
  };

  const filterAlbumsByGenre = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredAlbums =
    selectedGenre === "all"
      ? albums
      : albums.filter((album) => album.genre.key === selectedGenre);

  return (
    <div>
      <h2 style={{ color: "#fff" }}>Songs</h2>
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

      {/* Add genre tabs */}
      <div style={{ marginBottom: "20px" }}>
        <Button
          onClick={() => filterAlbumsByGenre("all")}
          style={{
            color: "#fff",
            borderBottom: selectedGenre === "all" && "2px solid #34C94B",
          }}
        >
          All
        </Button>
        <Button
          onClick={() => filterAlbumsByGenre("rock")}
          style={{
            color: "#fff",
            borderBottom: selectedGenre === "rock" && "2px solid #34C94B",
          }}
        >
          Rock
        </Button>
        <Button
          onClick={() => filterAlbumsByGenre("pop")}
          style={{
            color: "#fff",
            borderBottom: selectedGenre === "pop" && "2px solid #34C94B",
          }}
        >
          Pop
        </Button>
        <Button
          onClick={() => filterAlbumsByGenre("jazz")}
          style={{
            color: "#fff",
            borderBottom: selectedGenre === "jazz" && "2px solid #34C94B",
          }}
        >
          Jazz
        </Button>
        <Button
          onClick={() => filterAlbumsByGenre("blues")}
          style={{
            color: "#fff",
            borderBottom: selectedGenre === "blues" && "2px solid #34C94B",
          }}
        >
          Blues
        </Button>
      </div>

      {showAll ? (
        // Display the grid view
        <Grid container spacing={0.5}>
          <Grid item xs={12}>
            <Grid container justifyContent="start" spacing={2}>
              {filteredAlbums.map((album) => (
                <Grid item key={album.id}>
                  <Grid item lg={2}>
                    <div className="album-card" style={{ width: "200px" }}>
                      <div className="album-image">
                        <img src={album.image} alt={album.title} />
                      </div>
                      <div className="album-info">
                        <div className="album-follows">
                          <span style={{ color: "#fff" }}>
                            {album.likes} Likes
                          </span>
                        </div>
                      </div>

                      <div className="album-name">
                        <p style={{ color: "#fff", textDecoration: "none" }}>
                          {album.title}
                        </p>
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
          {filteredAlbums.map((album) => (
            <SwiperSlide key={album.id} className="album-card">
              <div className="album-image">
                <img src={album.image} alt={album.title} />
              </div>
              <div className="album-info">
                <div className="album-follows">
                  <span style={{ color: "#fff" }}>{album.likes} Likes</span>
                </div>
              </div>
              <Divider variant="middle" />
              <div className="album-name">
                <p style={{ color: "#fff" }}>{album.title}</p>
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

export default Genre;
