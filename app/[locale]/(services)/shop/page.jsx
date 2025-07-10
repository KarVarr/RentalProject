// 'use client';
// import Footer2 from "@/components/footers/Footer2";
// import Header8 from "@/components/headers/Header8";

// import Service from "@/components/homes/home-8/Service";
// import ParallaxContainer from "@/components/common/ParallaxContainer";

// // import { modernMultipage } from "@/data/menu";
// import HeaderWithLocale from "@/components/headers/HeaderWithLocale";

// // import dynamic from "next/dynamic";
// import YandexMapWrapper from "@/components/maps/YandexMapWrapper";
// // import YandexMap from "@/components/maps/YandexMap";
// // import { useLocale } from "next-intl";
// import Image from "next/image";
// import Link from "next/link";
// import { useParams } from 'next/navigation';
// import { useTranslations } from 'next-intl';


// const onePage = false;
// const dark = false;


// export default function ModernServicesPage() {
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
//                   "url(/assets/images/demo-modern/section-bg-4.jpg)",
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
//                   <div className="col-9 col-sm-8">
//                     <h1 className="hs-title-5 font-alt overflow-hidden mb-0">
//                       <span className="d-block wow fadeRotateIn"> {t('shop.title1')} </span>
//                       <span className="d-block text-end wow fadeRotateIn">
//                       {t('shop.title2')}
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
//             <section className="page-section">
//               <div className="container">
//                 <div className="row mb-100 mb-md-60">
//                   <div className="col-lg-8 mb-md-50">
//                     <div
//                       className="section-descr-extralarge wow linesAnimIn"
//                       data-wow-offset="0"
//                       data-splitting="lines"
//                     >
//                       {/* <h2 className="section-title-inline-1">Our Values</h2> */}
//                       <p>
//                       {t('shop.block1')}
//                       </p>
//                       <p>
//                       {t('shop.block2')}
//                       </p>
//                       <p>
//                       {t('shop.block3')}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="col-lg-4 wow fadeInUp" data-offset="0">
//                     <Image
//                       src="/assets/images/demo-modern/section-image-3.jpg"
//                       alt="Image Description"
//                       width={502}
//                       height={548}
//                     />
//                   </div>
//                 </div>

//                 <hr
//                   className={` ${
//                     dark ? "white opacity-1" : "black"
//                   }  mt-0 mb-0`}
//                 />
//                   <p>
//                     {t('shop.block4')}
//                   </p>
//                   <p>
//                     {t('shop.block5')}
//                   </p>
//                   {/* <br /> */}
//                 {/* <Service /> Вот тут надо карту добавить */}
//                 <div className="row mb-100 mb-md-60">
//                   {/* здесь выводим карту */}
//                   <div className="col-12">
//                     <YandexMapWrapper />
//                   </div>
//                 </div>


//                 <div className="row">
//                   <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
//                     <hr
//                       className={` ${
//                         dark ? "white opacity-1" : "black"
//                       }  mt-0 mb-20`}
//                     />

//                     <div className="row">
//                       <div className="col-sm-6 col-md-7 text-center text-sm-start mb-xs-20">
//                         <p className="section-descr mb-0 black">
//                         {t('shop.textForProposal')}
//                         </p>
//                       </div>
//                       <div className="col-sm-6 col-md-5 text-center text-sm-end local-scroll">
//                         <Link
//                           href={`/${locale}/contacts`}
//                           className="btn btn-mod btn-border btn-medium btn-circle"
//                           data-btn-animate="y"
//                         >
//                           <span className="btn-animate-y">
//                             <span className="btn-animate-y-1">
//                             {t('shop.buttonForProposal')}
//                             </span>
//                             <span
//                               className="btn-animate-y-2"
//                               aria-hidden="true"
//                             >
//                              {t('shop.buttonForProposal')}
//                             </span>
//                           </span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
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


// page.js (серверный компонент)
import ModernServicesPageClient from './ModernServicesPageClient';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const titles = {
    en: "Shop",
    ru: "Магазин", 
    am: "Մեր ծառայությունները",
  };

  const descriptions = {
    en: "Huge selection of clothing from H&M, Reserved, Sinsay, House, and more — off-price multi-brand store for the whole family.",
    ru: "Огромный выбор одежды от H&M, Reserved, Sinsay, House и других брендов — оффпрайс мультибрендовый магазин для всей семьи.",
    am: "Մեծ տեսականի՝ H&M, Reserved, Sinsay, House և այլ բրենդների հագուստից՝ օֆփրայս բազմաբրենդ խանութ՝ ամբողջ ընտանիքի համար։",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default function ModernServicesPage(props) {
  return <ModernServicesPageClient {...props} />;
}