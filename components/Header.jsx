import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import fefcLogo from '../public/images/logo.svg'
import budgetIcon from '../public/images/vole_wallet.png'

const Header = ({budget} ) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  if (typeof window !== "undefined") {
    // browser code
    var marketHeight = document.getElementById('market').offsetTop;
    var myCardsHeight = document.getElementById('mycards').offsetTop;
  }
  
const handleScroll = (e)=>{

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


if (marketHeight-150 <= scrollPosition){
  document.querySelector('.nav-link-market').classList.add('active')
  document.querySelector('.nav-link-cards').classList.remove('active')
}
if (marketHeight-150> scrollPosition){
  document.querySelector('.nav-link-cards').classList.add('active')
  document.querySelector('.nav-link-market').classList.remove('active')
}

const handleScrolla = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};


useEffect(() => {
    window.addEventListener('scroll', handleScrolla, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScrolla);
    };
}, []);

  return (
    <header className="z-[1000] fixed top-0  h-[60px] md:h-[122px] bg-black text-white w-full flex items-center md:px-16 px-2 justify-between">
      <div className="flex ">
        <div className="nav-logo-con">
          <div className="nav-logo w-16 md:w-auto">
            <Image src={fefcLogo} className="" alt="logo" />
          </div>
          <div className="nav-logo-text"></div>
        </div>
        <ul className="text-white flex md:ml-24 ml-8 md:gap-16 gap-4 items-center">
          <li className="nav-link nav-link-cards md:text-lg text-sm  active whitespace-nowrap" onClick={()=>handleScroll('mycards')}>
            MY CARDS <div></div>
          </li>
          <li className="nav-link nav-link-market md:text-lg text-sm" onClick={()=>handleScroll('market')} >
            MARKET<div></div>
          </li>
        </ul>
      </div>
      <div className="nav-budget">
        <div className="rounded-lg flex">
          <div className="nav-budget-logo bg-red md:w-12 w-6 md:h-12 h-6 md:p-3 p-[6px] rounded-lg rounded-r-none">
            <Image src={budgetIcon} className="md:w-6 w-3  md:h-6 h-3" alt="Budget icon" />
          </div>
          <div className="nav-budget-text md:w-[132px] w-[66px] bg-grey rounded-lg rounded-l-none flex items-center justify-center font-semibold md:text-2xl text-sm md:leading-8 leading-4">
            <span>€ {budget}.00</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
