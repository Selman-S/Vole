import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import uparrow from '../public/images/uparrow.svg'
import downarrow from '../public/images/downarrow.svg'

const MyCards = ({
  myCards,
  setShowSell,
  filteredMyCards,
  HandlePriceGhange,
  filterMyCards,
  priceChange,
  handleDetail,
  setFilteredMyCards


}) => {
  const [openType, setOpenType] = useState(true)
  const [openPos, setOpenPos] = useState(true)
  const [openPrice, setOpenPrice] = useState(true)
  

  const toggleType = () => {
    setOpenType(!openType)
  }
  const togglePos = () => {
    setOpenPos(!openPos)
  }
  const togglePrice = () => {
    setOpenPrice(!openPrice)
  }



  
  return (
    <section id="mycards" className=" bg-market-grey md:my-[122px] my-[32px] md:mx-10 mx-4 md:p-6 p-2 ">
      <h1 className="font-bold md:text-[18px] text-base md:leading-[30px] cursor-pointer" onClick={()=>setFilteredMyCards(myCards)}>
        MY CARDS
      </h1>
      <div className="md:flex max-h-fit">
        <div className="bg-white md:w-[200px] md:block grid grid-cols-3 md:p-6 p-2 rounded-lg md:mt-6 mt-2">
          <div
            className={
              openType
                ? 'border-b border-market-hr md:pb-4 pb-2'
                : 'border-b border-market-hr pb-4 overflow-hidden h-10'
            }
          >
            <div className="flex justify-between leading-6 md:mr-0  mr-4 ">
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
                  ({myCards?.filter(card => card.cardType === 'Gold').length})
                </span>
              </p>
              <p
                onClick={() => filterMyCards('cardType', 'Silver')}
                className="cursor-pointer"
              >
                Silver{' '}
                <span>
                  ({myCards?.filter(card => card.cardType === 'Silver').length})
                </span>
              </p>
              <p
                onClick={() => filterMyCards('cardType', 'Bronze')}
                className="cursor-pointer"
              >
                Bronze{' '}
                <span>
                  ({myCards?.filter(card => card.cardType === 'Bronze').length})
                </span>
              </p>
            </div>
          </div>
          <div
            className={
              openPos
                ? ' md:mt-4 border-b border-market-hr  md:pb-4 pb-2'
                : ' md:mt-4 border-b border-market-hr pb-4 overflow-hidden h-10'
            }
          >
            <div className="flex justify-between leading-6  md:mr-0  mr-4  ">
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
                    myCards.filter(card => card.position === 'Goalkeeper')
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
                  {myCards?.filter(card => card.position === 'Defender').length}
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
                    myCards?.filter(card => card.position === 'Midfielder')
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
                  ({myCards?.filter(card => card.position === 'Forward').length}
                  )
                </span>
              </p>
            </div>
          </div>
          <div className={openPrice ? 'md:mt-4 md:border-b-0 border-b border-market-hr' : 'md:mt-4 overflow-hidden  md:border-b-0 h-10 border-b border-market-hr'}>
            <div className="flex justify-between leading-6   md:mr-0  mr-4 ">
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

            <div className="text-market-text-grey mt-4 px-2 md:px-0">
              <div className="flex justify-between">
                <label
                  className="text-xs font-bold leading-4 text-red"
                  htmlFor=""
                >
                  € 0.00
                </label>
                <label
                  className="text-xs font-bold leading-4 text-red"
                  htmlFor=""
                >
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
                className="w-full  bg-red h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                step="1"
              />
            </div>
          </div>
        </div>
        <div className="sm:flex  sm:flex-wrap pb-6 md:pb-0">
          {filteredMyCards?.map(card => (
            <div
              key={card.name}
              className="bg-white rounded-lg flex flex-col items-center mt-6 md:ml-6 mx-4 md:mx-0 md:h-[346px] h-[380px] "
            >
              <Image
                className="cursor-pointer"
                width={198}
                height={286}
                src={card.photoUrl}
                alt={card.name}
                onClick={() => handleDetail(card.id, 'Sell')}
              />
              <div className="flex w-full md:justify-between justify-around px-4  py-2 items-center md:mt-0 mt-4">
                <p className=" font-bold leading-6">€ {card.price}.00</p>
                <button
                  className="border hover:bg-red hover:text-white px-6 py-1 text-red font-semibold border-red rounded-lg"
                  onClick={() =>
                    setShowSell({
                      show: true,
                      price: card.price,
                      cardId: card.id,
                    })
                  }
                >
                  Sell
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyCards
