import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhatIsBoredBunny from "./components/WhatIsBoredBunny";

function App() {
  return (
    <>
      <header className="min-h-screen">
        <Navbar />

        <Hero />
      </header>

      <main>
        <WhatIsBoredBunny />

        <section className="benefitsandutilities">
          <div className="container">

          </div>
        </section>

        <section className="team">
          <div className="container">

          </div>
        </section>

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
