import React from 'react'
import Image from 'next/image'
import close from '../public/images/close.svg'

const ShowDetailModal = ({detailData, showDetail,setShowDetail,setShowSell,setShowBuy}) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none  ">
        <div className="w-[914px] h-[860px] bg-white rounded-lg ">
          <div
            className="relative h-[382px]  rounded-t-lg flex justify-center items-center "
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
          <div className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-center text-red font-bold text-2xl ">
                  {detailData?.name}
                </p>
                <p className="text-lg leading-[30px]">{detailData?.position}</p>
              </div>
              <div className="p-6 bg-market-grey w-[421px] rounded-lg h-24">
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
            <div className="p-6 bg-market-grey my-6 rounded-lg">
              <p className="font-bold leading-[30px] text-lg ">ATTRIBUTES</p>
              <div className="flex mt-6 gap-[22px]">
                <div className="p-6 bg-white rounded-lg w-[118px] h-24 ">
                  <p className="text-lg leading-[30px]">Pace</p>
                  <p>
                    <span className="font-bold text-2xl">
                      {detailData?.attributes?.pace}
                    </span>
                    <span className="text-attribute text-[20px]">/100</span>
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg w-[118px] h-24 ">
                  <p className="text-lg leading-[30px]">Shooting</p>
                  <p>
                    <span className="font-bold text-2xl">
                      {detailData?.attributes?.shooting}
                    </span>
                    <span className="text-attribute text-[20px]">/100</span>
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg w-[118px] h-24 ">
                  <p className="text-lg leading-[30px]">Passing</p>
                  <p>
                    <span className="font-bold text-2xl">
                      {detailData?.attributes?.passing}
                    </span>
                    <span className="text-attribute text-[20px]">/100</span>
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg w-[118px] h-24 ">
                  <p className="text-lg leading-[30px]">Dribbling</p>
                  <p>
                    <span className="font-bold text-2xl">
                      {detailData?.attributes?.dribbling}
                    </span>
                    <span className="text-attribute text-[20px]">/100</span>
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg w-[118px] h-24 ">
                  <p className="text-lg leading-[30px]">Defending</p>
                  <p>
                    <span className="font-bold text-2xl">
                      {detailData?.attributes?.defending}
                    </span>
                    <span className="text-attribute text-[20px]">/100</span>
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg w-[118px] h-24 ">
                  <p className="text-lg leading-[30px]">Physical</p>
                  <p>
                    <span className="font-bold text-2xl">
                      {detailData?.attributes?.physical}
                    </span>
                    <span className="text-attribute text-[20px]">/100</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-market-grey p-6 w-[421px] h-24 rounded-lg ">
                <p className="text-lg leading-[30px]">Team</p>
                <p className="text-2xl font-bold">{detailData?.team}</p>
              </div>
              <div className="bg-market-grey p-6 w-[421px] h-24 rounded-lg ">
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