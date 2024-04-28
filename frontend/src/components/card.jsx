import React from 'react'

function CardOne() {
    const data =3000
  return (
    <div className="relative h-[100px] w-[150px] rounded-md">
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold  text-white">${data}</h1>
        <p className="mt-2 text-sm text-gray-300">
        </p>
      </div>
      
    </div>

    
    
  )
}
export default CardOne