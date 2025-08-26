import data from '../data.json';

export default function Contact() {
  const { contact } = data;

  return (
    <section className="bg-white bg-opacity-10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 mb-4 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Contact and Links</h2>
      <p className="text-white/80 mb-4">{contact.message}</p>
      <ul className="flex justify-center space-x-6">
        {contact.links.map(({ link, img }, index) => (
          <li key={index}>
            <a
              href={link} target="_blank" rel="noopener noreferrer">
              <img src={img} alt="Icon" className="w-20 h-20 hover:opacity-80" />
          
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
