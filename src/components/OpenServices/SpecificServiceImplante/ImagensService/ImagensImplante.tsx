import Image from 'next/image'
import styles from './ImagensImplante.module.css'



import rtodonto2 from '../../../../assets/ebook/Ebook1.png'

import insta from '../../../../assets/contact/insta.svg';
import React, {useRef, useState} from 'react'
import Link from 'next/link'
import { FooterCards } from '../../../FooterCards/FooterCards';
import { FooterCardsServices } from '@/components/FooterCards/FooterCardsServices/FooterCardsServices';
import { ArrowServices } from '@/components/FooterCards/FooterCardsServices/ArrowServices/ArrowServices';
import seta from '../../../../assets/seta.png';




export const ImagensImplante: React.FC = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDown(true);
        setStartX(e.nativeEvent.pageX - containerRef.current?.offsetLeft!);
        setScrollLeft(containerRef.current?.scrollLeft!);
    }

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if(!isDown) return;
        const x = e.nativeEvent.pageX - containerRef.current?.offsetLeft!;
        const walk = (x - startX) * 3;
        containerRef.current!.scrollLeft = scrollLeft - walk;
    }

    return (

        <div className={styles.master}>

            <div className='divs-container'>

            </div>
             
            <div
                ref={containerRef}
                className={styles.scrollContainer}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >

                <div className={styles.containerPosts}>
                    <div className={styles.backgroundPostArea}>
                        <div className={''}>
                            
                            <div className={styles.controlPosts}>
                                <div className={styles.controlImgPost}>
                                    <Image src={rtodonto2} alt='' className={styles.imgPosts} />
                                </div>
                                <div className={styles.controlImgPost}>
                                    <Image src={rtodonto2} alt='' className={styles.imgPosts} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.containerSeta}>
        <Image src={seta} alt='' className={styles.iconSeta}/>
        </div>      
                
                  
     
        </div>
    )
}
