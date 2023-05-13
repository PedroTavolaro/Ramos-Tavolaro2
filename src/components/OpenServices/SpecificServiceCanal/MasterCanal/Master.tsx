import styles from './Master.module.css'
import Image from "next/image";
import implante from "../../../../assets/servicos/canal1.png";

import implanteebook from "../../../../assets/servicos/canal1.png";
import logo from "../../../../assets/header/logo.png";

import { StaticImageData } from "next/image";

import { EmblaOptionsType } from 'embla-carousel-react'
import { useState } from 'react';
import { VideosImplante } from '../VideosServices/VideosImplante/VideosImplante';
import { Recommendation } from '../recommendation/Recommendation';
import { ArrowCircleDown, ArrowCircleDownRight, ArrowCircleLeft, ArrowCircleRight, ArrowCircleUp } from 'phosphor-react';

import vector from '../../../assets/about/Vector3.png'
import { ImagensImplante } from '../ImagensService/ImagensImplante';
import Link from 'next/link';



export function MasterCanal(){
    const [isImageVisible, setIsImageVisible] = useState(true);
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const [isVisibleRecommendation, setIsVisibleRecommendation] = useState(false);

    function visibleImage(){
        if(isImageVisible == true) {
            setIsImageVisible(false)
        }
        if(isImageVisible == false) {
            setIsImageVisible(true)
        }
    }

    function visibleVideos(){
        if(isVideoVisible == true){
            setIsVideoVisible(false)
        }
        if(isVideoVisible == false) {
            setIsVideoVisible(true)
        }
    }

    function visibleRecommendation(){
        if(isVisibleRecommendation == true) {
            setIsVisibleRecommendation(false)
        }
        if(isVisibleRecommendation == false) {
            setIsVisibleRecommendation(true)
        }
    }
    
    return(
        <div className={styles.SpecificService}>

            <div id='canal' className={styles.container}>
                <div className={styles.containerDescription}>
                <div className={styles.controlServices}>
                    <div className={styles.controlImg}>
                        <Image src={implante} alt="" className={styles.imgService} />
                    </div>
                    
                    <div className={styles.controlTextTwo}>
                        <div className={styles.controlTextIntro}></div>
                        <strong className={styles.text}>CANAL</strong>
                    </div>
                    
                        
              <div className={styles.ebook}>

                <div className={styles.degrade}></div>
               <div className={styles.controlImgEbook}>
               <Image src={implanteebook} alt='' className={styles.ebookImage}/>
               </div>
             
                <div className={styles.controlEbookDescription}>
                {/* <strong className={styles.textEbook}>RAMOS TAVOLARO</strong><br/> */}
                <Image src={logo} alt='' className={styles.logo} />
                    <div className={styles.controlTextEbookDescription}>
                    <strong className={styles.textEbook}>CANAL< br/></strong>
                    <strong className={styles.textEbookDescription}>
                   
                    EBOOK COMPLETO
                    </strong>

                    
                    </div>
                    
                    <Link href={'https://drive.google.com/drive/folders/1-nt-ge_iPu2_aAISAaN3DSgvMrXuHCXN'} target='_blank'>
                    <div className={styles.viewEbook}>
                        <div></div>
                    <strong className={styles.textViewEbook}>Visualizar Ebook</strong>
                    </div>
                    </Link>
                    
                </div>
                </div>

                
                </div>

                <div className={styles.descriptionService}>
                    <strong>
                        Canal
                    </strong>
                   
                    <p>
                    <br />
                        Texto de introdução ao serviço, descrevendo resumidamente o procedimento,
                        deixando a introdução completa para o ebook
                        Texto de introdução ao serviço, descrevendo resumidamente o procedimento,
                        deixando a introdução completa para o ebook
                        Texto de introdução ao serviço, descrevendo resumidamente o procedimento,
                        deixando a introdução completa para o ebook
                    </p>
                    <br />
                  
              </div>
                </div>

              <div className={styles.containerImg}>
                    
                    <button className={styles.buttonViewImage} onClick={visibleImage}>
                    <div>
                        <strong>Imagens </strong> 
                        </div>
                        <div>{isImageVisible ?<ArrowCircleUp className={styles.iconButtonVisible}/>  :<ArrowCircleDown className={styles.iconButtonVisible}/>}</div>
                    </button>
                    { isImageVisible ? 
                        
                    <ImagensImplante />
                        :
                        ''
                    }

                    <button className={styles.buttonViewImage} onClick={visibleVideos}>
                    <div>
                        <strong>Videos</strong> 
                        </div>
                        <div>{isVideoVisible ?<ArrowCircleUp className={styles.iconButtonVisible}/>  :<ArrowCircleDown className={styles.iconButtonVisible}/>}</div>
                    </button>
                    {isVideoVisible ? 
                    <VideosImplante  />
                    :
                    ''
                    }
                
                    <button className={styles.buttonViewImage} onClick={visibleRecommendation}>
                        <div>
                        <strong>Recomendações </strong> 
                        </div>
                        <div>{isVisibleRecommendation ?<ArrowCircleUp className={styles.iconButtonVisible}/>  :<ArrowCircleDown className={styles.iconButtonVisible}/>}</div>
                    </button>
                
                    {isVisibleRecommendation ? 
                    <Recommendation />    
                    :
                    ''
                    }

                 </div>
            </div>
           

        </div>
        
    )
}