import { Github } from 'lucide-react';

const projects = [
  {
    title: "FrogDomo",
    description: "Application mobile de domotique, communiquant avec des appareils dans le même réseau local via une API conservant les paramètres.",
    image: "/img/FrogDomo.png",
    tags: ["IoT", "Arduino", "C++", "MongoDB", "Express.js", "Kotlin"],
    github: "https://github.com/RakelTAFA/FrogDomo",
  },
  {
    title: "Localisation Station Essence",
    description: "Application mobile recensant les stations essences ainsi que les informations les concernants (prix du jour, disponibilité...).",
    image: "/img/Station_essence.png",
    tags: ["Android Studio", "Java", "API Open Source"],
    github: "https://github.com/RakelTAFA/Android_Java_Station_Essence",
  },
  {
    title: "Escalade en RA",
    description: "Jeu d'escalade en réalité augmentée. L'ordinateur affiche les prises à aller chercher, un vidéoprojecteur projette les prises, une caméra détecte et transmet les positions.",
    image: "/img/Escalade_en_RA.png",
    tags: ["C++", "Mediapipe", "OpenCV", "Python"],
    github: "https://github.com/simplyyCarlos/ClimbingProject",
  }
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Mes projets
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                    <Github className="w-8 h-8" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}