import React from 'react';
import Video from 'next-video';

interface VideoPlayerProps {
    src: string;
    width?: number;
    height?: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, width = 600, height = 400 }) => {
    return (
        <div className="flex items-center gap-x-4 mb-6">
            <Video src={src} width={width} height={height} controls className="rounded-xl border-2" />
        </div>
    );
};

export default VideoPlayer;
