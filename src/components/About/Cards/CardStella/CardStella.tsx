import { CheckCircle } from 'phosphor-react';
import styles1 from './CardStella.module.css';

import stella from '../../../../assets/about/Stella.png'
import stella1 from '../../../../assets/about/Stella1.jpeg'

import Image from 'next/image';

export function CardStella() {
    return(
        <div className={styles1.descriptionAboutTwo}>
  
            <div className={styles1.teacherTwo}>
                <header className={styles1.descriptionTeacherContainer}>
                  <span className={styles1.descriptionTeacherText}>
                    <CheckCircle className={styles1.descriptionTeacherIcon}/>
                    <p className={styles1.descriptionTeacherName}>
                    Dr.Stella Ramos
                    </p>
                  </span>
                  <span className={styles1.descriptionTeacherOffice}>
                    DENTISTA
                  </span>
                </header>

                <div className={styles1.descriptionTeacherContainerTwo}>
                  <div className={styles1.descriptionTeacherImageContainer}>
                    <div className={styles1.descriptionTeacherImageSpace}></div>
                    <Image
                      className={styles1.descriptionTeacherImage}
                      src={stella1}
                      alt=""
                    />
                  </div>
                  <div className={styles1.textAbout}>
                  
                  
                  <strong className={styles1.titleAboutProfile}>
                    Sócia majoritária na Ramos Tavolaro
                  </strong><br />
                  <strong className={styles1.titleAboutProfile}>
                    CRM: ******
                  </strong>
                  </div>
                  
                </div>
              </div>
            

            <div className={styles1.controlTextTwo}>
              <p className={styles1.descriptionProfileTwo}>
              Dra Stella Ramos, formou no ano de 2018 pela faculdade FAESA, 
              pós graduanda em ortodontia pela faculdade São Leopoldo Mandic.
              Trabalhou no Rio de Janeiro por 3 anos e agora voltou para Vitoria 
              e fundou a Ramos Tavolaro Odontologia junto com seu sócio , 
              um sonho que tinha desde o início da faculdade. 
              Natural de Vila Velha, no tempo que morou no Rio 
              se encantou com o lugar mas sabia que pertencia ao ES, 
              então agora está aqui para cuidar de vocês com todo profissionalismo 
              e carinho que merecem!
              </p>
              <div className={styles1.controlImgProfile}>
                <Image src={stella} alt="" className={styles1.profileTwo} />
              </div>
            </div>
          </div>
    )
}