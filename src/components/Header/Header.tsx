/* eslint-disable @next/next/no-img-element */
import styles from './Header.module.css';

import Image from 'next/image';
import Logo from '../../assets/header/logo.png';

import Logo2 from '../../assets/header/logoRT.png';
import logoteste from '../../assets/header/testelogo.png';

export function Header(){
    return (
        
        <div className={styles.container}> 
           <div className={styles.header}>
            <div className={styles.containerOne}>
            <Image src={Logo2} alt='' className={styles.logo1}/>
            <Image src={logoteste} alt='' className={styles.logo2}/>
            </div>
            <div className={styles.containerTwo}>
                <div>
                     <a href='#ebooks'><strong>INÍCIO</strong></a>
                     <a href='#servicos'><strong>SERVIÇOS</strong></a>
                     <a href='#about'><strong className={styles.about}>QUEM SOMOS</strong></a>
                     <a href='#posts'><strong>POSTS</strong></a>
                     <a href='#ebooks'><strong>EBOOKS</strong></a>
                     <a href='#videos'><strong>VIDEOS</strong></a>
                     <a href='#contatos'><strong>CONTATO</strong></a>
                </div>
            </div>
           </div>

        
        </div>
        
    )
}