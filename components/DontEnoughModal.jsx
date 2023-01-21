import React from 'react'

const DontEnoughModal = ({setShowDontEnough}) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1005] outline-none focus:outline-none  ">
        <div className="md:w-[399px] w-[90%] h-[184px] bg-white rounded-lg p-6 ">
          <p className="font-bold text-2xl leading-8">
            You dont have enough money
          </p>

          <button
            className="w-full bg-red text-white tex-2xl font-bold mt-6 rounded-lg h-12"
            onClick={() => setShowDontEnough(false)}
          >
            Back
          </button>
        </div>
      </div>
      <div className="opacity-70 fixed inset-0 z-[1003] bg-black"></div>
    </>
  )
}

export default DontEnoughModal
