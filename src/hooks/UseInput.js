import { useState } from "react";
import { useToast } from "react-toastify";

const UseInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onreset = () => {
    console.log("pasa x aca");
    setValue("");
  };

  return { value, onChange, onreset };
};

export default UseInput;