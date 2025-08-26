import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import NavBar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  const [activeSection, setActiveSection] = useState('Home'); // State to track active section

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
          {/* Music player pop up*/}
          <MusicPlayer />
        </div>

        {/* Main Content */}
        <div className="mt-8 backdrop-blur-lg text-white rounded-xl shadow-md w-full max-w-5xl border border-white/30 relative">
      
          {/* header part ("mahnsis portfolio")*/}
          <header className="m-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">Mahnsi's Portfolio</h1>
            <p className="text-lg text-white/80 italic drop-shadow-sm">Welcome to MahnsiOS</p>
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
