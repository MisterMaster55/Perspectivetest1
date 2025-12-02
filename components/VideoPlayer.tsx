import React, { useState } from 'react';
import { Play, Volume2, Maximize } from 'lucide-react';

export const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800 group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
      {/* Thumbnail / Placeholder */}
      <img 
        src="https://picsum.photos/800/450" 
        alt="Video Thumbnail" 
        className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-30' : 'opacity-60'}`}
      />
      
      {/* Overlay UI */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 z-10">
        <div className="w-full h-full flex items-center justify-center">
          {!isPlaying && (
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full border border-white/30 hover:scale-110 transition-transform duration-300">
               <Play fill="white" className="text-white w-12 h-12 ml-1" />
            </div>
          )}
        </div>
        
        {/* Fake Controls */}
        <div className="flex justify-between items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 p-2 rounded-lg backdrop-blur-sm">
           <div className="flex items-center gap-4 text-xs font-mono">
             <span>{isPlaying ? '01:23' : '00:00'}</span>
             <div className="h-1 w-32 bg-gray-600 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-red-600"></div>
             </div>
             <span>16:40</span>
           </div>
           <div className="flex gap-3">
             <Volume2 size={16} />
             <Maximize size={16} />
           </div>
        </div>
      </div>

      {/* Caption at bottom */}
      <div className="absolute bottom-16 left-0 right-0 text-center">
         <p className="text-white/90 text-sm font-medium bg-black/40 inline-block px-3 py-1 rounded">CC: <span className="underline text-blue-300 cursor-pointer">Start your free trial now</span></p>
      </div>
    </div>
  );
};