import { useEffect, useRef, useState } from "react";
import { site } from "../content/site";
import { useDocumentVisibility } from "../hooks/useDocumentVisibility";
import { InteractivePreview } from "./InteractivePreview";

type DemoTab = (typeof site.demo.tabs)[number];

type DemoPlayerProps = {
  tab: DemoTab;
  active: boolean;
};

export function DemoPlayer({ tab, active }: DemoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const visibility = useDocumentVisibility();
  const [playing, setPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const canUseVideo = site.demo.assetsReady && !videoFailed;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!active || visibility === "hidden") {
      video.pause();
    }
  }, [active, visibility]);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  if (!canUseVideo) {
    return <InteractivePreview label={tab.label} ratio={tab.ratio} />;
  }

  return (
    <div className="video-shell">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        poster={tab.poster}
        onError={() => setVideoFailed(true)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      >
        <source src={tab.video} type="video/mp4" />
      </video>
      <button type="button" className="play-toggle" onClick={togglePlayback} aria-pressed={playing}>
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
