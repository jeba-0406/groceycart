import React from 'react'

export const ButtonAtom = ({
  label = "Add to Cart",
  width = "10.5625rem",
  height = "2.1875rem",
  textColor = "#02B290",
  borderColor = "#02B290",
  onClick = () => {}
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        font-bold 
        rounded-[5px] 
        text-[.875rem]
        border-[1px]
      `}
      style={{
        width,
        height,
        color: textColor,
        borderColor: borderColor
      }}
    >
      {label}
    </button>
  );
};

