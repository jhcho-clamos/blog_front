import { atom, DefaultValue, selector } from "recoil";
import { localStorageEffect } from "@/storage/storage";

interface loginProps {
  id: string;
  name: string;
  createdate: string;
}

const loginState = atom<loginProps | null>({
  key: "loginState",
  default: null,
  effects_UNSTABLE: [localStorageEffect("loginState", "local")],
});

export const loginSelector = selector({
  key: "loginSelector",
  get: ({ get }) => get(loginState),
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(loginState);
    } else {
      set(loginState, newValue);
    }
  },
});
