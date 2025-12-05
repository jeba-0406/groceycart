import React from 'react'
type ButtonAtomProps={
  name:String;
}
export const ButtonAtom = ({
  label = "Add to Cart",
  width = "10.5625rem",
  height = "2.1875rem",
  textColor = "#02B290",
  borderColor = "#02B290",
  onClick = () => {}
}{name}:ButtonAtomProps) => {
  return (
    <button className='w-[10.5625rem] h-[2.1875rem] border-[1px] text-[#02B290] text-[.875rem] border-[#02B290] rounded-[5px]  font-bold'>Add to Cart</button>
  )
}
