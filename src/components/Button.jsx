import React from "react";

const Button = (props) => {
  const { text, onClick, type } = props;

  const clickPass = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={clickPass}
      className='hover:-translate-y-1 hover:scale-110 transition duration-150 ease-in-out bg-button-dark rounded-lg hover:font-bold text-slate-200 hover:bg-button-light content-fit p-2 font-mono'
    >
      {text}
    </button>
  );
};

export default Button;
