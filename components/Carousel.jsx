import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import leftArrow from '../public/images/leftarrow.svg'
import rightArrow from '../public/images/rightarrow.svg'
import dot from '../public/images/dot.svg'
import redDot from '../public/images/redDot.svg'
import useWindowSize from '../utils/useWindowSize'

const Carousel = () => {
  const size = useWindowSize()
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
    <div className="carousel-con text-white   md:h-[440px] h-[200px] relative md:mt-[122px] mt-[60px]">
      <div className="absolute w-full h-full z-50 flex md:justify-around justify-between items-center">
        <div className="md:text-[72px] text-[24px] font-bold md:w-[572px] w-[180px]  md:leading-[91px] leading-[40px] ">
          <span className="md:text-[96px] text-[32px]">NEW</span>
          <br />
          <span>BRONZE CARDS</span>
          <div className="indicator flex items-center md:gap-3 gap-2 md:mt-8 mt-4">
            <div className="prev cursor-pointer">
              <Image
                src={leftArrow}
                alt="left arrow"
                className="cursor-pointer w-4 md:w-auto"
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
                className="cursor-pointer w-4 md:w-auto"
                onClick={() => nextIndicator()}
              />
            </div>
          </div>
        </div>
        <div className="  relative md:w-96 w-32 md:h-[340px] h-[180px] ">
          <Image
            className={
              size.width > 768
                ? ' absolute top-16 left-10 transition-all '
                : ' absolute top-10 right-[100px] transition-all '
            }
            width={size.width  > 768 ? 151 : 70}
            height={size.width  > 768 ? 218 : 100}
            src="https://cdn.vole.io/share/99/2385ddcd-dda8-4a60-a6be-9eb51b172664.png"
            alt="image 1"
          />

          <Image
            className={
              size.width  > 768
                ? 'absolute left-[135px] z-10 transition-all'
                : 'absolute right-[44px] top-4 z-10 transition-all'
            }
            width={size.width  > 768 ? 151 : 80}
            height={size.width  > 768 ? 218 : 100}
            src="https://cdn.vole.io/share/99/b0c2bb47-a888-4011-a039-a1a4c98fa707.png"
            alt="image 2"
          />

          <Image
            className={
              size.width  > 768
                ? 'absolute top-16 right-0 transition-all'
                : 'absolute top-10 right-0 transition-all'
            }
            width={size.width  > 768 ? 151 : 70}
            height={size.width  > 768 ? 218 : 100}
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
