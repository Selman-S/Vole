import React from 'react'
import Image from 'next/image'
import close from '../public/images/close.svg'

const ShowDetailModal = ({detailData, showDetail,setShowDetail,setShowSell,setShowBuy}) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none  ">
        <div className="md:w-[914px] w-[90%] md:h-[860px] h-[90%] bg-white rounded-lg ">
          <div
            className="relative md:h-[382px]  rounded-t-lg flex justify-center items-center "
            style={{
              background: 'linear-gradient(180deg, #A3873C 0%, #E3D294 100%)',
            }}
          >
            <Image
              src={detailData?.photoUrl}
              width={198}
              height={286}
              alt={detailData?.name}
            />
            <div
              className="top-6 right-6 rounded-lg absolute w-12 h-12 p-4 items-center bg-black opacity-30 cursor-pointer"
              onClick={() => setShowDetail({ ...showDetail, show: false })}
            >
              <Image src={close} width={16} height={16} alt="close icon" />
            </div>
          </div>
          <div className="md:p-6 p-2">
            <div className="md:flex justify-between items-center">
              <div>
                <p className="text-center text-red font-bold md:text-2xl text-xl ">
                  {detailData?.name}
                </p>
                <p className="text-lg leading-[30px] text-center md:text-left">{detailData?.position}</p>
              </div>
              <div className="p-6  bg-market-grey md:w-[421px] w-[90%] mx-auto md:mx-0 rounded-lg md:h-24">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-2xl w-[171px]">
                    {' '}
                    € {detailData?.price}.00
                  </p>
                  {showDetail.type == 'Buy' ? (
                    <button
                      className=" bg-red w-[174px] text-white tex-2xl font-bold  rounded-lg h-12"
                      onClick={() =>
                        setShowBuy({
                          show: true,
                          price: detailData.price,
                          cardId: detailData.id,
                          card: detailData,
                        })
                      }
                    >
                      {showDetail.type}
                    </button>
                  ) : (
                    <button
                      className=" bg-red w-[174px] text-white tex-2xl font-bold  rounded-lg h-12"
                      onClick={() =>
                        setShowSell({
                          show: true,
                          price: detailData.price,
                          cardId: detailData.id,
                        })
                      }
                    >
                      {showDetail.type}
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="md:p-6 p-2 bg-market-grey my-6 md:mx-0 mx-2 rounded-lg">
              <p className="font-bold leading-[30px] text-lg ">ATTRIBUTES</p>
              <div className="flex mt-6 gap-[22px] md:flex-nowrap flex-wrap">
                <div className="md:p-6 p-4 bg-white rounded-lg md:w-[118px] w-28 md:h-24 h-18">
                  <p className="text-base md:leading-[30px] leading-8">Pace</p>
                  <p>
                    <span className="font-bold md:text-2xl text-lg">
                      {detailData?.attributes?.pace}
                    </span>
                    <span className="text-attribute md:text-[20px] text-lg">/100</span>
                  </p>
                </div>
                <div className="md:p-6 p-4 bg-white rounded-lg md:w-[118px] w-28 md:h-24 h-18 ">
                  <p className="text-base md:leading-[30px] leading-8">Shooting</p>
                  <p>
                    <span className="font-bold md:text-2xl text-lg">
                      {detailData?.attributes?.shooting}
                    </span>
                    <span className="text-attribute md:text-[20px] text-lg">/100</span>
                  </p>
                </div>
                <div className="md:p-6 p-4 bg-white rounded-lg md:w-[118px] w-28 md:h-24 h-18">
                  <p className="text-base md:leading-[30px] leading-8">Passing</p>
                  <p>
                    <span className="font-bold md:text-2xl text-lg">
                      {detailData?.attributes?.passing}
                    </span>
                    <span className="text-attribute md:text-[20px] text-lg">/100</span>
                  </p>
                </div>
                <div className="md:p-6 p-4 bg-white rounded-lg md:w-[118px] w-28 md:h-24 h-18 ">
                  <p className="text-base md:leading-[30px] leading-8">Dribbling</p>
                  <p>
                    <span className="font-bold md:text-2xl text-lg">
                      {detailData?.attributes?.dribbling}
                    </span>
                    <span className="text-attribute md:text-[20px] text-lg">/100</span>
                  </p>
                </div>
                <div className="md:p-6 p-4 bg-white rounded-lg md:w-[118px] w-28 md:h-24 h-18 ">
                  <p className="text-base md:leading-[30px] leading-8">Defending</p>
                  <p>
                    <span className="font-bold md:text-2xl text-lg">
                      {detailData?.attributes?.defending}
                    </span>
                    <span className="text-attribute md:text-[20px] text-lg">/100</span>
                  </p>
                </div>
                <div className="md:p-6 p-4 bg-white rounded-lg md:w-[118px] w-28 md:h-24 h-18 ">
                  <p className="text-base md:leading-[30px] leading-8">Physical</p>
                  <p>
                    <span className="font-bold md:text-2xl text-lg">
                      {detailData?.attributes?.physical}
                    </span>
                    <span className="text-attribute md:text-[20px] text-lg">/100</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="md:flex md:gap-6 ">
              <div className="bg-market-grey md:p-6 p-4 md:text-left text-center md:mb-0 mb-6 md:w-[421px] md:h-24 rounded-lg ">
                <p className="text-lg leading-[30px]">Team</p>
                <p className="text-2xl font-bold">{detailData?.team}</p>
              </div>
              <div className="bg-market-grey md:p-6 p-4 md:text-left text-center md:mb-0 mb-6 md:w-[421px] md:h-24 rounded-lg ">
                <p className="text-lg leading-[30px]">Card Type</p>
                <p className="text-2xl font-bold">{detailData?.cardType}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-70 fixed inset-0 z-[1000] bg-black"></div>
    </>
  )
}

export default ShowDetailModal
