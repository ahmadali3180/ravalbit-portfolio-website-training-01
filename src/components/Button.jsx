import React from "react";

const Button = ({ title, type, buttonType, href, onClick, id }) => {
  let className = "";
  if (type === "primary") {
    className =
      "xxs:px-4 xs:px-6 py-2 text-center font-semibold rounded-full text-text-primary shadow-black shadow-md hover:shadow-none duration-300 bg-primary";
  } else {
    className =
      "xxs:px-4 xs:px-6 py-2 text-center font-semibold bg-secondary rounded-full text-text-primary shadow-md shadow-primary hover:shadow-none duration-300";
  }

  return (
    <button id={id} className={className} type={buttonType} onClick={onClick}>
      <a href={href}>{title}</a>
    </button>
  );
};

export default Button;
