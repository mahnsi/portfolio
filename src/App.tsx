import { useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Guestbook from './components/Guestbook';
import Games from './components/Games';
import NavBar from './components/NavBar';
import MusicPlayer from './components/MusicPlayer';
import "./style/globals.css";

export default function App() {
  const [activeSection, setActiveSection] = useState('Home'); // to track active section (icon clicked) . this is whats passed down to NavBar

  const renderContent = () => {
    switch (activeSection) {
      case 'Home':
        return <Home />;
      case 'Projects':
        return <Projects />;
      case 'Experience':
        return <Experience />;
      case 'Gallery':
        return <Gallery />;
      case 'Contact':
        return <Contact />;
      case 'Guestbook':
        return <Guestbook />;
      case 'Games':
        return <Games />;
      default:
        return <Home />;
    }
  };

  return (
    <main>
      <div className="h-dvh bg-portfolio-bg bg-cover bg-center bg-no-repeat font-sans flex flex-col items-center justify-center p-8 relative">
         {/* section for react label and music icon */}
        <div className="flex justify-between w-full px-4">
          <div className="text-white text-sm vertical-align">
            Made with React + TailwindCSS
          </div>
          {/* music player pop up in corner*/}
          <MusicPlayer />
        </div>

        {/* Main Content */}
        <div className="mt-8 pb-4 backdrop-blur-lg text-white rounded-xl shadow-lg w-full max-w-5xl border border-white/30">
      
          {/* header part "Welcome to MahnsiOS" */}
          <header className="m-8 text-center">
            <h1 className="section-title text-4xl">Welcome to MahnsiOS</h1>
            <p className="text-lg text-white/80 italic drop-shadow-sm"> </p>
          </header>
          {/* content part */}
          <div className="grid grid-cols-1 gap-8 h-[500px] overflow-y-auto px-4">
            {renderContent()}
          </div>
        </div>

        {/* Nav Bar */}
        <NavBar setActiveSection={setActiveSection} />
      </div>
    </main>
  );
}
