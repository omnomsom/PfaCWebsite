import axios from "axios";

const apiOrigin = import.meta.env.VITE_API_ORIGIN?.replace(/\/+$/, "") ?? "";

export const api = axios.create({ baseURL: `${apiOrigin}/api` });
