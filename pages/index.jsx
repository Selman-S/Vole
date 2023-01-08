import Header from '../components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from '../components/Carousel'
import close from '../public/images/close.svg'
import Image from 'next/image'
import MyCards from '../components/MyCards'
import Market from '../components/Market'
import DontEnoughModal from '../components/DontEnoughModal'
import ShowBuyModal from '../components/ShowBuyModal'
import ShowSellModal from '../components/ShowSellModal'

export default function Home() {
  const [marketData, setMarketData] = useState([])
  const [budget, setBudget] = useState(0)
  const [myCards, setMyCards] = useState([])
  const [priceChange, setPriceChange] = useState(50)
  const [filteredMarket, setFilteredMarket] = useState([])

  const [showSell, setShowSell] = useState({ show: false, price: 0, cardId: 0 })
  const [showBuy, setShowBuy] = useState({
    show: false,
    price: 0,
    cardId: 0,
    card: {},
  })
  const [showDontEnough, setShowDontEnough] = useState(false)
  const [showDetail, setShowDetail] = useState({
    show: false,
    price: 0,
    cardId: 0,
    card: {},
  })
  const [detailData, setDetailData] = useState({})
  const [filteredMyCards, setFilteredMyCards] = useState()

  const getMarketData = async () => {
    try {
      let data = await axios.get('http://challenge.vole.io/cards/market')

      setMarketData(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setFilteredMyCards(myCards)
  }, [myCards])

  const getBudget = async () => {
    try {
      let data = await axios.get('http://challenge.vole.io/budget')

      setBudget(data.data.budget)
    } catch (error) {
      console.log(error)
    }
  }

  const getMyCards = async () => {
    try {
      let data = await axios.get('http://challenge.vole.io/cards/mycards')

      setMyCards(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMarketData()
    getBudget()
    getMyCards()
    setFilteredMyCards(myCards)
  }, [])

  console.log(showBuy)

  const filterMyCards = (key, value) => {
    let filteredCards = myCards.filter(card => card[key] === value)

    setFilteredMyCards(filteredCards)
  }

  const HandlePriceGhange = value => {
    setPriceChange(value)
    setFilteredMyCards(myCards.filter(card => card.price <= value))
  }

  const handleSell = showSell => {
    console.log(showSell)
    setFilteredMyCards(
      filteredMyCards.filter(card => card.id !== showSell.cardId)
    )
    setShowSell({ ...showSell, show: false })
    setBudget(budget + showSell.price)
  }
  const handleBuy = showBuy => {
    if (budget < showBuy.price) {
      setShowBuy({ ...showBuy, show: false })
      setShowDontEnough(true)
      return
    }
    setFilteredMarket(filteredMarket.filter(card => card.id !== showBuy.cardId))
    setShowBuy({ ...showBuy, show: false })
    setBudget(budget - showBuy.price)
    setFilteredMyCards([...filteredMyCards, showBuy.card])
  }
  const getDetail = async id => {
    try {
      let data = await axios.get(`http://challenge.vole.io/cards/${id}`)

      setDetailData(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDetail = showDetail => {
    getDetail(showDetail)
    setShowDetail({ ...showDetail, show: true })
  }
  console.log(detailData)
  return (
    <div>
      <Header budget={budget} />
      {/* carousel */}
      <Carousel />

      <MyCards
        myCards={myCards}
        getMyCards={getMyCards}
        setShowSell={setShowSell}
        filteredMyCards={filteredMyCards}
        HandlePriceGhange={HandlePriceGhange}
        filterMyCards={filterMyCards}
        priceChange={priceChange}
        handleDetail={handleDetail}
      />
      <Market
        marketData={marketData}
        getMarketData={getMarketData}
        setShowBuy={setShowBuy}
        filteredMyCards={filteredMarket}
        setFilteredMyCards={setFilteredMarket}
        handleDetail={handleDetail}
      />

      {showSell.show ? (
        <>
          <ShowSellModal
            setShowSell={setShowSell}
            handleSell={handleSell}
            showSell={showSell}
          />
        </>
      ) : null}
      {showBuy.show ? (
        <>
          <ShowBuyModal
            handleBuy={handleBuy}
            setShowBuy={setShowBuy}
            showBuy={showBuy}
          />
        </>
      ) : null}
      {showDontEnough ? (
        <>
          <DontEnoughModal setShowDontEnough={setShowDontEnough} />
        </>
      ) : null}
      {showDetail.show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none  ">
            <div className="w-[914px] h-[860px] bg-white rounded-lg ">
              <div
                className="relative h-[382px]  rounded-t-lg flex justify-center items-center "
                style={{
                  background:
                    'linear-gradient(180deg, #A3873C 0%, #E3D294 100%)',
                }}
              >
                <Image
                  src={detailData.photoUrl}
                  width={198}
                  height={286}
                  alt={detailData.name}
                />
                <div className="top-6 right-6 rounded-lg absolute w-12 h-12 p-4 items-center bg-black opacity-30 cursor-pointer" onClick={()=> setShowDetail({ ...showDetail, show: false })}>
                  <Image src={close} width={16} height={16} alt="close icon" />
                </div>
              </div>
              <div>

              <p className="text-center text-red font-bold text-2xl leading-8">
                {detailData.name}
              </p>
              div
              </div>
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
          <div className="opacity-70 fixed inset-0 z-[1000] bg-black"></div>
        </>
      ) : null}
    </div>
  )
}
