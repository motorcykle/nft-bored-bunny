import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhatIsBoredBunny from "./components/WhatIsBoredBunny";
import BenefitsAndUtilities from './components/BenefitsAndUtilities';
import Team from './components/Team';

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

        <section className="roadmap">
          <div className="container">

          </div>
        </section>

        <section className="faq">
          <div className="container">

          </div>
        </section>

      </main>


      <footer>
        <div className="container">

          
        </div>
      </footer>
    </>
  );
}

export default App;
