import React from 'react'

function OutLineButton({ text }) {
  return (
    <button className="px-8 py-5 bg-black border-[0.1px] font-semibold border-gray-500 text-sm f text-white rounded-2xl">
      {text}
    </button>
  );
}

export default OutLineButton