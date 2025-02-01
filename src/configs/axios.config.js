
import axios from "axios";

const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER,
});


export { Axios };