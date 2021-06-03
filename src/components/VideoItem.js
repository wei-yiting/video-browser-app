import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      key={video.id.videoId}
      className="item video-item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="ui image" />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
