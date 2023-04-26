import Image from "next/image"

import seta from '../../../../assets/seta.png';
import styles from './ArrowServices.module.css'

export function ArrowServices() {
    return(
        <div className={styles.containerSeta}>
        <Image src={seta} alt='' className={styles.iconSeta}/>
        </div>
    )
}