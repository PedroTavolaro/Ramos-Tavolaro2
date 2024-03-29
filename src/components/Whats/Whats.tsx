
import Image from 'next/image'
import styles from './Whats.module.css'

import whats from '../../assets/contact/whats.png'
import { useEffect, useRef, useState } from 'react';
import { ArrowCircleUp, ArrowUp } from 'phosphor-react';
import Link from 'next/link';


export function Whats() {
    const [counter, setCounter] = useState(0);
    const [shouldAnimate, setShouldAnimate] = useState(false);

      useEffect(() => {
            const interval = setInterval(() => {
              console.log('This will be called every 2 seconds');
              setCounter((prevCounter) => prevCounter + 1);
              setShouldAnimate(true)
  
              setTimeout(() => {
                setShouldAnimate(false)
                console.log('termino')
            }, 6000)
            }, 12000);

            
          
            return () => clearInterval(interval);
          }, []);
   
        return(
       
          <div className={styles.whatsContainer}>
          
            
        <a className={styles.containerLogo} href='https://wa.me/5527997762910?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20melhor%20a%20Ramos%20Tavolaro%20!!!' target='_blank' rel="noreferrer">
        {shouldAnimate 
            ? 
            <div className={styles.controlWhatsText}>
                  <p className={styles.whatsText}><p className={styles.whatsTextText}>Agende sua consulta</p></p>
            </div>
            : 
            <div>
             
            </div>
            }
            
        <Image src={whats} alt='' className={styles.whatsLogo} /> 
        <div className={styles.buttonTop}>
            <div>
            <Link href='#header'>
            <ArrowCircleUp  className={styles.iconUp}/>
            <p>Topo</p>
            </Link>
            </div>
        </div>
        </a>
          
       
        
          </div>
          
        // <div className={styles.container}>
        //     <div className={`${styles.box} ${shouldAnimate ? styles.animate : ''}`}><p>Agende sua consulta1</p></div>
        //     <div>Counter: {counter}</div>
        // </div>
        );

 
}