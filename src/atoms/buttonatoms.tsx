"use client"
import React from 'react'
type ButtonProps={
  name:String;
  classname?:String|undefined;
};
export const ButtonComponent = ({name,classname}:ButtonProps) => {
  return (
      <span className={classname}>{name}</span>
  )
}
