import axios from "axios";

// get the base url from the .env file
const baseURL = process.env.EXPO_PUBLIC_API_URL
const localHost = "http://localhost:5000"

export default axios.create({
    baseURL: localHost || baseURL,
    });