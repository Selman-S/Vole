import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div
                key={card.name}
                className="bg-white rounded-lg mt-6 ml-6 h-[346px] "
              >
                <Image
                  className="cursor-pointer"
                  width={198}
                  height={286}
                  src={card.photoUrl}
                  alt={card.name}
                />
                <div className="flex justify-between px-4 py-2 items-center">
                  <p className=" font-bold leading-6">€ {card.price}.00</p>
                  <button className="border hover:bg-red hover:text-white px-6 py-1 text-red font-semibold border-red rounded-lg">
                    Buy
                  </button>
                </div>
              </div>
  )
}

export default Card