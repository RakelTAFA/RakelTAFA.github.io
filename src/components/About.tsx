import { User, Briefcase, GraduationCap, Download } from 'lucide-react';


export function About() {

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/files/CV_Rakel_TAFA.pdf';
    link.download = 'CV_Rakel_TAFA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Qui suis-je ?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <User className="w-8 h-8 text-blue-500" />
              <div>
                <h3 className="font-semibold text-xl mb-2">À propos</h3>
                <p className="text-gray-600">Je suis Rakel TAFA, un jeune de 21 ans passionné de technologies numériques qui aime les nouveautés et les découvertes.
                  <br /><br />Ma rigueur, mon esprit d'équipe et ma curiosité sont mes atouts majeurs. C'est d'ailleurs grâce à cette dernière que j'ai découvert le monde de l'informatique, d'abord en autodidacte, avant de prendre la décision d'en faire mon métier.
                  <br /><br />Je pratique régulièrement du sport, seul ou en groupe, et j'aime me cultiver sur des sujets contemporains.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <Briefcase className="w-8 h-8 text-green-500" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Expériences professionnelles</h3>
                <ul className="text-gray-600 list-disc">
                  <li>Alternance chez CISA INFORMATIQUE, migration technologique complète de l'application web de l'ERP vers la technologie Blazor (Septembre 2023 - Aout 2024)</li>
                  <li>Stage chez CISA INFORMATIQUE, réalisation d'une interface graphique de visualisation de workflows pour l'ERP en C# .NET (Avril 2023 - Juin 2023)</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <GraduationCap className="w-8 h-8 text-purple-500" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Formation</h3>
                <ul className="text-gray-600 list-disc">
                  <li>BUT Informatique, Université Claude Bernard Lyon 1 (2021-2024)</li>
                  <li>Bac Général spécialité Mathématiques mention bien et DNL Euro Allemand (2018-2021)</li>
                  <li>Formation à la RGPD de la CNIL (2023)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <button className="flex mt-10 justify-self-center items-start space-x-4 p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
              onClick={downloadCV}>
              <Download className="w-8 h-8 text-blue-500" />
              <div className="bg-primary">
                <h3 className="font-semibold text-xl mb-2">Mon CV</h3>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}