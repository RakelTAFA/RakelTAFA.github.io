import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="relative">
      <Header />
      <main className="pt-16">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;