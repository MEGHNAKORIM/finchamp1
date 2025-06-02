// src/components/VideoPlayer.tsx
import React from 'react';

interface VideoPlayerProps {
    src: string;
    width?: string;
    height?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, width = "600", height = "400" }) => {
    return (
        <div>
            <video width={width} height={height} controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
