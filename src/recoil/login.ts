import { atom, DefaultValue, selector } from "recoil";
import { localStorageEffect } from "@/storage/storage";

interface loginProps {
  id: string;
  name: string;
  createDate: string;
  isLogin: boolean;
}

const loginState = atom<loginProps>({
  key: "loginState",
  default: {
    id: "",
    name: "",
    createDate: "",
    isLogin: false,
  },
  effects_UNSTABLE: [localStorageEffect("loginState", "local")],
});

export const loginSelector = selector({
  key: "loginSelector",
  get: ({ get }) => {
    const values = get(loginState);
    return values;
  },
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(loginState);
    } else {
      set(loginState, newValue);
    }
  },
});
