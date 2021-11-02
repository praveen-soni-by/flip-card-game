import React, { useState, useEffect } from "react";
const MissingAudio = require("../assets/sound/card-flip.mp3");

 const useAudio = url => {
    const [audio] = useState(new Audio(MissingAudio));
    const [playing, setPlaying] = useState(true);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

export default useAudio