// import Footer2 from "@/components/footers/Footer2";
// import Header8 from "@/components/headers/Header8";
// import Accordion from "@/components/homes/home-8/Accordion";
// import Marquee from "@/components/homes/home-8/Marquee";
// import Testimonials from "@/components/homes/home-8/Testimonials";

// // import { modernMultipage } from "@/data/menu";
// import HeaderWithLocale from "@/components/headers/HeaderWithLocale";
// import { useLocale } from "next-intl";
// import Image from "next/image";
// import Link from "next/link";
// const onePage = false;
// const dark = false;
// const locale = useLocale();

// export const metadata = {
//   title:
//     "Modern About || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
//   description:
//     "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
// };
// export default function ModernAboutPage() {
//   return (
//     <>
//       <div className="theme-modern">
//         <div className="page" id="top">
//           <nav className="main-nav dark transparent stick-fixed wow-menubar">
//             {/* <Header8 links={modernMultipage} /> */}
//             <HeaderWithLocale />
//           </nav>{" "}
//           <main id="main">
//             <section
//               className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
//               style={{
//                 backgroundImage:
//                   "url(/assets/images/demo-modern/section-bg-2.jpg)",
//               }}
//               id="home"
//             >
//               <div className="container position-relative">
//                 <div className="mb-20">
//                   <div className="mb-10">
//                     <Link
//                       href={`/${locale}/home`}
//                       className="link-hover-anim align-middle"
//                       data-btn-animate="y"
//                     >
//                       <span className="btn-animate-y">
//                         <span className="btn-animate-y-1">
//                           <i
//                             className="icon-arrow-left2 size-14"
//                             aria-hidden="true"
//                           ></i>{" "}
//                           Back to home
//                         </span>
//                         <span className="btn-animate-y-2" aria-hidden="true">
//                           <i
//                             className="icon-arrow-left2 size-14"
//                             aria-hidden="true"
//                           ></i>{" "}
//                           Back to home
//                         </span>
//                       </span>
//                     </Link>
//                   </div>
//                   <hr className="white mt-0 mb-0" />
//                 </div>
//                 <div className="row">
//                   <div className="col-9 col-sm-8">
//                     <h1 className="hs-title-5 font-alt overflow-hidden mb-0">
//                       <span className="d-block wow fadeRotateIn"> About </span>
//                       <span className="d-block text-end wow fadeRotateIn">
//                         Us
//                       </span>
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//               {/* Scroll Down */}
//               <div
//                 className="local-scroll scroll-down-wrap-2 d-none d-lg-block wow fadeInUp"
//                 data-wow-offset={0}
//               >
//                 <div className="full-wrapper text-end">
//                   <span className="scroll-down-2">
//                     <Image
//                       width="50"
//                       height="73"
//                       src="/assets/images/demo-modern/arrow-down-1-white.svg"
//                       alt="Scroll Down"
//                     />
//                   </span>
//                 </div>
//               </div>
//               {/* End Scroll Down */}
//             </section>
//             <section className="page-section pb-0" id="about">
//               <div className="container position-relative">
//                 <div
//                   className="section-descr-extralarge mb-100 mb-md-60 wow linesAnimIn"
//                   data-wow-offset="0"
//                   data-splitting="lines"
//                 >
//                   <h2 className="section-title-inline-1">Trendsetter </h2>
//                   is an international fashion startup developing a multibrand store offering clothing, footwear, and accessories. Our selection features some of the most popular global brands, including H&M, Reserved, Sinsay, House, and more.
//                 </div>

//                 {/* <!-- Accordion --> */}
//                 <Accordion />
//                 {/* <!-- End Accordion --> */}

//                 <div className="local-scroll text-center">
//                   <Link
//                     href={`/modern-services`}
//                     className="btn btn-mod btn-ellipse"
//                     data-btn-animate="ellipse"
//                   >
//                     <span className="btn-ellipse-inner">
//                       <span className="btn-ellipse-unhovered">
//                         View store
//                       </span>
//                       <span className="btn-ellipse-hovered" aria-hidden="true">
//                         View store
//                       </span>
//                     </span>
//                   </Link>
//                 </div>

//                 <div className="page-section pb-0" id="established">
//                   <div className="position-relative text-center pt-140 pt-sm-100 pb-140 pb-sm-100">
//                     <div className="position-relative z-index-1">
//                       <h2 className="hs-title-5 font-alt overflow-hidden mb-60 mb-sm-40">
//                         <span className="d-inline-block wow fadeRotateIn">
//                           Established
//                         </span>
//                         <span className="d-inline-block wow fadeRotateIn">
//                           in 2023
//                         </span>
//                       </h2>
//                       <div className="row">
//                         <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
//                           {/* <p className="section-descr black mb-0">
//                             We believe that things should be useful yet
//                             beautiful.
//                           </p> */}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="section-image-behind">
//                       <Image
//                         src="/assets/images/demo-modern/section-image-2.jpg"
//                         loading="lazy"
//                         width="820"
//                         height="1270"
//                         alt="Image Description"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//             <div
//               className={`page-section overflow-hidden  ${
//                 dark ? "light-content" : ""
//               } `}
//             >
//               <Marquee />
//             </div>
//             <section
//               className={`page-section pt-0  ${
//                 dark ? "bg-dark-1 light-content" : ""
//               } `}
//             >
//               <Testimonials />
//             </section>
//           </main>
//           <footer className="footer-1 bg-dark-1 light-content">
//             <Footer2 />
//           </footer>
//         </div>{" "}
//       </div>
//     </>
//   );
// }

