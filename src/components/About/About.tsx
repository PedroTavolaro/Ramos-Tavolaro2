// import styles from './About.module.css';

import { EmblaOptionsType } from 'embla-carousel-react'

// import './Carousel/CSS/base.module.css'
import styles from './Carousel/CSS/sandbox.module.css'
// import './Carousel/CSS/embla.module.css'
import EmblaCarousel from './Carousel/index/EmblaCarousel';

import styles1 from './About.module.css'
import Image from 'next/image';
import vector from '../../assets/about/Vector.png'
import vector2 from '../../assets/about/Vector2.png'
import vector3 from '../../assets/about/Vector3.png'


import profile2 from '../../assets/about/profile2.png'
import { CheckCircle } from 'phosphor-react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

import { Whats } from '@/components/Whats/Whats';
import { CardZe } from './Cards/CardZe/CardZe';
import { CardStella } from './Cards/CardStella/CardStella';

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export function About(){

  
    return (
      <div className={styles1.master}>
           
        <div className={styles1.titleAbout}>
          <h1>NOS CONHEÇA MELHOR</h1>
        </div>

        <div className={styles.sandbox}>
          <section className={styles.sandbox__carousel}>
            <EmblaCarousel 
            slides={SLIDES} 
            options={OPTIONS} 
            />
          </section>
        </div>

        <div className={styles1.controlImgBackgroundOne}>
            <Image src={vector} alt="" className={styles1.imgAboutProfileOne} />
          </div>
           
        <CardStella />
        
        <div className={styles1.controlImgBackgroundTwo}>
            <Image src={vector3} alt="" className={styles1.imgAboutProfileThree} />
        </div>

        <CardZe />
         
          
        </div>


        

       
   
    );
}