import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Video.module.css";

interface videoPlayer {
  playing: boolean;
}

function usePlayState($videoRef: any, control: boolean) {
  const [playState, setPlayState] = useState<videoPlayer>({ playing: false });

  useEffect(() => {
    control ? $videoRef.current.play() : $videoRef.current.pause();
  }, [$videoRef, control]);

  useEffect(() => {
    playState.playing ? $videoRef.current.play() : $videoRef.current.pause();
  }, [playState.playing, $videoRef]);

  // Adicione este efeito colateral para iniciar a reprodução do vídeo automaticamente
  useEffect(() => {
    $videoRef.current.play();
	handleTogglePlay();

  }, [$videoRef]);

  function handleTogglePlay() {
    setPlayState({
      ...playState,
      playing: !playState.playing,
    });
  }

  return { playState, handleTogglePlay };
}

interface VideoProps {
  control: boolean;
}

const Video2 = (props: VideoProps) => {
	const [videoEnded, setVideoEnded] = useState(false);
	const $videoRef = useRef(null);
	const { playState, handleTogglePlay } = usePlayState($videoRef, props.control)
	const handleVideoEnd = () => {
		setVideoEnded(true);
	  };

  return (
    <>
      <div className={styles.video}>
        {!playState.playing ? (
          <button className={styles.btnControlPlay} onClick={handleTogglePlay}>
            <img
              src={playState.playing ? "/pause.png" : "/play.png"}
              width={80}
              alt="Play"
            />
          </button>
        ) : (
          <button
            className={styles.btnControlPause}
            onClick={handleTogglePlay}
          />
        )}
        {/* <button className="btn-pause" onClick={handlePause}>
          Pause
        </button> */}
      </div>
      <video poster="/eventos/img/kamila.jpg" width="380" ref={$videoRef}>
        {/* <source src="https://drive.google.com/uc?export=download&id=1CsVa9LM9xa5NfjztmLOKcSJQ5B8xliqc" /> */}
        <source src="https://mkt.indexadoc.com.br/content/videos/convite-final-whats.mp4" />
      </video>
	  {/* {videoEnded && <button>Seu botão aqui</button>}
	  <button className={styles.btnCloseAndForm}>Seu botão aqui</button> */}
    </>
  );
};
export default Video2;
