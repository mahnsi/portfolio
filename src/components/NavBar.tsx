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
    { label: "Guestbook", image: guestbookImage, onClick: () => setActiveSection('Guestbook') },
    { label: "Games", image: gameImage, onClick: () => setActiveSection('Games') }
  ];

  return (
    <footer className="text-white rounded-3xl pt-4 flex justify-center space-x-6 shadow-lg mt-5 backdrop-blur-lg border border-white/10">
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
    </footer>
  );
}
