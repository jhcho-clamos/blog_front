const base_url =
  process.env.NODE_ENV == "development" ? "http://192.168.0.29:5000" : "";
export default {
  BASE_URL: base_url,
  SOCKET_URL: base_url + "/ws/chat",
  TIME_OUT: 5000,
};
