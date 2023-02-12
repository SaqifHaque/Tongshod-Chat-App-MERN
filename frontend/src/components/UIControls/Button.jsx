import React from 'react'

const Button = ({customColor, onButtonClick, title}) => {
  return (
    <>
         <button onClick={onButtonClick} className={ `${customColor ? customColor : ' bg-blue-600 hover:bg-blue-700'} py-2 px-4 rounded-full text-white shadow-2xl`}>{title}</button>
    </>
  )
}

export default Button