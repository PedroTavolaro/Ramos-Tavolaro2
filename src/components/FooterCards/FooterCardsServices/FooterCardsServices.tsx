import styles from './FooterCardsServices.module.css';
import { ArrowServices } from "./ArrowServices/ArrowServices";
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface FooterCardsProps {
    name: string;
    img: StaticImageData;
    link: string;
}

export function FooterCardsServices(props: FooterCardsProps){
    return(

        <div className={styles.controlFooterCard}>
        <div className={styles.controlAbout}>
        <div className={styles.controlArrow}>
        <ArrowServices />
        </div>
        

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
    </div>
    )
}