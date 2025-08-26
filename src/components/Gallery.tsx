import { useState } from 'react';
import './gallery.css';
import data from '../data.json'; 

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { gallery } = data;

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % gallery.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + gallery.length) % gallery.length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="gallery-section mb-4">
      <p className="font-sans text-[20px] font-bold " >Gallery of some photos I took - Click to expand!</p>
      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="thumbnail"
            onClick={() => openModal(index)}
          >
            
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <video src={item.src} muted />
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="retro-modal">
          <div className="modal-header">
            <button onClick={closeModal} className="close-btn">X</button>
          </div>
          <div className="modal-content">
            {gallery[currentIndex].type === 'image' ? (
              <img
                src={gallery[currentIndex].src}
                alt={gallery[currentIndex].alt}
              />
            ) : (
              <video
                src={gallery[currentIndex].src}
                controls
                autoPlay
              />
            )}
          </div>
          <div className="modal-controls">
            <button onClick={handlePrev} className="arrow-btn">❮</button>
            <button onClick={handleNext} className="arrow-btn">❯</button>
          </div>
        </div>
      )}
    </section>
  );
}
