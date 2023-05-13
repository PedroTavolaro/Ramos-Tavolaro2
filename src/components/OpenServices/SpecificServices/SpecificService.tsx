import { MasterLimpeza } from "../SpecificServiceLimpeza/MasterLimpeza/Master";
import { MasterImplante } from "../SpecificServiceImplante/MasterImplante/Master";
import { MasterOrto } from "../SpecificServiceOrto/MasterOrto/MasterOrto";
import styles from './SpecificService.module.css';
import { MasterClareamento } from "../SpecificServiceClareamento/MasterClareamento/Master";
import { MasterRestauracao } from "../SpecificServiceRestauracao/MasterRestauracao/Master";
import { MasterCanal } from "../SpecificServiceCanal/MasterCanal/Master";
import { MasterProteses } from "../SpecificServiceProtese/MasterProteses/Master";
import { MasterPeriodontia } from "../SpecificServicePeriodontia/MasterPeriodontia/Master";
import { MasterExtracao } from "../SpecificServiceExtracao/MasterExtracao/Master";

export function SpecificService(){
    
    return(
        <div className={styles.container}>
               <h1>Serviços</h1>
            <MasterImplante />

            <MasterOrto />

            <MasterLimpeza />

            <MasterClareamento />

            <MasterRestauracao />

            <MasterCanal />

            <MasterProteses />

            <MasterPeriodontia />

            <MasterExtracao />
        </div>
        
    )
}