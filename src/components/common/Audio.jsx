import React, { useState, useRef, useEffect } from "react";
import arrAudio from "../../assets/data/audio";

const Audio = () => {
  const [audio, setAudio] = useState(arrAudio.length - 1);
  const [active, setActive] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [showAudio, setShowAudio] = useState(false);
  const [volume, setVolume] = useState(50);
  const [mute, setMute] = useState(false);

  const refAudio = useRef(null);
  const btnNext = useRef(null);
  const refRepeat = useRef(null);
  const refVolumeIcon = useRef(null);
  const refProgress = useRef(null);
  // console.log(refAudio.current);
  useEffect(() => {
    setAudio(arrAudio.length - 1);
    setActive();
  }, []);
  useEffect(() => {
    handleEvent.toggleAudio();
    handleEvent.setVolume();
    handleEvent.setMute();
    handleEvent.setRepeat();
  });
  useEffect(() => {
    refAudio.current.onended = () => {
      next();
    };
  });
  useEffect(() => {
    refAudio.current.ontimeupdate = () => {
      if (refAudio.current) {
        const progressPercent = Math.floor(
          (refAudio.current.currentTime / refAudio.current.duration) * 100
        );
        refProgress.current.value = progressPercent;
      }
    };
  });
  useEffect(() => {
    handleEvent.setSeekTime();
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
      refAudio.current.loop = repeat;
    },
    setVolume() {
      refAudio.current.volume = volume / 100;
    },
    setMute() {
      refAudio.current.muted = mute;
    },
    setSeekTime() {
      refProgress.current.oninput = (e) => {
        const seekTime = (refAudio.current.duration / 100) * e.target.value;
        refAudio.current.currentTime = seekTime;
        console.log(seekTime);
      };
    },
    showAudio() {},
  };
  // arrAudio.map((e) => console.log(e));
  return (
    <div className={`audio ${showAudio ? "active" : ""}`}>
      <i
        onClick={() => setShowAudio(!showAudio)}
        className="bx bx-chevrons-down bx-flashing audio__chervon"
      ></i>
      {arrAudio.map(
        (e, id) =>
          audio === id && (
            <React.Fragment key={id}>
              <audio
                ref={refAudio}
                src={e.audio}
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
              <div className={`audio__volume`}>
                <div
                  ref={refVolumeIcon}
                  className={`volume__icon ${mute ? "" : "active"}`}
                  onClick={() => setMute(!mute)}
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
                ref={refProgress}
                className="audio__progress"
                type="range"
                min={0}
                step="1"
                max="100"
                defaultValue={0}
              ></input>
              <button className="audio__info">
                <i className="bx bx-info-circle"></i>
                <h3 className="audio__title">
                  <i className="bx bx-music"></i>: {e.title}.
                </h3>
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
