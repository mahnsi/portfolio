import data from '../data.json';

export default function Contact() {
  const { contact } = data;

  return (
    <section className="section-w-taskbar">
      <div className="section-taskbar" >
          Contact and Links
          <div className="flex gap-1.5">
            <div className="task-btn"></div>
            <div className="task-btn"></div>
            <div className="task-btn"></div>
          </div>
        </div>
      <p className="dark-blue-font text-[14px] mb-4 text-center">{contact.message}</p>
      <ul className="flex justify-center space-x-6">
        {contact.links.map(({ link, img }, index) => (
          <li className="size-32" key={index}>
            <a
              href={link} target="_blank" rel="noopener noreferrer">
              <div ><img src={img} alt="Icon" className="size-full hover:opacity-80" /></div>
          
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
