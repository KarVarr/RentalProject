import Footer2 from "@/components/footers/Footer2";

import Header8 from "@/components/headers/Header8";
import Home8 from "@/components/homes/home-8";
import Hero1 from "@/components/homes/home-8/heros/Hero1";
import Hero4 from "@/components/homes/home-8/heros/Hero4";
// import { modernMultipage } from "@/data/menu";
import HeaderWithLocale from "@/components/headers/HeaderWithLocale";


export const metadata = {
  title:
    "Home 8 Typed Text MultiPage || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home8TypedTextMultiPage() {
  return (
    <>
      <div className="theme-modern">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            {/* <Header8 links={modernMultipage} /> */}
            <HeaderWithLocale />
          </nav>
          <main id="main">
            <section
              className="home-section parallax-mousemove-scene scrollSpysection"
              id="home"
            >
              <Hero4 />
            </section>

            <Home8 />
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
