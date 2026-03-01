import axios from "axios";
import AxiosConfig from "../../config/AxiosConfig";

const api = axios.create(AxiosConfig);

export default api;
