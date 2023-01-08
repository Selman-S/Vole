import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import uparrow from '../public/images/uparrow.svg'
import downarrow from '../public/images/downarrow.svg'
import nextIcon from '../public/images/next.svg'

const Market = ({
  marketData,
  setShowBuy,
  filteredMyCards,
  setFilteredMyCards,
  handleDetail,
}) => {
  const [openType, setOpenType] = useState(true)
  const [openPos, setOpenPos] = useState(true)
  const [openPrice, setOpenPrice] = useState(true)
  const [priceChange, setPriceChange] = useState(50)

  const [currentPage, setCurrentPage] = useState(1)

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(filteredMyCards.length / 10); i++) {
    pageNumbers.push(i)
  }
  console.log(pageNumbers)

  useEffect(() => {
    setFilteredMyCards(marketData)
  }, [marketData])

  const filterMyCards = (key, value) => {
    let filteredCards = marketData.filter(card => card[key] === value)

    setFilteredMyCards(filteredCards)
  }
  const toggleType = () => {
    setOpenType(!openType)
  }
  const togglePos = () => {
    setOpenPos(!openPos)
  }
  const togglePrice = () => {
    setOpenPrice(!openPrice)
  }
  const HandlePriceGhange = value => {
    setPriceChange(value)
    setFilteredMyCards(marketData.filter(card => card.price <= value))
  }

  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  console.log(filteredMyCards)
  return (
    <section id="market" className=" bg-market-grey my-[122px] mx-10 p-6 ">
      <h1
        className="font-bold text-[18px] leading-[30px] cursor-pointer"
        onClick={() => setFilteredMyCards(marketData)}
      >
        MARKET
      </h1>
      <div className="flex">
        <div className="bg-white min-w-[200px] p-6 rounded-lg mt-6 max-h-[450px]">
          <div
            className={
              openType
                ? 'border-b border-market-hr pb-4'
                : 'border-b border-market-hr pb-4 overflow-hidden h-10'
            }
          >
            <div className="flex justify-between leading-6  ">
              <p>Card Type</p>
              {openType ? (
                <Image
                  src={uparrow}
                  alt="up arrow"
                  className="cursor-pointer"
                  onClick={() => toggleType()}
                />
              ) : (
                <Image
                  src={downarrow}
                  alt="down arrow"
                  className="cursor-pointer"
                  onClick={() => toggleType()}
                />
              )}
            </div>
            <div className="text-market-text-grey mt-4">
              <p
                onClick={() => filterMyCards('cardType', 'Gold')}
                className="cursor-pointer"
              >
                Gold{' '}
                <span>
                  ({marketData?.filter(card => card.cardType === 'Gold').length}
                  )
                </span>
              </p>
              <p
                onClick={() => filterMyCards('cardType', 'Silver')}
                className="cursor-pointer"
              >
                Silver{' '}
                <span>
                  (
                  {
                    marketData?.filter(card => card.cardType === 'Silver')
                      .length
                  }
                  )
                </span>
              </p>
              <p
                onClick={() => filterMyCards('cardType', 'Bronze')}
                className="cursor-pointer"
              >
                Bronze{' '}
                <span>
                  (
                  {
                    marketData?.filter(card => card.cardType === 'Bronze')
                      .length
                  }
                  )
                </span>
              </p>
            </div>
          </div>
          <div
            className={
              openPos
                ? ' mt-4 border-b border-market-hr pb-4'
                : ' mt-4 border-b border-market-hr pb-4 overflow-hidden h-10'
            }
          >
            <div className="flex justify-between leading-6  ">
              <p>Position</p>
              {openPos ? (
                <Image
                  src={uparrow}
                  alt="up arrow"
                  className="cursor-pointer"
                  onClick={() => togglePos()}
                />
              ) : (
                <Image
                  src={downarrow}
                  alt="down arrow"
                  className="cursor-pointer"
                  onClick={() => togglePos()}
                />
              )}
            </div>
            <div className="text-market-text-grey mt-4">
              <p
                onClick={() => filterMyCards('position', 'Goalkeeper')}
                className="cursor-pointer"
              >
                Goalkeeper{' '}
                <span>
                  (
                  {
                    marketData?.filter(card => card.position === 'Goalkeeper')
                      .length
                  }
                  )
                </span>
              </p>
              <p
                onClick={() => filterMyCards('position', 'Defender')}
                className="cursor-pointer"
              >
                Defender{' '}
                <span>
                  (
                  {
                    marketData?.filter(card => card.position === 'Defender')
                      .length
                  }
                  )
                </span>
              </p>
              <p
                onClick={() => filterMyCards('position', 'Midfielder')}
                className="cursor-pointer"
              >
                Midfielder{' '}
                <span>
                  (
                  {
                    marketData?.filter(card => card.position === 'Midfielder')
                      .length
                  }
                  )
                </span>
              </p>
              <p
                onClick={() => filterMyCards('position', 'Forward')}
                className="cursor-pointer"
              >
                Forward{' '}
                <span>
                  (
                  {
                    marketData?.filter(card => card.position === 'Forward')
                      .length
                  }
                  )
                </span>
              </p>
            </div>
          </div>
          <div className={openPrice ? 'mt-4' : 'mt-4 overflow-hidden h-10'}>
            <div className="flex justify-between leading-6  ">
              <p>Price</p>
              {openPrice ? (
                <Image
                  src={uparrow}
                  alt="up arrow"
                  className="cursor-pointer"
                  onClick={() => togglePrice()}
                />
              ) : (
                <Image
                  src={downarrow}
                  alt="down arrow"
                  className="cursor-pointer"
                  onClick={() => togglePrice()}
                />
              )}
            </div>
            <div className="text-market-text-grey mt-4">
              <div className="flex justify-between">
                <label className="text-xs font-bold leading-4 text-red">
                  € 0.00
                </label>
                <label className="text-xs font-bold leading-4 text-red">
                  € {priceChange}.00
                </label>
              </div>
              <input
                id="default-range"
                type="range"
                min="0"
                max="100"
                value={priceChange}
                onChange={e => HandlePriceGhange(e.target.value)}
                className="w-full bg-red h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                step="1"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-5">
            {filteredMyCards?.map((card, i) => {
              const start = (currentPage - 1) * 10
              const end = start + 10

              if (i <= end && i > start) {
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
                      onClick={() => handleDetail(card.id)}
                    />
                    <div className="flex justify-between px-4 py-2 items-center">
                      <p className=" font-bold leading-6">€ {card.price}.00</p>
                      <button
                        className="border hover:bg-red hover:text-white px-6 py-1 text-red font-semibold border-red rounded-lg"
                        onClick={() =>
                          setShowBuy({
                            show: true,
                            price: card.price,
                            cardId: card.id,
                            card: card,
                          })
                        }
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                )
              }
            })}
          </div>
          <div className="flex justify-center mt-6 w-full">
            {/* pagination */}

            <div className="flex items-center">
              <div className="flex items-center gap-2">
                {pageNumbers.map(number => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={
                      currentPage == number
                        ? ' bg-red text-lg leading-[18px] text-white  w-8 h-8   rounded-[50%]'
                        : ' bg-btn-grey text-lg leading-[18px] text-white  w-8 h-8   rounded-[50%]'
                    }
                  >
                    {number}
                  </button>
                ))}

                <Image
                  className="cursor-pointer"
                  width={20}
                  height={20}
                  src={nextIcon}
                  alt="next icon"
                  onClick={() =>
                    currentPage == 4 ? paginate(1) : paginate(currentPage + 1)
                  }
                />

                {/* pagination */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Market
