import styles from './FooterCards.module.css';
import { Arrow } from "./Arrow/Arrow";
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface FooterCardsProps {
    name: string;
    img: StaticImageData;
    link: string;
}

export function FooterCards(props: FooterCardsProps){
    return(

        <div className={styles.controlAbout}>
        <Arrow />

        <div className={styles.containerAbout}>
        
        <Link href={`${props.link}`} target='_blank'>
            <div>                
            <Image src={props.img} alt='' className={styles.iconInsta}/>
            <strong className={styles.redeSocialText}>
                {props.name}
            </strong>
            </div>
        </Link>
                        
        </div>
    </div>
    )
}