import api from "@/config/api";
import {
  LoginProps_Get,
  LoginProps_Post,
  SignupProps_Post,
} from "@/type/login";
import { ChatProps_Get, ChatProps_Post } from "@/type/chat";

const authApi = {
  login: (data: LoginProps_Post): Promise<LoginProps_Get> =>
    api({ method: "post", _url: "/api/user/login", data }),
  signup: (data: SignupProps_Post): Promise<LoginProps_Get> =>
    api({ method: "post", _url: "/api/user/signup", data }),
};

const chatApi = {
  list: (): Promise<ChatProps_Get[]> =>
    api({ method: "get", _url: "/api/chat" }),
  makeList: (data: ChatProps_Post): Promise<ChatProps_Get> =>
    api({ method: "post", _url: "/api/chat" }),
};

export default {
  authApi: authApi,
  chatApi: chatApi,
};
