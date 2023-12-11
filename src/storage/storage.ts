import { DefaultValue } from "recoil";

interface storageType {
  setSelf: Function;
  onSet: Function;
}
export const localStorageEffect =
  (key: string, storageType: "local" | "session") =>
  ({ setSelf, onSet }: storageType) => {
    if (typeof window == "undefined") return;
    const storage = storageType === "local" ? localStorage : sessionStorage;
    // const savedValue = await AsyncStorage.getItem(key);

    // if (savedValue != null) {
    //   setSelf(JSON.parse(savedValue));
    // }
    setSelf(() => {
      if (!storage.getItem(key) || storage.getItem(key) === null) {
        return new DefaultValue();
      } else {
        return JSON.parse(storage.getItem(key) || "");
      }
    });

    onSet((newValue: any) => {
      if (newValue instanceof DefaultValue) {
        storage.removeItem(key);
      } else {
        storage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
