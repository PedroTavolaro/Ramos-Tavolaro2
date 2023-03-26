import styles from './SpecificService.module.css'
import Image from "next/image";
import implante from "../../../assets/servicos/implante.png";

import { StaticImageData } from "next/image";
import EmblaCarouselService from '../Carousel/index/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react'
import { useState } from 'react';

interface ServiceProps {
    name: string;
    description: string;
    img: StaticImageData;
}

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export function SpecificService(){
    const [isImageVisible, setIsImageVisible] = useState(true);

    function visibleImage(){
        if(isImageVisible == true) {
            setIsImageVisible(false)
        }
        if(isImageVisible == false) {
            setIsImageVisible(true)
        }
    }
    
    return(
        <div>
            <h1>Serviços</h1>

            <div className={styles.container}>
                <div className={styles.controlServices}>
                    <div className={styles.controlImg}>
                        <Image src={implante} alt="" className={styles.imgService} />
                        
                        <div className={styles.controlTextTwo}>
                            <div className={styles.space}></div>
                            <strong className={styles.text}>IMPLANTES</strong>
                        </div>
                    </div>
                </div>

                <div className={styles.descriptionService}>
                    <strong>
                        Descrição
                    </strong>
                    <p>
                        Texto de introdução ao serviço, descrevendo resumidamente o procedimento,
                        deixando a introdução completa para o ebook
                        Texto de introdução ao serviço, descrevendo resumidamente o procedimento,
                        deixando a introdução completa para o ebook
                        Texto de introdução ao serviço, descrevendo resumidamente o procedimento,
                        deixando a introdução completa para o ebook
                    </p>

                    <div className={styles.containerImg}>
                    
                    <button className={styles.buttonViewImage} onClick={visibleImage}>
                        <strong>Imagens</strong>
                    </button>
                { isImageVisible ? 
                    <EmblaCarouselService 
                    slides={SLIDES} 
                    options={OPTIONS} 
                />
                    :
                    ''
                }
                 </div>
              </div>
            </div>
           

        </div>
    )
}