// 'use client';
// import Footer2 from "@/components/footers/Footer2";
// import Accordion from "@/components/homes/home-8/Accordion";
// import Marquee from "@/components/homes/home-8/Marquee";
// import Testimonials from "@/components/homes/home-8/Testimonials";
// import HeaderWithLocale from "@/components/headers/HeaderWithLocale";
// import Image from "next/image";
// import Link from "next/link";
// import { useTranslations } from 'next-intl';
// import { useParams } from 'next/navigation';

// const onePage = false;
// const dark = false;

// export default function ModernAboutPage() {
//   const params = useParams();
//   const locale = params.locale;

//   const t = useTranslations();

//   return (
//     <div className="theme-modern">
//       <div className="page" id="top">
//         <nav className="main-nav dark transparent stick-fixed wow-menubar">
//           <HeaderWithLocale locale={locale} />
//         </nav>

//         <main id="main">
//           <section
//             className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
//             style={{
//               backgroundImage:
//                 "url(/assets/images/demo-modern/section-bg-2.jpg)",
//             }}
//             id="home"
//           >
//             <div className="container position-relative">
//               <div className="mb-20">
//                 <div className="mb-10">
//                   <Link
//                     href={`/${locale}/home`}
//                     className="link-hover-anim align-middle"
//                     data-btn-animate="y"
//                   >
//                     <span className="btn-animate-y">
//                       <span className="btn-animate-y-1">
//                         <i
//                           className="icon-arrow-left2 size-14"
//                           aria-hidden="true"
//                         ></i>{" "}
//                         {t('home.buttonBackToHome')}
//                       </span>
//                       <span className="btn-animate-y-2" aria-hidden="true">
//                         <i
//                           className="icon-arrow-left2 size-14"
//                           aria-hidden="true"
//                         ></i>{" "}
//                         {t('home.buttonBackToHome')}
//                       </span>
//                     </span>
//                   </Link>
//                 </div>
//                 <hr className="white mt-0 mb-0" />
//               </div>
//               <div className="row">
//                 <div className="col-9 col-sm-8">
//                   <h1 className="hs-title-5 font-alt overflow-hidden mb-0">
//                     <span className="d-block wow fadeRotateIn"> {t('about.title1')} </span>
//                     <span className="d-block text-end wow fadeRotateIn">{t('about.title2')}</span>
//                   </h1>
//                 </div>
//               </div>
//             </div>

//             {/* Scroll Down */}
//             <div
//               className="local-scroll scroll-down-wrap-2 d-none d-lg-block wow fadeInUp"
//               data-wow-offset={0}
//             >
//               <div className="full-wrapper text-end">
//                 <span className="scroll-down-2">
//                   <Image
//                     width="50"
//                     height="73"
//                     src="/assets/images/demo-modern/arrow-down-1-white.svg"
//                     alt="Scroll Down"
//                   />
//                 </span>
//               </div>
//             </div>
//           </section>

//           <section className="page-section pb-0" id="about">
//             <div className="container position-relative">
//               <div
//                 className="section-descr-extralarge mb-100 mb-md-60 wow linesAnimIn"
//                 data-wow-offset="0"
//                 data-splitting="lines"
//               >
//                 <h2 className="section-title-inline-1">Trendsetter </h2>
//                 {t('about.mainStory')}
//               </div>

//               {/* Accordion */}
//               <Accordion />

//               <div className="local-scroll text-center">
//                 <Link
//                   href={`/${locale}/modern-services`}
//                   className="btn btn-mod btn-ellipse"
//                   data-btn-animate="ellipse"
//                 >
//                   <span className="btn-ellipse-inner">
//                     <span className="btn-ellipse-unhovered">{t('about.buttonViewStore')}</span>
//                     <span className="btn-ellipse-hovered" aria-hidden="true">
//                     {t('about.buttonViewStore')}
//                     </span>
//                   </span>
//                 </Link>
//               </div>

//               <div className="page-section pb-0" id="established">
//                 <div className="position-relative text-center pt-140 pt-sm-100 pb-140 pb-sm-100">
//                   <div className="position-relative z-index-1">
//                     <h2 className="hs-title-5 font-alt overflow-hidden mb-60 mb-sm-40">
//                       <span className="d-inline-block wow fadeRotateIn">
//                       {t('about.establishTitle')} 
//                       </span>
//                       <br />
//                       <span className="d-inline-block wow fadeRotateIn">
//                       {t('about.establishIn')} 2023
//                       </span>
//                     </h2>
//                     <div className="row">
//                       <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4"></div>
//                     </div>
//                   </div>
//                   <div className="section-image-behind">
//                     <Image
//                       src="/assets/images/demo-modern/section-image-2.jpg"
//                       loading="lazy"
//                       width="820"
//                       height="1270"
//                       alt="Image Description"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <div className={`page-section overflow-hidden ${dark ? "light-content" : ""}`}>
//             <Marquee />
//           </div>

//           <section className={`page-section pt-0 ${dark ? "bg-dark-1 light-content" : ""}`}>
//             <Testimonials />
//           </section>
//         </main>

//         <footer className="footer-1 bg-dark-1 light-content">
//           <Footer2 />
//         </footer>
//       </div>
//     </div>
//   );
// }


import ModernAboutPageClient from './ModernAboutPageClient';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const titles = {
    en: "About",
    ru: "О Нас",
    am: "Մեր մասին",
  };

  const descriptions = {
    en: "Trendsetter Á Multibrand is a multibrand fashion store",
    ru: "Trendsetter Á Multibrand - мультибрендовый fashion-ритейл",
    am: "Trendsetter Á Multibrand-ը բազմաբրենդային fashion խանութ է",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}


export default function ModernAboutPage(props) {
  return <ModernAboutPageClient {...props} />;
}