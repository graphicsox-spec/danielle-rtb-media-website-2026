import React from 'react';
import { X } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-gold-accent/40 shadow-2xl bg-black">
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <video
          src="https://rtb-media.com/wp-content/uploads/2021/08/Video-Home-page.mp4"
          controls
          autoPlay
          className="w-full h-full object-cover"
        ></video>
      </div>
    </div>
  );
};
