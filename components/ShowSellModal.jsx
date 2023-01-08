import React from 'react'

const ShowSellModal = ({handleSell,showSell,setShowSell}) => {
  return (
    <>
       <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none  ">
            <div className="w-[399px] h-[239px] bg-white rounded-lg p-6 ">
              <p className="font-bold text-2xl leading-8">
                Would you like to sell the card for
              </p>
              <p className="text-center text-red font-bold text-2xl leading-8">
                € {showSell.price}.00
              </p>
              <button
                className="w-full bg-red text-white tex-2xl font-bold mt-6 rounded-lg h-12"
                onClick={() => handleSell(showSell)}
              >
                Sell
              </button>
              <button
                className="w-full bg-white text-red tex-2xl font-bold  rounded-lg h-12"
                onClick={() => setShowSell({ ...showSell, show: false })}
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-[1000] bg-black"></div>
    </>
  )
}

export default ShowSellModal
