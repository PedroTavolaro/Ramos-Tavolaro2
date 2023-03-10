import Image from "next/image"

import seta from '../../../assets/seta.png';
import styles from './Arrow.module.css'

export function Arrow() {
    return(
        <div className={styles.containerSeta}>
        <Image src={seta} alt='' className={styles.iconSeta}/>
        </div>
    )
}