import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { SpecificService } from "@/components/OpenServices/SpecificServices/SpecificService";
import { Whats } from "@/components/Whats/Whats";

import styles from '../styles/components/Services.module.css';

export default function services() {
    return(
        <>
        <div id="header">
        <Header />
        </div>
        
        <div className={styles.whats}>
        <Whats />
        </div>
        
        <div className={styles.specificServices}>
        <SpecificService />
        </div>
        
        <Footer />
        </>
    )
}