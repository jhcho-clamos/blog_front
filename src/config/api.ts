import axios from "axios";
import config from "@/config/config";

interface ApiProps {
  method: "get" | "post" | "delete" | "put";
  _url: string;
  _headers?: object;
  data?: any;
  params?: any;
}

const Api = async ({
  method,
  _url,
  _headers,
  data = {},
  params = {},
}: ApiProps): Promise<any> => {
  let url = config.BASE_URL + _url;
  let headers = _headers ?? { "Content-Type": "application/json" };
  if (method == "get" || method == "delete") {
    let response = await axios[method](url, {
      headers,
      params,
      timeout: config.TIME_OUT,
    });
    return response.data?.data;
  } else {
    let response = await axios[method](url, data, {
      headers,
      params,
      timeout: config.TIME_OUT,
    });
    return response.data?.data;
  }
};

export default Api;
