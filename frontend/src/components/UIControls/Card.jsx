import React from 'react'

const Card = ({children, title}) => {
  return (
    <div className="flex flex-1 justify-center items-center shadow-2xl w-1/2 my-28 mx-auto bg-gray-800 rounded-lg">
            <div className="w-2/3 flex flex-col items-center justify-center gap-y-8 text-gray-200 font-sans">
                <span className="text-2xl">{title}</span>
                {children}
            </div>
        </div>
  )
}

export default Card
