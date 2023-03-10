import Image from 'next/image';
import styles from './Ebook.module.css';

import ebook1 from '../../assets/ebook/Ebook1.png';
import logo from '../../assets/ebook/logoRTYellow.png';

import Link from 'next/link';

import drive from '../../assets/contact/drive.png';
import { FooterCards } from '../FooterCards/FooterCards';

export function Ebook(){
    return(
        <div className={styles.containerEbook}>
            <div className={styles.title}>
                <strong>E-BOOKS</strong>
            </div>

            <div className={styles.containerEbookScroll}>
                {/* <div className={styles.ebook}>
                    <Image src={ebook1} alt='' className={styles.imgEbook}/>
                    <div className={styles.textPresentation}>
                    <strong>RAMOS TAVOLARO</strong><br/>
                    <strong>
                    ESTAMOS DE PORTAS ABERTAS,< br/>
                    DANDO O MELHOR DE NÓS PARA < br/>
                    TODOS
                    </strong>
                    </div>
                </div> */}

                <div className={styles.controlEbook}>
                
                <div className={styles.backgroundEbook}>
               
                <div className={styles.ebook}>
               <div className={styles.controlImgEbook}>
               <Image src={ebook1} alt='' className={styles.imgEbook}/>
               </div>
             
                <div className={styles.controlEbookDescription}>
                {/* <strong className={styles.textEbook}>RAMOS TAVOLARO</strong><br/> */}
                <Image src={logo} alt='' className={styles.logo} />
                    <div className={styles.controlTextEbookDescription}>
                    <strong className={styles.textEbook}>IMPLANTES< br/></strong>
                    <strong className={styles.textEbookDescription}>
                   
                    PROPORCIONANDO <br />O MELHOR A
                    TODOS
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

                
                {/* <div className={styles.ebook}>
               <div className={styles.controlImgEbook}>
               <Image src={ebook1} alt='' className={styles.imgEbook}/>
               </div>
              
                <div className={styles.controlEbookDescription}>
                <strong className={styles.textEbook}>RAMOS TAVOLARO</strong><br/>
                  <div className={styles.controlTextEbookDescription}>
                  <strong className={styles.textEbookDescription}>
                    ESTAMOS DE PORTAS ABERTAS,< br/>
                    DANDO O MELHOR DE NÓS PARA < br/>
                    TODOS
                    </strong>
                  </div>
                </div>
                
                </div> */}

            </div>
            </div>
                

            </div>
          
                  <FooterCards name={'@rtodonto.clinica'} img={drive} link={'https://drive.google.com/drive/folders/1-nt-ge_iPu2_aAISAaN3DSgvMrXuHCXN'}/>
          
        </div> 
        
    )
}