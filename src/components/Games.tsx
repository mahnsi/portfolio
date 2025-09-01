import data from '../data.json';
export default function Games() {
  const { games } = data;
  
  return (
    <section className="bg-white bg-opacity-10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 mb-4 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Games</h2>

      <section className="border h-[500px]">

        <ul className="flex justify-center space-x-6">
        {games.map(({ name, img }, index) => (
          <li key={index}>
            
            <button className="m-4 flex flex-col items-center hover:opacity-80 focus:outline-none">
              <img src={img} alt={name} className="w-20 h-20" />
              <p className="text-white/80 mt-2">{name}</p>
            </button>

          </li>
        ))}
      </ul>

      </section>

    </section>
  );
  }