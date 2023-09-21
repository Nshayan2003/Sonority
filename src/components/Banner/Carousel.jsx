import React, { useEffect, useState } from "react";
import AlbumCarousel from "./AlbumCarousel";
import NewAlbumsCarousel from "./NewAlbumCarousel";
import { Divider } from "@mui/material";
import { fetchNewAlbums, fetchTopAlbums, fetchSongs } from "../api";
import Genre from "../categories/genre";

const Carousel = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch top albums data from the API
    fetchTopAlbums()
      .then((data) => setTopAlbums(data))
      .catch((error) => console.error("Error fetching top albums:", error));

    // Fetch new albums data from the API
    fetchNewAlbums()
      .then((data) => setNewAlbums(data))
      .catch((error) => console.error("Error fetching new albums:", error));

    fetchSongs()
      .then((data) => setSongs(data))
      .catch((error) => console.error("Error fetching new albums:", error));
  }, []);

  return (
    <div className="carousel-container" style={{ width: "100%" }}>
      <AlbumCarousel albums={topAlbums} />
    </div>
  );
};

export default Carousel;
