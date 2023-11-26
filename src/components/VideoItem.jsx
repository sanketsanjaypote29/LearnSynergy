import React from 'react';
import '../App.css';
import './VideoItem.css'


const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item">
            <img
                alt={video.snippet.title}
                className="video_thumbnail"
                src={video.snippet.thumbnails.medium.url}
            />
    
            <div className="content">
                <div className="header_video">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;