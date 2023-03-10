// import styles from './About.module.css';

import { EmblaOptionsType } from 'embla-carousel-react'

// import './Carousel/CSS/base.module.css'
import styles from './Carousel/CSS/sandbox.module.css'
// import './Carousel/CSS/embla.module.css'
import EmblaCarousel from './Carousel/index/EmblaCarousel';

import styles1 from './About.module.css'
import Image from 'next/image';
import vector from '../../assets/about/Vector.png'
import vector2 from '../../assets/about/Vector2.png'
import vector3 from '../../assets/about/Vector3.png'
import stella from '../../assets/about/Stella.png'
import stella1 from '../../assets/about/Stella1.jpeg'
import ze from '../../assets/about/ze.png'
import ze1 from '../../assets/about/ze1.jpeg'

import profile2 from '../../assets/about/profile2.png'
import { CheckCircle } from 'phosphor-react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

import { Whats } from '@/components/Whats/Whats';

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export function About(){

  
    return (
      <>
           
        <div className={styles1.titleAbout}>
          <h1>NOS CONHEÇA MELHOR</h1>
          
        </div>

   

        <div className={styles.sandbox}>
          <section className={styles.sandbox__carousel}>
              
        
            <EmblaCarousel 
            slides={SLIDES} 
            options={OPTIONS} 
            
            
            />
          </section>
        </div>


        <div className={styles1.descriptionAbout}>
          <div className={styles1.controlImgTwo}>
            <Image src={vector} alt="" className={styles1.imgAboutProfile} />
          </div>


          <div className={styles1.teacherTwo}>
              <header className={styles1.descriptionTeacherContainer}>
                <span className={styles1.descriptionTeacherText}>
                  <CheckCircle size={20} className={styles1.descriptionTeacherIcon}/>
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

        <div className={styles1.teacher}>
              <header className={styles1.descriptionTeacherContainer}>
                <span className={styles1.descriptionTeacherText}>
                  <CheckCircle size={20} className={styles1.descriptionTeacherIcon}/>
                  <p className={styles1.descriptionTeacherName}>
                  Dr.José Luiz Tavolaro Silva
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

        <div className={styles1.descriptionAbout}>
          <div className={styles1.controlImg}>
            <Image src={vector3} alt="" className={styles1.imgAboutProfileTwo} />
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
        </div>


        

       
      </>
    );
}