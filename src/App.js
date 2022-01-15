import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhatIsBoredBunny from "./components/WhatIsBoredBunny";
import BenefitsAndUtilities from './components/BenefitsAndUtilities';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header className="min-h-screen">
        <Navbar />

        <Hero />
      </header>

      <main>
        <WhatIsBoredBunny />

        <BenefitsAndUtilities />

        <Team />

        <Roadmap />

        <Faq />
      </main>


      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
