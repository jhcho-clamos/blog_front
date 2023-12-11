import { useState } from "react";

const UseInput = (initValue: any) => {
  const [value, setValue] = useState<any>(initValue || "");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return { value, setValue, onChange };
};
export default UseInput;
