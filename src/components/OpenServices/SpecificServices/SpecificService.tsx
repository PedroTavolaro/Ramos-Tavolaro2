import { MasterImplante } from "../SpecificServiceImplante/MasterImplante/Master";
import { MasterOrto } from "../SpecificServiceOrto/MasterOrto/Master";
import styles from './SpecificService.module.css';

export function SpecificService(){
    
    return(
        <div className={styles.container}>
               <h1 className={styles.title}>Serviços</h1>
            <MasterImplante />

            <MasterOrto />
        </div>
        
    )
}