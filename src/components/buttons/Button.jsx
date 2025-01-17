import React from "react";

function Button({ text }) {
  return (
    <button className="px-8 py-5 bg-white text-sm font-semibold text-black rounded-2xl">
      {text}
    </button>
  );
}

export default Button;
