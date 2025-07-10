// 'use client';
// import Footer2 from "@/components/footers/Footer2";
// import Header8 from "@/components/headers/Header8";
// import Contact from "@/components/homes/home-8/Contact";

// // import { modernMultipage } from "@/data/menu";
// import HeaderWithLocale from "@/components/headers/HeaderWithLocale";
// // import { useLocale } from "next-intl";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import Link from "next/link";
// const onePage = false;
// const dark = false;
// import { useParams } from 'next/navigation';
// import { useTranslations } from 'next-intl';

// import ParallaxContainer from "@/components/common/ParallaxContainer";

// export default function ModernContactPage() {
//   const params = useParams();
//   const locale = params.locale;
//   const t = useTranslations();
//   return (
//     <>
//       <div className="theme-modern">
//         <div className="page" id="top">
//           <nav className="main-nav dark transparent stick-fixed wow-menubar">
//             {/* <Header8 links={modernMultipage} /> */}
//             <HeaderWithLocale locale={locale} />

//           </nav>{" "}
//           <main id="main">
//             <ParallaxContainer
//               className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
//               style={{
//                 backgroundImage:
//                   "url(/assets/images/demo-modern/section-bg-3.jpg)",
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
//                           {t('home.buttonBackToHome')}
//                         </span>
//                         <span className="btn-animate-y-2" aria-hidden="true">
//                           <i
//                             className="icon-arrow-left2 size-14"
//                             aria-hidden="true"
//                           ></i>{" "}
//                           {t('home.buttonBackToHome')}
//                         </span>
//                       </span>
//                     </Link>
//                   </div>
//                   <hr className="white mt-0 mb-0" />
//                 </div>
//                 <div className="row">
//                   <div className="col-11 col-sm-10 ">
//                     <h1 className="hs-title-5 font-alt overflow-hidden mb-0">
//                       <span className="d-block wow fadeRotateIn">
//                         {" "}
//                         {t('contact.title1')}{" "}
//                       </span>
//                       <span className="d-block text-end wow fadeRotateIn">
//                       {t('contact.title2')}
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
//             </ParallaxContainer>
//             <section
//               className={`page-section  scrollSpysection  ${
//                 dark ? "bg-dark-1 light-content" : ""
//               } `}
//               id="contact"
//             >
//               <div className="container">
//                 <Contact />
//               </div>
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


import ModernContactPageClient from './ModernContactPageClient';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const titles = {
    en: "Contacts",
    ru: "Контакты",
    am: "Կապ մեզ հետ",
  };

  const descriptions = {
    en: "",
    ru: "",
    am: "",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default function ModernContactPage(props) {
  return <ModernContactPageClient {...props} />;
}