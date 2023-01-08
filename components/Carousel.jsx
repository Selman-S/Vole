import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import leftArrow from '../public/images/leftarrow.svg'
import rightArrow from '../public/images/rightarrow.svg'
import dot from '../public/images/dot.svg'
import redDot from '../public/images/redDot.svg'
const Carousel = () => {

  const [indicator, setIndicator] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      setIndicator((indicator + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [indicator])
  
  const prevIndicator = () => {
    if (indicator === 0) {
      setIndicator(2)
    } else {
      setIndicator(indicator - 1)
    }
  }

  const nextIndicator = () => {
    if (indicator === 2) {
      setIndicator(0)
    } else {
      setIndicator(indicator + 1)
    }
  }
  return (
    <div className="carousel-con text-white  h-[440px] relative mt-[122px]">
        <div className="absolute w-full h-full z-50 flex justify-around items-center">
          <div className="text-[72px] font-bold w-[572px] leading-[91px] ">
            <span className="text-[96px]">NEW</span>
            <br />
            <span>BRONZE CARDS</span>
            <div className="indicator flex items-center gap-3 mt-8">
              <div className="prev cursor-pointer">
                <Image
                  src={leftArrow}
                  alt="left arrow"
                  onClick={() => prevIndicator()}
                />
              </div>
              <div className="dots flex gap-1">
                <div className="indicator-dot cursor-pointer">
                  <Image id="1" src={indicator == 0 ? redDot : dot} alt="dot" />
                </div>
                <div className="indicator-dot cursor-pointer">
                  <Image id="2" src={indicator == 1 ? redDot : dot} alt="dot" />
                </div>
                <div className="indicator-dot cursor-pointer">
                  <Image id="3" src={indicator == 2 ? redDot : dot} alt="dot" />
                </div>
              </div>
              <div className="next cursor-pointer">
                <Image
                  src={rightArrow}
                  alt="right arrow"
                  onClick={() => nextIndicator()}
                />
              </div>
            </div>
          </div>
          <div className=" relative w-96 h-[340px]">
        

            <Image
              className=" absolute top-16 left-0 transition-all "
              width={151}
              height={218}
              src="https://cdn.vole.io/share/99/2385ddcd-dda8-4a60-a6be-9eb51b172664.png"
              alt="image 1"
            />

            <Image
              className="absolute left-[75px] z-10 transition-all"
              width={235}
              height={340}
              src="https://cdn.vole.io/share/99/b0c2bb47-a888-4011-a039-a1a4c98fa707.png"
              alt="image 2"
            />

            <Image
              className="absolute top-16 right-0 transition-all"
              width={151}
              height={218}
              src="https://cdn.vole.io/share/99/6ba36f6f-e065-4b6f-8236-44811647969a.png"
              alt="image 3"
            />
          </div>
        </div>
        <div className="slider-black z-10 bg-black absolute top-0 left-0 w-full h-full opacity-[0.3]"></div>
      </div>
  )
}

export default Carousel