import React from "react";

const Button = ({ name, width, onClick ,type}) => {
  return (
    <button
      type={type}
      className={`text-white bg-secondary  focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2  mt-3 focus:outline-none w-[${width}] h-12`}
      onClick={onClick}
   >
      {name}
    </button>
  );
};

export default Button;
