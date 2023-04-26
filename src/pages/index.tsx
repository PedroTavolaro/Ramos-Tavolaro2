/* eslint-disable react/no-children-prop */
import { Header } from '@/components/Header/Header';
import styles from '../styles/components/Home.module.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import presentation from '../assets/presentation.png'
import Image from 'next/image';
import { Presentation } from '@/components/Presentation/Presentation';
import { Services } from '@/components/OpenServices/Services';
import { About } from '@/components/About/About';
import { Posts } from '@/components/PostsRT/Posts';
import { Videos } from '@/components/VideosRT/Videos';
import { Ebook } from '@/components/Ebook/Ebook';
import { Footer } from '@/components/Footer/Footer';



import location from '../assets/contact/location2.png';
import { WhatsappLogo } from 'phosphor-react';
import { Whats } from '@/components/Whats/Whats';

import whats from '../assets/contact/whats.png'



export default function Home() {

  

  

  return (  
<>
  
          <div className={styles.containerMaster}>
            <div id='header' className={styles.header}>
            <Header />
         
            </div>

               <div className={styles.body}>
               
               <div>
               <Whats />
               </div>
              
             
              <Presentation />
              
             <div id='servicos'>
             <Services />
              </div>  
          
              <div id='about'>
              <About /> 
              </div>
               
              <div id='posts'>
              <Posts contentWidth={0} children={undefined} />
              </div>
              
             <div id='ebooks'>
             <Ebook />
             </div>
              

              <div id='videos'>
              <Videos contentWidth={0} children={undefined} />
              </div>

              <div className={styles.containerLocation}>
              <h1>COMO CHEGAR</h1>
             
              </div>
  
              <div>
                <Footer />
              </div> 
              
            </div> 
            
          </div>

          </>
          
  )
}
