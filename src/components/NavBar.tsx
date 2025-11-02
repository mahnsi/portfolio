import homeImage from '../assets/home.png';
import projImage from '../assets/project.png';
import galleryImage from '../assets/gallery.png';
import expImage from '../assets/exp.png';
import guestbookImage from '../assets/guest.png';
import contactImage from '../assets/contact.png';
import gameImage from '../assets/game.png';
import IconButton from "./IconButton";


export default function NavBar({ setActiveSection, 
  }:{
  setActiveSection: (section: string) => void;
 }) {
  
  const buttons = [
    { label: "Home", image: homeImage, onClick: () => setActiveSection('Home') },
    { label: "Projects", image: projImage, onClick: () => setActiveSection('Projects') },
    { label: "Experience", image: expImage, onClick: () => setActiveSection('Experience') },
    { label: "Contact", image: contactImage, onClick: () => setActiveSection('Contact') },
    { label: "Gallery", image: galleryImage, onClick: () => setActiveSection('Gallery') },
    { label: "Guestbook", image: guestbookImage, onClick: () => setActiveSection('Guestbook') }
  ];

  return (
    <footer className="text-white rounded-3xl pt-4 px-4 flex justify-center space-x-6 shadow-lg mt-5 backdrop-blur-lg border border-white/10">
      <div className="flex flex-wrap gap-12">
      {buttons.map((button, index) => (
        <IconButton
          key={index}
          image={button.image}
          label={button.label}
          onClick={button.onClick}
        />
      ))}
    </div>

      {/* muahaha (coming soon) */}
      <div className="group flex flex-col items-center relative peer opacity-30 pointer-events-none">
        <button
          className="w-16 h-16 bg-center bg-no-repeat bg-contain transition-transform duration-300 ease-out hover:scale-150 hover:z-10"
          style={{ backgroundImage: `url(${gameImage})` }}
          aria-label="Games"
        >
        </button>
        <span className="mt-1 text-sm opacity-100"></span>
      </div>
    </footer>
  );
}
