import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return (
            <VideoItem
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
                video={video}
            />
        );
    });
    return <div className="container_video">{renderedList}</div>;
};

export default VideoList;
