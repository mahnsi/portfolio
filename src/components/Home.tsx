import data from '../data.json'; 

export default function Home() {
    const { aboutMe, projects } = data;

    return (
        <div className="flex m-6">
            {/* Image of Me Section */}
            <section className="flex-1 bg-white bg-opacity-10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 items-center justify-center w-1/4">
                <img
                    src="../assets/me.jpg"
                    alt="A picture of me"
                    className="rounded-full w-32 h-32 object-cover border-2 border-white/30 shadow-lg mb-4"
                />
                <h2 className="section-title text-center">{aboutMe.name}</h2>
                <p className="text-white/80 text-center m-2">
                    {aboutMe.subtitle}
                </p>
            </section>



            <div className="">
            {/* Main Content (right side) */}
            <main className="flex-1 space-y-8 ml-4">
                {/* About Me Section */}
                <section className="bg-white bg-opacity-10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6">
                    <h2 className="section-title">About Me</h2>
                    <p className="text-white/80">{aboutMe.content}</p>
                </section>

                {/* Pinned Projects */}
                <section className="bg-white bg-opacity-10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6">
                    <h2 className="section-title">Pinned Projects</h2>
                    <ul className="space-y-3 text-white/80">
                        {projects.filter((project) => project.pinned).map((project, index) => (
                            <li key={index}>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
                                >
                                    {project.name}
                                </a>
                                <p className="text-sm text-white/60">{project.description}</p>
                            </li>
                        ))}
                    </ul>
                 
                    <p className="text-white/80">
                        You can find the source code for this website on my{" "}
                        <a
                            href="https://github.com/mahnsi/portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            GitHub
                        </a>.
                    </p>
                </section>  
            </main>
            </div>


        </div>
    );
}
