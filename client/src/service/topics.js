import axios from 'axios';
import { baseTopicsUrl as baseUrl } from "../routes/routes";

axios.defaults.headers.common = {
  "Content-Type": "application/json",
};

const getTopics = async () => {
  const request = axios.get(baseUrl);
  return await request;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getTopics };
