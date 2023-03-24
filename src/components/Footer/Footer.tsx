import styles from './Footer.module.css';

import insta from '../../assets/contact/insta.svg';
import youtube from '../../assets/contact/youtub.svg';

import { DeviceMobile, Envelope, HouseLine} from 'phosphor-react'
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return(
     <div className={styles.bacgroundFooter}>
        <div className={styles.containerFooter}>
            <div className={styles.controlFooter}>
                   <h1 className={styles.title}>- MENU</h1>
                   <div className={styles.containerMenu}>
                  <Link href='#header'> <strong>HOME</strong> </Link>
                   <Link href='#servicos'> <strong>SERVIÇOS</strong> </Link>
                   <Link href='#about'><strong>QUEM SOMOS</strong> </Link>
                   <Link href='#posts'><strong>POSTS</strong> </Link>
                   <Link href='#ebooks'><strong>EBOOKS</strong> </Link>
                   <Link href='#videos'><strong>VIDEOS</strong> </Link>
                   </div>

            </div>
            <div className={styles.controlFooter}>
                <h1 className={styles.title}>- QUEM SOMOS</h1>
                   <div className={styles.containerAbout}>
                        <HouseLine className={styles.iconAbout}/>
                        <strong className={styles.aboutText}>ENDEREÇO:</strong>
                        <p>Av. Fernando Ferrari, 2921, Vitória, ES</p>
                   </div>
                   <div className={styles.containerAbout}>
                        <Envelope className={styles.iconAbout}/>
                        <strong className={styles.aboutText}> EMAIL:</strong>
                        <p>ramostavolaroodonto@outlook.com</p>
                   </div>
                   <div className={styles.containerAbout}>
                        <DeviceMobile className={styles.iconAbout}/>
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
     </div>
    )
}