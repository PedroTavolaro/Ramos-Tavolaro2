import styles from './Footer.module.css';

import insta from '../../assets/contact/insta.svg';
import youtube from '../../assets/contact/youtub.svg';

import { DeviceMobile, Envelope, HouseLine} from 'phosphor-react'
import Image from 'next/image';

export function Footer() {
    return(
        <div className={styles.containerFooter}>
            <div className={styles.controlFooter}>
                   <h1 className={styles.titleOne}>- MENU</h1>
                   <div className={styles.containerMenu}>
                   <strong>HOME</strong>
                   <strong>QUEM SOMOS</strong>
                   <strong>SERVIÇOS</strong>
                   <strong>POSTS</strong>
                   <strong>VIDEOS</strong>
                   <strong>RECOMENDAÇÕES</strong>
                   </div>

            </div>
            <div className={styles.controlFooter}>
                <h1 className={styles.title}>- QUEM SOMOS</h1>
                   <div className={styles.containerAbout}>
                        <HouseLine  size={24} className={styles.iconAbout}/>
                        <strong className={styles.aboutText}>ENDEREÇO:</strong>
                        <p>Av. Fernando Ferrari, 2921, Vitória, ES</p>
                   </div>
                   <div className={styles.containerAbout}>
                        <Envelope  size={25} className={styles.iconAbout}/>
                        <strong className={styles.aboutText}> EMAIL:</strong>
                        <p>ramostavolaroodonto@outlook.com</p>
                   </div>
                   <div className={styles.containerAbout}>
                        <DeviceMobile  size={24} className={styles.iconAbout}/>
                        <strong className={styles.aboutText}> TELEFONES:</strong>
                        <p>(27) 997762910</p>
                   </div>
                   
            </div>
            <div className={styles.controlFooter}>
                   <h1 className={styles.title}>- REDES SOCIAIS</h1>
                  <div className={styles.controlAbout}>
                  <div className={styles.containerAbout}>
                        <Image src={insta} alt='' className={styles.iconInsta}/><strong className={styles.redeSocialText}> @rtodonto.clinica</strong>
                   </div>
                   <div className={styles.containerAbout}>
                        <Image src={youtube} alt='' className={styles.iconInsta}/><strong className={styles.redeSocialText}> @rtodonto.clinica</strong>
                   </div>
                  </div>
            </div>
        </div>
    )
}