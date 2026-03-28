import Header from "./section/Header";
import AboutSection from "./section/AboutSection";
import CommunitySection from "./section/CommunitySection";
import Steps from "./section/Steps";
import Membership from "./section/Membership";
import Testimonial from "./section/Testimonial";
import Footer from "./section/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section className="px-200 py-800 md:px-400 md:py-1000 xl:py-1200">
          <div className="mx-auto flex max-w-292.5 flex-col gap-16 md:gap-20 xl:gap-32">
            <AboutSection />
            <CommunitySection />
          </div>
        </section>
        <section className="px-200 pb-800 md:px-400 md:pb-1000 xl:pb-1200">
          <div className="mx-auto max-w-292.5">
            <Steps />
          </div>
        </section>
        <section className="px-200 pb-800 md:px-400 md:pb-1000 xl:pb-1200">
          <div className="mx-auto max-w-[970px]">
            <Membership />
          </div>
        </section>
        <section className="px-200 pb-800 md:px-400 md:pb-1000 xl:pb-1200">
          <Testimonial />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
