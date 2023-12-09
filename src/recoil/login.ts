import { atom, DefaultValue, selector } from "recoil";

interface loginProps {
  id: string;
  name: string;
  createdate: string;
}

const loginState = atom<loginProps | null>({
  key: "loginState",
  default: null,
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
