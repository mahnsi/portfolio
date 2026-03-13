import { useState } from "react";
import data from "../data.json";

export default function Games() {
    const { games } = data;
    const [activeGame, setActiveGame] = useState<string | null>(null);

    return (
      <section className="section-w-taskbar flex flex-col h-full">
        <div className="section-taskbar">
          Games
          <div className="flex gap-1.5">
            <div className="task-btn"></div>
            <div className="task-btn"></div>
            <div className="task-btn"></div>
          </div>
        </div>
  
        <ul className="flex justify-center mt-4">
            {games.map(({ name, img, url }, index) => (
            <li className="size-24"  key={index}
                onClick={() => setActiveGame(url)}>
                <img src={img} alt={name} className="size-full hover:opacity-80" />
            </li>
            ))}
        </ul>

      {/* Game player */}
      {activeGame && (
        <div className="flex flex-col flex-1 mx-2">

          <div className="section-taskbar flex justify-end p-1">
                <button
                onClick={() => setActiveGame(null)}
                className="task-btn-close">
                </button>
          </div>

          <iframe
            src={activeGame}
            title="Game"
            className="flex-1 w-full"
          />
        </div>
      )}

    </section>
    );
  }

