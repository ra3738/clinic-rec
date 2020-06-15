import axios from 'axios';
import serverConnectionInfo from '../constants/config';

const axiosInstance = axios.create({
  baseURL: serverConnectionInfo.URN_CLIENT
});

export default axiosInstance;
