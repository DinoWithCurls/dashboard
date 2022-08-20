import { useState } from "react";
import { EyeOnIcon, EyeOffIcon } from "../../icons";
const ProtectedInput = ({ onInput }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleChange = (event) => {
    onInput(event.target.value);
  };
  return (
    <div className="inline-flex items-center bg-lightgray p-3 rounded-xl w-full">
      <input
        type={passwordShown ? "text" : "password"}
        placeholder="Enter the password"
        className="outline-none bg-lightgray w-full font-semibold ml-2"
        onChange={handleChange}
      />
      <button onClick={togglePassword} className="outline-none">
        {passwordShown ? (
          <EyeOnIcon />
        ) : (
          <EyeOffIcon />
        )}
      </button>
    </div>
  );
};

export default ProtectedInput;
