"use client"
import React from 'react'
type ButtonProps={
  name:String;
};
export const ButtonComponent = ({name}:ButtonProps) => {
  return (
      <span>{name}</span>
  )
}
