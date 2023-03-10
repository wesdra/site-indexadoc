import { useEffect, useRef, useState } from "react";
import styles from '../../styles/Video.module.css'

interface videoPlayer {
	playing: boolean;
}

function usePlayState($videoRef: any, control: boolean) {

	const [playState, setPlayState] = useState<videoPlayer>({ playing: false })

	useEffect(() => {

		control ? $videoRef.current.play() : $videoRef.current.pause()

	}, [$videoRef, control])

	useEffect(() => {

		playState.playing ? $videoRef.current.play() : $videoRef.current.pause()

	}, [playState.playing, $videoRef])

	function handleTogglePlay() {
		setPlayState({
			...playState,
			playing: !playState.playing,
		})
	}


	return { playState, handleTogglePlay }
}

interface VideoProps {
	control: boolean
}

const Video = (props: VideoProps) => {
	const $videoRef = useRef(null);
	const { playState, handleTogglePlay } = usePlayState($videoRef, props.control)

	return (
		<>
			<div className={styles.video}>
				{!playState.playing ? (
					<button className={styles.btnControlPlay} onClick={handleTogglePlay}>
						<img src={playState.playing ? "/pause.png" : "/play.png"} width={80} alt="Play" />
					</button>
				) : (
					<button className={styles.btnControlPause} onClick={handleTogglePlay} />
				)}
				{/* <button className="btn-pause" onClick={handlePause}>
          Pause
        </button> */}
			</div>
			<video poster="/video-capa.png" width="380" ref={$videoRef}>
				<source src="https://drive.google.com/uc?export=download&id=1CsVa9LM9xa5NfjztmLOKcSJQ5B8xliqc" />
			</video>
		</>
	)
}
export default Video;