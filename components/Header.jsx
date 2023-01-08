import React from 'react'
import Image from 'next/image'
import fefcLogo from '../public/images/logo.svg'
import budgetIcon from '../public/images/vole_wallet.png'

const Header = ({budget} ) => {
  
const handleScroll = (e)=>{
  const marketHeight = document.getElementById('market').offsetTop;
  const myCardsHeight = document.getElementById('mycards').offsetTop;

console.log(marketHeight, myCardsHeight);
    if(e === 'mycards'){
     window.scrollTo({
        top:myCardsHeight-150,
        behavior:'smooth'
     })
document.querySelector('.nav-link-cards').classList.add('active')
document.querySelector('.nav-link-market').classList.remove('active')
    }else if(e === 'market'){
      window.scrollTo({
        top:marketHeight-150,
        behavior:'smooth'
     })
      document.querySelector('.nav-link-market').classList.add('active')
      document.querySelector('.nav-link-cards').classList.remove('active')
    }
}


  return (
    <header className="z-[1000] fixed top-0 h-[122px] bg-black text-white w-full flex items-center px-16 flex justify-between">
      <div className="flex ">
        <div className="nav-logo-con">
          <div className="nav-logo">
            <Image src={fefcLogo} className="" alt="logo" />
          </div>
          <div className="nav-logo-text"></div>
        </div>
        <ul className="text-white flex ml-24 gap-16 items-center">
          <li className="nav-link nav-link-cards  active whitespace-nowrap" onClick={()=>handleScroll('mycards')}>
            MY CARDS <div></div>
          </li>
          <li className="nav-link nav-link-market " onClick={()=>handleScroll('market')} >
            MARKET<div></div>
          </li>
        </ul>
      </div>
      <div className="nav-budget">
        <div className="rounded-lg flex">
          <div className="nav-budget-logo bg-red w-12 h-12 p-3 rounded-lg rounded-r-none">
            <Image src={budgetIcon} className="w-6 h-6" alt="Budget icon" />
          </div>
          <div className="nav-budget-text w-[132px] bg-grey rounded-lg rounded-l-none flex items-center justify-center font-bold text-2xl leading-8">
            <span>€ {budget}.00</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
