import React from 'react'

const ShowBuyModal = ({handleBuy,setShowBuy,showBuy}) => {
  return (
    <>
     <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1003] outline-none focus:outline-none  ">
            <div className="md:w-[399px] w-[90%] h-[239px] bg-white rounded-lg p-6 ">
              <p className="font-bold text-2xl leading-8">
                Would you like to buy the card for
              </p>
              <p className="text-center text-red font-bold text-2xl leading-8">
                € {showBuy.price}.00
              </p>
              <button
                className="w-full bg-red text-white tex-2xl font-bold mt-6 rounded-lg h-12"
                onClick={() => handleBuy(showBuy)}
              >
                Buy
              </button>
              <button
                className="w-full bg-white text-red tex-2xl font-bold  rounded-lg h-12"
                onClick={() => setShowBuy({ ...showBuy, show: false })}
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-[1002] bg-black"></div>
    </>
  )
}

export default ShowBuyModal
