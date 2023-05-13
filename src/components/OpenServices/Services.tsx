import styles from "./Services.module.css";
import Image from "next/image";

import implante from "../../assets/servicos/implante.png";

import Lentes from "../../assets/servicos/lentes.png";

import clareamento from "../../assets/servicos/clareamento.png";

import extracao from "../../assets/servicos/extracao.png";
import limpeza from "../../assets/servicos/limpeza.png";
import ortodontia from "../../assets/servicos/ortodontia.png";
import restauracao from "../../assets/servicos/restauracao.png";
import canal from "../../assets/servicos/canal.png";
import proteses from "../../assets/servicos/proteses.png";
import periodontia from "../../assets/servicos/periodontia.png";

import serviceImgBg from "../../assets/about/VectorDente.png";
import Link from "next/link";

export function Services() {
  return (
    <div className={styles.containerService}>
      <h1 className={styles.title}>CONHEÇA NOSSOS SERVIÇOS</h1>

      <div className={styles.controlBackground}>
        <Image
          src={serviceImgBg}
          alt=""
          className={styles.imgBackgroundServices}
        />
      </div>


      <div className={styles.buttonViewServices}>
       <div>
        
       <strong><Link href='/services'>+ Descrições</Link></strong> 
       </div>
      </div>
      
      <div className={styles.services}>
      
        <div className={styles.controlServices}>
          
          <a href={'/services/#implante'}>
          <div className={styles.controlImg}>
            <Image src={implante} alt="" className={styles.imgService} />
              
              <div className={styles.controlTextTwo}>
                <div className={styles.space}></div>
                <strong className={styles.text}>IMPLANTES</strong>
              </div>
          </div>
          </a>
        </div>

        <div className={styles.controlServices}>
          <a href={'/services/#orto'}>
          <div className={styles.controlImg}>
            <Image src={ortodontia} alt="" className={styles.imgService} />
            
              <div className={styles.controlTextTwo}>
                <div className={styles.space}></div>
                <strong className={styles.text}>APARELHOS<br />ORTODÔNTICOS</strong>
              </div>
            
          </div>
          </a>
        </div>

        <div className={styles.controlServices}>
        <a href={'/services/#limpeza'}>
          <div className={styles.controlImg}>
            <Image src={limpeza} alt="" className={styles.imgService} />

            
              <div className={styles.controlTextTwo}>
                <div className={styles.space}></div>
                <strong className={styles.text}>LIMPEZA</strong>
              </div>
            
          </div>
          </a>
        </div>

        <div className={styles.controlServices}>
        <a href={'/services/#clareamento'}>
          <div className={styles.controlImg}>
            <Image src={clareamento} alt="" className={styles.imgService} />
            
              <div className={styles.controlTextTwo}>
                <div className={styles.space}></div>
                <strong className={styles.text}>CLAREAMENTO</strong>
              </div>
            
          </div>
          </a>
        </div>

        {/* __________________________ 4 serviços ^ ______________ */}

        <div className={styles.controlServices}>
        <a href={'/services/#restauracao'}>
          <div className={styles.controlImg}>
            <Image src={restauracao} alt="" className={styles.imgService} />
            
              <div className={styles.controlTextTwo}>
                <div className={styles.space}></div>
                <strong className={styles.text}>RESTAURAÇÕES</strong>
              </div>
            
          </div>
          </a>
        </div>

        <div className={styles.controlServices}>
        <a href={'/services/#canal'}>
          <div className={styles.controlImg}>
            <Image src={canal} alt="" className={styles.imgService} />
            
              <div className={styles.controlTextTwo}>
                <div className={styles.space}></div>
                <strong className={styles.text}>CANAL</strong>
              </div>
            
          </div>
          </a>
        </div>

        <div className={styles.controlServices}>
        <a href={'/services/#proteses'}>
          <div className={styles.controlImg}>
            <Image src={proteses} alt="" className={styles.imgService} />
            
              <div className={styles.controlTextTwo}>
                <div className={styles.space}></div>
                <strong className={styles.text}>PRÓTESES</strong>
              </div>
            
          </div>
          </a>
        </div>

        <div className={styles.controlServices}>
        <a href={'/services/#periodontia'}>
          <div className={styles.controlImg}>
            <Image src={periodontia} alt="" className={styles.imgService} />
            
              <div className={styles.controlTextTwo}>
                <div className={styles.space}></div>
                <strong className={styles.text}>PERIODONTIA</strong>
              </div>
            
          </div>
          </a>
        </div>

        {/* __________________________ 4 serviços ^ ______________ */}

        <div className={styles.controlServices}>
        <a href={'/services/#extracao'}>
          <div className={styles.controlImg}>
            <Image src={extracao} alt="" className={styles.imgService} />
            
              <div className={styles.controlTextTwo}>
                <div className={styles.space}></div>
                <strong className={styles.text}>EXTRAÇÃO</strong>
              </div>
            
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}
