import React from 'react';

const VideoDetail = ({video}) => {
  if(!video){
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;

  // backtick for string interpolation
  const url = 'http://' + 'www.youtube.com/embed/' + videoId;
    console.log(url);
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-response-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
