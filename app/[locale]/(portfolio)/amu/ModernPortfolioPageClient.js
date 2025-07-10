'use client';

import Footer2 from "@/components/footers/Footer2";
// import Header8 from "@/components/headers/Header8";
// import Portfolio from "@/components/homes/home-8/Portfolio";
import ParallaxContainer from "@/components/common/ParallaxContainer";
// import { modernMultipage } from "@/data/menu";
import HeaderWithLocale from "@/components/headers/HeaderWithLocale";

// import dynamic from "next/dynamic";
// import Image from "next/image";
import Link from "next/link"
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import AnimatedText from "@/components/common/AnimatedText";
import Gallery1 from "@/components/gallery/Gallery1";

// import { Playfair_Display } from 'next/font/google'; //звезда *
// import { Inter } from 'next/font/google';
// import { Russo_One } from 'next/font/google';
// import { Dela_Gothic_One, Great_Vibes } from 'next/font/google';
// import { Roboto } from 'next/font/google';

// import ContentBlock from "@/components/portfolio/contentBlock";
// import styles from './modern-portfolio.module.css';
// import gridStyles from './grid.module.css'


// const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], });
// const inter = Inter({ subsets: ['latin'] });
// const roboto = Roboto({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'] });
// const russoOne = Russo_One({  weight: '400',  subsets: ['latin'],});
// const delaGothicOne = Dela_Gothic_One({ subsets: ['latin'], weight: '400' });
// const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

// const onePage = false;
// const dark = false;

export default function ModernPortfolioPageClient() {
  const params = useParams();
  const locale = params.locale;
  const t = useTranslations();
  
  return (
    <>
      <div className={`theme-modern`}>
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            {/* <Header8 links={modernMultipage} /> */}
            <HeaderWithLocale locale={locale} />
          </nav>{" "}
          <main id="main">
            <ParallaxContainer
              className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/portfolio/navAmu.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative">
                <div className="mb-20">
                  <div className="mb-10">
                    <Link
                      href={`/${locale}/home`}
                      className="link-hover-anim align-middle"
                      data-btn-animate="y"
                    >
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          <i
                            className="icon-arrow-left2 size-14"
                            aria-hidden="true"
                          ></i>{" "}
                          {t('home.buttonBackToHome')}
                        </span>
                        <span className="btn-animate-y-2" aria-hidden="true">
                          <i
                            className="icon-arrow-left2 size-14"
                            aria-hidden="true"
                          ></i>{" "}
                          {t('home.buttonBackToHome')} 
                        </span>
                      </span>
                    </Link>
                  </div>
                  <hr className="white mt-0 mb-0" />
                </div>
                <div className="row">
                  <div className="col-9 col-sm-8">
                    <h1 className="hs-title-5 font-alt overflow-hidden mb-0" style={{ paddingTop: '15px' }}>
                      <span className="d-block wow fadeRotateIn">
                        {" "}
                        {t('amu.title')} {" "}
                      </span>
                      
                      {/* <span className="d-block text-end wow fadeRotateIn">
                      {t('amu.title2')}
                      </span> */}
                    </h1>
                  </div>
                </div>
              </div>
              {/* Scroll Down */}
              <div
                className="local-scroll scroll-down-wrap-2 d-none d-lg-block wow fadeInUp"
                data-wow-offset={0}
              >
                <div className="full-wrapper text-end">
                  <span className="scroll-down-2">
                    {/* <Image
                      width="50"
                      height="73"
                      src="/assets/images/demo-modern/arrow-down-1-white.svg"
                      alt="Scroll Down"
                    /> */}
                    <i className="icon-arrow-down1 size-22 scroll-icon-down" aria-hidden="true" />
                  </span>
                </div>
              </div>
              {/* End Scroll Down */}
            </ParallaxContainer>
            <section className="page-section pt-90 pb-50">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <h1 className="hs-title-1 mb-0">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text={t('amu.animationTitle')} />
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </section>

            <>
              <>
                {/* Section */}
                <section className="page-section pt-0">
                  <Gallery1 itemsLength={4} parantClass="col-lg-8 offset-lg-2" />
                </section>
                {/* End Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0" />
              </>

              {/* End Divider */}
              {/* Call Action Section */}
              {/* <section className="page-section">
                <div className="container position-relative"> */}
                  {/* Decorative Waves */}
                  {/* <div className="position-relative">
                    <div
                      className="decoration-21 d-none d-lg-block"
                      data-rellax-y=""
                      data-rellax-speed="0.7"
                      data-rellax-percentage="0.5"
                    >
                      <Image
                        src="/assets/images/decoration-3.svg"
                        className="svg-shape"
                        width={148}
                        height={148}
                        alt=""
                      />
                    </div>
                  </div> */}
                  {/* End Decorative Waves */}
                  {/* <div className="row wow fadeInUp">
                    <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 text-md-start mb-sm-30">
                      <p className="section-descr mb-0">
                        Looking for exclusive digital services? Contact us, and
                        we'll start productive cooperation.
                      </p>
                    </div>
                    <div className="col-md-4 col-lg-3 text-md-end">
                      <div className="local-scroll">
                        <Link
                          href={`/main-pages-contact-1`}
                          className="btn btn-mod btn-large btn-round btn-hover-anim"
                        >
                          <span>Contact us</span>
                        </Link>
                      </div>
                    </div>
                  </div> */}
                {/* </div>
              </section> */}
            </>
                  

          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
