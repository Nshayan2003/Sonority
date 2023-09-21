import axios from "axios";
const baseapi = "https://qtify-backend-labs.crio.do";
const baseURL = "https://qtify-backend-labs.crio.do/albums";

const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${baseURL}/top`);
    return response.data;
  } catch (error) {
    console.error("Error fetching top albums:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${baseURL}/new`);
    return response.data;
  } catch (error) {
    console.error("Error fetching new albums:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
const fetchSongs = async () => {
  try {
    const response = await axios.get(`${baseapi}/songs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export { fetchTopAlbums, fetchNewAlbums, fetchSongs };
