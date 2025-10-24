import * as React from "react";

type SearchProps = {
  className?: string;
};

export const Search = ({ className }: SearchProps) => (
  <svg
    width="1.875rem"
    height="1.875rem"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <title>{"Search Icon"}</title>
    <path
      d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
      style={{
        fill: "none",
        stroke: "currentColor",  
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
    <line
      x1={338.29}
      y1={338.29}
      x2={448}
      y2={448}
      style={{
        fill: "none",
        stroke: "currentColor",  // 👈 same here
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
  </svg>
);

export default Search;
