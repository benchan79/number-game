import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";

function DefaultPage() {
  const [watchVideo, setWatchVideo] = useState(false);
  return (
    <div style={{ textAlign: "center", marginLeft: 40, fontSize: 25 }}>
      <p>You have reached the end of the internet!</p>
      <Link to="/number-game/">
        Return Home or...
      </Link>
      <p />
      <Button
        onClick={() => setWatchVideo(true)}
        label="Watch an interesting video"
      />
      <p />
      {watchVideo && (
        <video
          controls
          autoPlay
          muted={false}
          src="https://fwesh.yonle.repl.co/"
        />
      )}
    </div>
  );
}

export default DefaultPage;
