import Image from 'next/image'
import styles from './Posts.module.css'

import seta from '../../assets/setavermelha.png';
import rtodonto1 from '../../assets/postsRT/rtodonto 1.png'
import rtodonto2 from '../../assets/postsRT/rtodonto 2.png'
import rtodonto3 from '../../assets/postsRT/rtodonto 3.png'
import insta from '../../assets/contact/insta.svg';
import React, {useRef, useState} from 'react'
import Link from 'next/link'
import { FooterCards } from '../FooterCards/FooterCards';

interface ScrollContainerProps {
    contentWidth: number;
    children: React.ReactNode;
}


export const Posts: React.FC<ScrollContainerProps> = ({contentWidth, children}) => {

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
             <div className={styles.containerTitle}>
             <h1>Posts</h1>
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
    <div style={{ width: contentWidth }} className={''}>
        {children}
    <div className={styles.controlPosts}>

  
       <div className={styles.controlImgPost}>
       <Image src={rtodonto2} alt='' className={styles.imgPosts}/> 
       </div>
        <Link href='https://www.instagram.com/reel/CokaLVKgxMt/?utm_source=ig_web_button_share_sheet' className={styles.controlPostUnit} target='_blank'>
          <div className={styles.textView}>
          <strong>Visualizar post !!!</strong>
          </div>
        </Link>  
  
        <div className={styles.controlImgPost}>
        <Image src={rtodonto1} alt='' className={styles.imgPosts}/> 
        </div>
        <Link href='https://www.instagram.com/reel/CokaLVKgxMt/?utm_source=ig_web_button_share_sheet' className={styles.controlPostUnit} target='_blank'>
        <div className={styles.textView}>
        <strong>Visualizar post !!!</strong>
        </div>
        </Link> 

        <div className={styles.controlImgPost}>
        <Image src={rtodonto3} alt='' className={styles.imgPosts}/> 
        </div>
        <Link href='https://www.instagram.com/reel/CokaLVKgxMt/?utm_source=ig_web_button_share_sheet' className={styles.controlPostUnit} target='_blank'>
        <div className={styles.textView}>
        <strong>Visualizar post !!!</strong>
        </div>
        </Link> 

        <div className={styles.controlImgPost}>
        <Image src={rtodonto3} alt='' className={styles.imgPosts}/> 
        </div>
        <Link href='https://www.instagram.com/reel/CokaLVKgxMt/?utm_source=ig_web_button_share_sheet' className={styles.controlPostUnit} target='_blank'>
        <div className={styles.textView}>
        <strong>Visualizar post !!!</strong>
        </div>
        </Link> 
</div>
        
        
        {/* <Link href={''} className={styles.controlPostUnit}>
            <Image src={rtodonto3} alt='' className={styles.imgPosts}/>
        </Link>
       
        <Link href={''} className={styles.controlPostUnit}>
            <Image src={rtodonto1} alt='' className={styles.imgPosts}/>
        </Link> */}
            </div>

            
         </div>
      </div>
    </div>

                    
                  <FooterCards name={'@rtodonto.clinica'} img={insta} link={'https://www.instagram.com/rtodonto.clinica/'} />
                  
     
        </div>
    )
}

 // <div className={styles.containerPosts}>
        //     <div className={styles.containerTitle}>
        //     <strong>Posts</strong>
        //     </div>
            
        //     <div className={styles.controlPosts}>
        //         <div>
        //             <Image src={rtodonto1} alt='' className={styles.imgPosts}/>
        //         </div>
        //         <div>
        //             <Image src={rtodonto2} alt='' className={styles.imgPosts}/>
        //         </div> 

        //         <div>
        //             <Image src={rtodonto3} alt='' className={styles.imgPosts}/>
        //         </div> 

        //         <div>
        //             <Image src={rtodonto1} alt='' className={styles.imgPosts}/>
        //         </div> 
        //     </div>

          
        // </div>