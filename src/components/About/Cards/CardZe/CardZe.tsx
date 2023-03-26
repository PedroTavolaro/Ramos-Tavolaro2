import { CheckCircle } from 'phosphor-react';
import styles1 from './CardZe.module.css';
import Image from 'next/image';
import ze from '../../../../assets/about/ze.png'
import ze1 from '../../../../assets/about/ze1.jpeg'

export function CardZe() {
    return(
        <div className={styles1.descriptionAbout}>
       
        <div className={styles1.teacher}>
              <header className={styles1.descriptionTeacherContainer}>
                <span className={styles1.descriptionTeacherText}>
                  <CheckCircle  className={styles1.descriptionTeacherIcon}/>
                  <p className={styles1.descriptionTeacherName}>
                  Dr.José Luiz Tavolaro Silva
                  </p>
                </span>
                <span className={styles1.descriptionTeacherOffice}>
                  DENTISTA
                </span>
              </header>

              <div className={styles1.descriptionTeacherContainerInfo}>
                <div className={styles1.descriptionTeacherImageContainer}>
                  <div className={styles1.descriptionTeacherImageSpace}></div>
                  <Image
                    src={ze1}
                    className={styles1.descriptionTeacherImage}
                    alt=""
                  />
                </div>
               <div className={styles1.textAbout}>
               
                <strong className={styles1.titleAboutProfile}>
                  Implantodontista
                </strong><br />
                <strong className={styles1.titleAboutProfile}>
                  Socio na Ramos Tavolaro
                </strong><br />
                <strong className={styles1.titleAboutProfile}>
                  CRM: ******
                </strong>
               </div>
                
              </div>
            </div>

            
            <div className={styles1.controlText}>
          <Image src={ze} alt="" className={styles1.profile1} />
            <p className={styles1.descriptionProfile}>
            👨🏻‍⚕️ Dr. José Luiz Tavolaro Silva, nascido e criado no interior do Rio de Janeiro,
            veio para Vitória-ES em 2023 para realizar o sonho de ter o seu próprio consultório.
            É cirurgião-dentista, formado pela Faculdade de Odontologia de Valença em 2018, e já atuou em diversas áreas da odontologia.
            É especialista em implantodontia, área pela qual se apaixonou e se dedica a estar em constante evolução, com objetivo de proporcionar
            a melhor experiencia possível ao seus pacientes, além de oferecer os mais inovadores e avançados tratamentos.
            </p>
            
          </div>

          <div className={styles1.controlTextMobile}>
          
            <p className={styles1.descriptionProfileMobile}>
            👨🏻‍⚕️ Dr. José Luiz Tavolaro Silva, nascido e criado no interior do Rio de Janeiro,
            veio para Vitória-ES em 2023 para realizar o sonho de ter o seu próprio consultório.
            É cirurgião-dentista, formado pela Faculdade de Odontologia de Valença em 2018, e já atuou em diversas áreas da odontologia.
            É especialista em implantodontia, área pela qual se apaixonou e se dedica a estar em constante evolução, com objetivo de proporcionar
            a melhor experiencia possível ao seus pacientes, além de oferecer os mais inovadores e avançados tratamentos.
            </p>
            <Image src={ze} alt="" className={styles1.profileMobile} />  
          </div>
        
        </div>
    )
}