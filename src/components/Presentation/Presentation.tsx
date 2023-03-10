import presentation from '../../assets/presentation.png'
import Image from 'next/image';

import logo from '../../assets/header/logo.png';

// import videoClinica from '../../Videos/clinica.mp4';

import styles from './Presentation.module.css';

import socios from '../../assets/about/socios1.png';

export function Presentation() {
    return(
        <div className={styles.presentation}>
    
            <div className={styles.bannerPresentation}>
            {/* <Image src={Logo2} alt='' className={styles.logo2}/> black 64%, */}

                
                
                
                <div className={styles.controlImgPresentation}>
                <Image src={socios} alt='' className={styles.imgPresentation}/>
                </div>
                {/* <Image src={logo} alt='' className={styles.logo} /> */}
                {/* <strong>
                ESTAMOS DE PORTAS< br/> ABERTAS,
                DANDO O < br/>  MELHOR DE NÓS PARA < br/>
                TODOS
                </strong> */}
        

                <div className={styles.controlVideo}>
              <video
              src={require('../../../public/videos/clinica.mp4')} 
              
              poster='../../assets/presentation.png'
              autoPlay
              muted
              loop
              >
                Your navigator not suport Tag VIDEO
                Seu navegador não suporta a Tag video
              </video>
              </div>
            </div>

        </div>
    )
}