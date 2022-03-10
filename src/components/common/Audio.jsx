import React, { useState, useRef, useEffect } from "react";
import arrAudio from "../../assets/data/audio";

const Audio = () => {
  const [audio, setAudio] = useState(5);
  const [active, setActive] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(0);
  const [mute, setMute] = useState(false);
  const refAudio = useRef(null);
  const btnNext = useRef(null);
  const refRepeat = useRef(null);
  const refVolume = useRef(null);
  const refVolumeIcon = useRef(null);

  useEffect(() => {
    setAudio(5);
    setActive();
    console.log(refAudio.current.ended);
  }, []);
  useEffect(() => {
    // handleEvent.setVolume();
    // handleEvent.setRepeat();
    handleEvent.toggleAudio();
    handleEvent.setVolume();
  });

  const next = () => {
    audio === arrAudio.length - 1 ? setAudio(0) : setAudio(audio + 1);
    setActive(true);
  };
  const prev = () => {
    audio === 0 ? setAudio(arrAudio.length - 1) : setAudio(audio - 1);
    setActive(true);
  };
  const handleEvent = {
    toggleAudio() {
      active ? refAudio.current.play() : refAudio.current.pause();
    },
    setRepeat() {
      repeat ? setAudio(audio) : setAudio(audio + 1);
      refAudio.current.play();
    },
    setVolume() {
      if (volume === 0) {
        // refVolume.current.classList.toggle("active");
        setMute(true);
      } else {
        setMute(false);

        return (refAudio.current.volume = volume / 100);
      }
    },
    start: function () {
      handleEvent.setRepeat();
    },
  };
  // handleEvent.start();
  return (
    <div className="audio">
      {arrAudio.map(
        (e, id) =>
          audio === id && (
            <React.Fragment key={id}>
              <audio
                ref={refAudio}
                // autoPlay={true}
                src={e.audio}
                // controls
                volume="100"
                type="audi0/mp3"
              ></audio>
              <div className="audio__box">
                <button
                  onClick={() => setActive(!active)}
                  className="btn btn__audio"
                >
                  {active ? (
                    <i className="bx bx-pause"></i>
                  ) : (
                    <i className="bx bx-play"></i>
                  )}
                </button>
              </div>
              <div
                ref={refVolume}
                className={`audio__volume ${refVolume ? "active" : ""}`}
                // onClick={() => refVolume.current.classList.toggle("active")}
              >
                <div
                  ref={refVolumeIcon}
                  className={`volume__icon ${mute ? "" : "active"}`}
                  onClick={() => handleEvent.setVolume()}
                >
                  <i className="bx bx-volume-mute volume__mute"></i>
                  <i className="bx bx-volume-full volume__active"></i>
                </div>
                <input
                  className="percent__volume"
                  type="range"
                  min={0}
                  step="1"
                  max={100}
                  onChange={(e) => setVolume(e.target.value)}
                ></input>
              </div>
              <button
                ref={refRepeat}
                className={`audio__repeat ${repeat ? "active" : ""}`}
                onClick={() => setRepeat(!repeat)}
              >
                <i className="bx bx-repost"></i>
              </button>
              <input
                className="audio__progress"
                type="range"
                min={0}
                step="1"
                max="100"
              ></input>
              <button className="audio__info">
                <i className="bx bx-info-circle"></i>
                <h3 className="audio__title">{e.title}</h3>
              </button>
              <button className="btn btn__next" onClick={next} ref={btnNext}>
                <i className="bx bx-skip-next"></i>
              </button>
              <button className="btn btn__prev" onClick={prev}>
                <i className="bx bx-skip-previous"></i>
              </button>
            </React.Fragment>
          )
      )}
    </div>
  );
};

export default Audio;
