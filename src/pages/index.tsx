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
               
              <Whats />
             
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
                <div className={styles.locationArea}>
                  {/* <a href='https://www.google.com.br/maps/place/Av.+Fernando+Ferrari,+2921+-+Solon+Borges,+Vit%C3%B3ria+-+ES,+29075-053/@-20.2615695,-40.2961925,17z/data=!3m1!4b1!4m5!3m4!1s0xb8186c85b5387f:0x1f10925763aef94b!8m2!3d-20.2615695!4d-40.2940038' target='_blank' rel='noopener noreferrer'><Image src={location} alt='' className={styles.imgLocation}/></a> */}
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.934055388652!2d-40.294003800000006!3d-20.261569499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8186c85b5387f%3A0x1f10925763aef94b!2sAv.%20Fernando%20Ferrari%2C%202921%20-%20Solon%20Borges%2C%20Vit%C3%B3ria%20-%20ES%2C%2029075-053!5e0!3m2!1spt-BR!2sbr!4v1676507839790!5m2!1spt-BR!2sbr" className={styles.imgLocation} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
  
              <div>
                <Footer />
              </div> 
              
            </div> 
            
          </div>

          </>
          
  )
}
