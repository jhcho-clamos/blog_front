import api from "@/config/api";
import {
  LoginProps_Get,
  LoginProps_Post,
  SignupProps_Post,
} from "@/type/login";

const authApi = {
  login: (data: LoginProps_Post): Promise<LoginProps_Get> =>
    api({ method: "post", _url: "/api/user/login", data: data }),
  signup: (data: SignupProps_Post): Promise<LoginProps_Get> =>
    api({ method: "post", _url: "/api/user/signup", data: data }),
};

export default {
  authApi: authApi,
};
