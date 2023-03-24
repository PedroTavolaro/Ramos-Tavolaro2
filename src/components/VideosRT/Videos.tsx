import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Videos.module.css";

import youtube from "../../assets/contact/youtub.svg";

import implante from "../../assets/videosRT/implante.png";

import atendimento from "../../assets/videosRT/atendimento.png";

import vector from '../../assets/about/Vector.png'
import { BounceLoader } from "react-spinners";
import { FooterCards } from "../FooterCards/FooterCards";

interface ScrollContainerProps {
  contentWidth: number;
  children: React.ReactNode;
}

export const Videos: React.FC<ScrollContainerProps> = ({
  contentWidth,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDown(true);
    setStartX(e.nativeEvent.pageX - containerRef.current?.offsetLeft!);
    setScrollLeft(containerRef.current?.scrollLeft!);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isDown) return;
    const x = e.nativeEvent.pageX - containerRef.current?.offsetLeft!;
    const walk = (x - startX) * 3;
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  const [loading, setLoading] = useState(false);
  const [verificationVideo, setVerificationVideo] = useState(true);
  const [verificationVideo1, setVerificationVideo1] = useState(false);
  const [verificationVideo2, setVerificationVideo2] = useState(false);

  // useEffect(() => {
  //     setLoading(true)
  //         setTimeout(() => {
  //             setLoading(false);
  //         }, 8000);
  //     }, [])

  async function handleVerificationVideo1() {
    // if(verificationVideo1 == true){
    //     setVerificationVideo1(false)

    // }

    if (verificationVideo1 == false) {
      setVerificationVideo1(true);
      setVerificationVideo(false);
      setVerificationVideo2(false);
    }
    console.log(loading);
  }

  function handleVerificationVideo2() {
    if (verificationVideo2 == false) {
      setVerificationVideo1(false);
      setVerificationVideo(false);
      setVerificationVideo2(true);
    }
  }

  return (
    <>
      <div className={styles.containerVideos}>

         <div className={styles.controlImgTwo}>
            <Image src={vector} alt="" className={styles.imgAboutProfile} />
          </div>
        <div className={styles.title}>
          <h1>VIDEOS</h1>
        </div>

        {verificationVideo ? (
          <div className={styles.videosSelected}>
            <iframe
              src="https://www.youtube.com/embed/zFwqE2qOSFo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          ""
        )}

        {loading ? (
          <div className={styles.videosSelectedLoading}>
            <BounceLoader
              size={238}
              color="#36d7b7"
              className={styles.iconLoading}
            />
            <strong>LOADING</strong>
          </div>
        ) : (
          <>
            {verificationVideo1 ? (
              <div className={styles.videosSelected}>
                <iframe
                  src="https://www.youtube.com/embed/xCOCtyfF2Sk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              ""
            )}
          </>
        )}

        {verificationVideo2 ? (
          <div className={styles.videosSelected}>
            <iframe
              src="https://www.youtube.com/embed/zFwqE2qOSFo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          ""
        )}

        <div
          ref={containerRef}
          className={styles.scrollContainer}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className={styles.videosArea}>
            <div className={styles.backgroundVideosArea}>
              <div style={{ width: contentWidth }} className={""}>
                {children}

                <div className={styles.controlVideoArea}>
                  <div className={styles.box}>
                    <div className={styles.controlBox}>
                      <div></div>
                      <Image
                        src={atendimento}
                        alt=""
                        className={styles.videoSmall}
                      />
                    </div>

                    <div className={styles.controlText1}>
                      <div className={styles.controlTextTwo}>
                        <div className={styles.space}></div>
                        <strong className={styles.text}>
                          CONSULTA DE AVALIAÇÃO
                        </strong>
                      </div>
                    </div>

                    <Image
                      src={youtube}
                      alt=""
                      className={styles.logoYoutube}
                    />

                    <div className={styles.footerBox}>
                      <div className={styles.viewVideo}>
                        <div className={styles.spaceTwo}></div>
                        <button
                          className={styles.buttonViewVideo}
                          onClick={handleVerificationVideo2}
                        >
                          <strong className={styles.textViewVideo}>
                            Assistir agora !!!
                          </strong>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={styles.box}>
                    <div className={styles.controlBox}>
                      <div></div>
                      <Image
                        src={implante}
                        alt=""
                        className={styles.videoSmall}
                      />
                    </div>

                    <div className={styles.controlText1}>
                      <div className={styles.controlTextTwo}>
                        <div className={styles.space}></div>
                        <strong className={styles.text}>IMPLANTES</strong>
                      </div>
                    </div>

                    <Image
                      src={youtube}
                      alt=""
                      className={styles.logoYoutube}
                    />

                    <div className={styles.footerBox}>
                      <div className={styles.viewVideo}>
                        <div className={styles.spaceTwo}></div>
                        <button
                          className={styles.buttonViewVideo}
                          onClick={handleVerificationVideo1}
                        >
                          <strong className={styles.textViewVideo}>
                            Assistir agora !!!
                          </strong>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 
                    <div className={styles.box}>
                        <div className={styles.controlBox}>
                            <div>
                           
                            </div>
                            <Image src={limpeza} alt='' className={styles.videoSmall} />
                        </div>

                       
                        <div className={styles.controlText1}>
                            <div className={styles.controlTextTwo}>
                            <div className={styles.space}></div>
                                <strong className={styles.text}>LENTES DE CONTATO <br />E FACETAS</strong>
                            </div>
                        </div>

                        <Image src={youtube} alt='' className={styles.logoYoutube}/>
                    
                    <div className={styles.footerBox}>
                        <div className={styles.viewVideo}>
                            <div className={styles.spaceTwo}></div>
                            <strong className={styles.textViewVideo}>Assistir agora !!!</strong>
                        </div>
                    </div>
                    
                    </div>

                    <div className={styles.box}>
                        <div className={styles.controlBox}>
                            <div>
                            </div>
                            <Image src={clareamento} alt='' className={styles.videoSmall} />
                            
                        </div>

                        
                            <div className={styles.controlText1}>
                                <div className={styles.controlTextTwo}>
                                <div className={styles.space}></div>
                                <strong className={styles.text}>CLAREAMENTO</strong>
                                </div>
                            </div>

                        <Image src={youtube} alt='' className={styles.logoYoutube}/>
                    

                    <div className={styles.footerBox}>
                        <div className={styles.viewVideo}>
                            <div className={styles.spaceTwo}></div>
                            <strong className={styles.textViewVideo}>Assistir agora !!!</strong>
                        </div>
                    </div>
                        
                    </div> 
    */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
        <FooterCards name={"@rtodonto.clinica"} img={youtube} link={"https://www.youtube.com/channel/UCCz2l75InTa0T6JrIrbJPyg"} />

        
      

      <div className={styles.containerVideosTwo}>
        <div className={styles.titleTwo}>
          <h1>RECOMENDAÇÕES</h1>
        </div>

        <div className={styles.recommendationArea}>
          <div
            ref={containerRef}
            className={styles.scrollContainerTwo}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div style={{ width: contentWidth }} className={""}>
              {children}
              <div className={styles.controlRecommendationArea}>
               <div className={styles.a}>
                <div>
                  <iframe
                    src="https://www.youtube.com/embed/xCOCtyfF2Sk"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div>
                  <iframe
                    src="https://www.youtube.com/embed/xCOCtyfF2Sk"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div>
                  <iframe
                    src="https://www.youtube.com/embed/xCOCtyfF2Sk"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div>
                  <iframe
                    src="https://www.youtube.com/embed/xCOCtyfF2Sk"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterCards name={"@rtodonto.clinica"} img={youtube} link={"https://www.youtube.com/channel/UCCz2l75InTa0T6JrIrbJPyg"} />
      </div>
    </>
  );
};
