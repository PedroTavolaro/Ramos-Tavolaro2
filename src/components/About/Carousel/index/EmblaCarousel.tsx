import React, { useState, useEffect, useCallback, ReactNode, useRef } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import imageByIndex from './imageByIndex'
import Image from 'next/image'

import Autoplay from 'embla-carousel-autoplay'

// import './Carousel/CSS/base.module.css'
// import './Carousel/CSS/sandbox.module.css'
import styles from '../CSS/embla.module.css'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

   const autoplayOptions = {
    delay: 6000,
    //rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  //   active: true,
  //   jump: false,
  // breakpoints: {},
    reset: true,
  //   playOnInit: true,
  stopOnInteraction: false,
  // stopOnMouseEnter: false,
  // stopOnLastSnap: false,
    // onMouseEnter: autoplay.current.stop,
    // onMouseLeave: autoplay.current.reset
  }

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)])
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })



  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      if (emblaThumbsApi.clickAllowed()) emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaMainRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__number}>
                <span>{index + 1}</span>
              </div>
              <Image
                className={styles.embla__slide__img}
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla_thumbs}>
        <div className={styles.embla_thumbs__viewport} ref={emblaThumbsRef}>
          <div className={styles.embla_thumbs__container}>
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={imageByIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
