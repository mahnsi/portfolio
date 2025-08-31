import { useState, useEffect, useRef } from 'react';
import IconButton from './IconButton';
import MPimage from '../assets/musicplayer.png';
import spinningCD from '../assets/spinningCD.mp4';
import data from '../data.json';
import '../style/music.css';

interface Song {
  title: string;
  artist: string;
  file: string;
  duration: number;
}

export default function MusicPlayer() {
  const [isMusicPlayerVisible, setMusicPlayerVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [songs, setSongs] = useState<Song[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // draggable popup state
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setSongs(data.songs);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songs[currentSongIndex]?.file || '';
      if (isPlaying) {
        audioRef.current.play();
      }
      setCurrentTime(0);
    }
  }, [currentSongIndex, songs, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')} : ${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      audio.addEventListener('timeupdate', updateTime);
      return () => audio.removeEventListener('timeupdate', updateTime);
    }
  }, []);

  // draggable
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const rect = popupRef.current?.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - (rect?.left || 0),
      y: e.clientY - (rect?.top || 0),
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div>
      {/* Music Player Button */}
      <div className="flex items-center justify-end w-full px-4">
      <div style={{ opacity: 0.5, pointerEvents: 'none' }}>
      <IconButton
        image={MPimage}
        label={"Music Player"}
        onClick={() => setMusicPlayerVisible(true)}
      />
    </div>
      </div>

      {/* Music Player Popup */}
      {isMusicPlayerVisible && (
        <div
          className="retro-popup"
          ref={popupRef}
          style={{
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="retro-header">
            <h3>Now Playing</h3>
            <button
              onClick={() => setMusicPlayerVisible(false)}
              className="close-btn"
            >
              X
            </button>
          </div>
          <video
            src={spinningCD}
            autoPlay
            muted
            loop
            className="spinning-cd"
          ></video>
          <div className="music-container">
            {songs.length > 0 && (
              <>
                <p className="music-title-name">{songs[currentSongIndex].title}</p>
                <p className="music-artist-name">{songs[currentSongIndex].artist}</p>
                <div className="music-timer-div">
                  <p className="music-current-time">{formatTime(currentTime)}</p>
                  <p>/</p>
                  <p className="music-total-length">
                    {formatTime(songs[currentSongIndex].duration)}
                  </p>
                </div>
                <div className="music-controllers">
                  <i className="fa-solid fa-backward" onClick={handlePrev}></i>
                  <i
                    className={`fa-solid ${
                      isPlaying ? 'fa-circle-pause' : 'fa-circle-play'
                    }`}
                    onClick={togglePlay}
                  ></i>
                  <i className="fa-solid fa-forward" onClick={handleNext}></i>
                </div>
              </>
            )}
          </div>
          <audio ref={audioRef}></audio>
        </div>
      )}
    </div>
  );
}
