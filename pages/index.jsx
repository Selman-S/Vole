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
import ShowDetailModal from '../components/ShowDetailModal'

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
    type: '',
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
    setFilteredMyCards(myCards)
    getBudget()
    getMyCards()
    getMarketData()
  }, [])

  const filterMyCards = (key, value) => {
    let filteredCards = myCards.filter(card => card[key] === value)

    setFilteredMyCards(filteredCards)
  }

  const HandlePriceGhange = value => {
    setPriceChange(value)
    setFilteredMyCards(myCards.filter(card => card.price <= value))
  }

  const handleSell = showSell => {
    setFilteredMyCards(
      filteredMyCards.filter(card => card.id !== showSell.cardId)
    )
    setShowDetail({ ...showDetail, show: false, type: 'type' })
    setShowSell({ ...showSell, show: false })
    setBudget(budget + showSell.price)
  }

  const handleBuy = showBuy => {
    if (budget < showBuy.price) {
      setShowBuy({ ...showBuy, show: false })
      setShowDontEnough(true)
      return
    }
    setShowDetail({ ...showDetail, show: false, type: 'type' })
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

  const handleDetail = (showDetail, type) => {
    getDetail(showDetail)
    setShowDetail({ ...showDetail, show: true, type: type })
  }

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
      {showDetail.show && detailData ? (
        <ShowDetailModal
          detailData={detailData}
          showDetail={showDetail}
          setShowSell={setShowSell}
          setShowDetail={setShowDetail}
          setShowBuy={setShowBuy}
        />
      ) : null}
    </div>
  )
}
