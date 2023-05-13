import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./VideosImplante.module.css";

import youtube from "../../../../../assets/contact/youtub.svg";

import implante from "../../../../../assets/videosRT/implante.png";

import atendimento from "../../../../../assets/videosRT/atendimento.png";

import vector from '../../../../../assets/about/Vector.png'
import { BounceLoader } from "react-spinners";
import { FooterCards } from "../../../../FooterCards/FooterCards";
import { FooterCardsServices } from "@/components/FooterCards/FooterCardsServices/FooterCardsServices";

interface ScrollContainerProps {
  contentWidth: number;
  children: React.ReactNode;
}

export const VideosImplante = () => {
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
              <div  className={""}>

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

                  

                 
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
        <FooterCardsServices name={"@rtodonto.clinica"} img={youtube} link={"https://www.youtube.com/channel/UCCz2l75InTa0T6JrIrbJPyg"} />

        
      

     
    </>
  );
};
