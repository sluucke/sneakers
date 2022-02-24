import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

SwiperCore.use([Navigation])

import 'swiper/css/navigation'
import 'swiper/css'

import { useRef } from 'react'
import Image from 'next/image'

import LeftArrowSvg from '../assets/icons/left-arrow.svg'
import RightArrowSvg from '../assets/icons/right-arrow.svg'
import Image1 from '../assets/images/Image.png'
import Image2 from '../assets/images/revolt.jpg'

export default function Slider() {
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  return (
    <Swiper
      // spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => {

      // }}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        swiper.params.navigation.prevEl = prevRef.current
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        swiper.params.navigation.nextEl = nextRef.current
      }}
      className="relative mt-12"
    >
      <SwiperSlide>
        <div className="w-[800px] h-[400px] relative">
          <Image
            src={Image1}
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded" // just an example
          />
        </div>
      </SwiperSlide>
      <SwiperSlide  >
        <div className="w-[800px] h-[400px] relative">
          <Image
            src={Image2}
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded" // just an example
          />
        </div>
      </SwiperSlide>
      {/* <SwiperSlide className="bg-purple-400">Slide 3</SwiperSlide>
      <SwiperSlide className="bg-orange-400">Slide 4</SwiperSlide> */}
      <div className="flex absolute bottom-2 right-3 items-center">
        <div
          ref={prevRef}
          className="flex p-4 bg-white bg-opacity-60 backdrop-blur z-40"
        >
          <Image
            src={LeftArrowSvg}
            width={50}
            height={50}
            alt="Vetor Gráfico"
            draggable={false}
          />
        </div>
        <div
          ref={nextRef}
          className="flex p-4 bg-white bg-opacity-60 backdrop-blur ml-3 z-40"
        >
          <Image
            src={RightArrowSvg}
            width={50}
            height={50}
            alt="Vetor Gráfico"
            draggable={false}
          />
        </div>
      </div>
    </Swiper>
  )
}
