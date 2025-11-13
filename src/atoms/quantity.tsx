'use client'

import React, { useState } from 'react'
import UparrowAtoms from '../../public/uparrow'
import DownArrowAtoms from '../../public/Downarrow'
type QuantityAtomProps {
  min:String;
}

export const QuantityAtom = ({ min = 1, max = 10, initial = 1, onChange }) => {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < max) {
      const newCount = count + 1
      setCount(newCount)
      onChange?.(newCount)
    }
  }

  const decrement = () => {
    if (count > min) {
      const newCount = count - 1
      setCount(newCount)
      onChange?.(newCount)
    }
  }

  return (
    <div className="flex items-center justify-between w-[60px] h-[32px] border rounded-lg bg-gray-100 shadow-sm overflow-hidden">
      {/* Count display */}
      <p className="text-center font-semibold w-[30px] text-[16px] select-none">
        {count}
      </p>

      {/* Arrow buttons inside the same box */}
      <div className="flex flex-col items-center justify-center border-l bg-white">
        <button
          onClick={increment}
          className={`w-[20px] h-[14px] flex items-center justify-center transition hover:scale-110 ${
            count === max ? 'opacity-40 cursor-not-allowed' : ''
          }`}
          disabled={count === max}
        >
          <UparrowAtoms />
        </button>

        <button
          onClick={decrement}
          className={`w-[20px] h-[14px] flex items-center justify-center transition hover:scale-110 ${
            count === min ? 'opacity-40 cursor-not-allowed' : ''
          }`}
          disabled={count === min}
        >
          <DownArrowAtoms />
        </button>
      </div>
    </div>
  )
}
