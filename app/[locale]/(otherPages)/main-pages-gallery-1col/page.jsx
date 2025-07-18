
// import dynamic from "next/dynamic";
// import Link from "next/link";
// import ParallaxContainer from "@/components/common/ParallaxContainer";

// import AnimatedText from "@/components/common/AnimatedText";
// import Image from "next/image";

// import React from "react";

// import Gallery1 from "@/components/gallery/Gallery1";
// import { menuItems } from "@/data/menu";
// export const metadata = {
//   title:
//     "Main About 1 || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
//   description:
//     "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
// };
// export default function MainAboutPage1() {
//   return (
//     <>
//       <div className="theme-main">
//         <div className="page" id="top">
//           <nav className="main-nav transparent stick-fixed wow-menubar">
//             <Header1Multipage links={menuItems} />
//           </nav>
//           <main id="main">
//             <section className="page-section pt-0 pb-0" id="home">
//               <ParallaxContainer
//                 className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
//                 style={{
//                   backgroundImage:
//                     "url(/assets/images/full-width-images/page-title-bg-5.jpg)",
//                 }}
//               >
//                 <>
//                   <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
//                   <div className="container position-relative pt-50">
//                     {/* Section Content */}
//                     <div className="text-center">
//                       <div className="row">
//                         {/* Page Title */}
//                         <div className="col-md-8 offset-md-2">
//                           <h2
//                             className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
//                             data-wow-duration="1.2s"
//                           >
//                             Gallery 1 Columns
//                           </h2>
//                           <h1 className="hs-title-1 mb-0">
//                             <span
//                               className="wow charsAnimIn"
//                               data-splitting="chars"
//                             >
//                               <AnimatedText text="Explore the beauty of life with art photography." />
//                             </span>
//                           </h1>
//                         </div>
//                         {/* End Page Title */}
//                       </div>
//                     </div>
//                     {/* End Section Content */}
//                   </div>
//                 </>
//               </ParallaxContainer>
//             </section>
//             <>
//               <>
//                 {/* Section */}
//                 <section className="page-section pt-0">
//                   <Gallery1 itemsLength={6} parantClass="col-md-12" />
//                 </section>
//                 {/* End Section */}
//                 {/* Divider */}
//                 <hr className="mt-0 mb-0" />
//               </>

//               {/* End Divider */}
//               {/* Call Action Section */}
//               <section className="page-section">
//                 <div className="container position-relative">
//                   {/* Decorative Waves */}
//                   <div className="position-relative">
//                     <div
//                       className="decoration-21 d-none d-lg-block"
//                       data-rellax-y=""
//                       data-rellax-speed="0.7"
//                       data-rellax-percentage="0.5"
//                     >
//                       <Image
//                         src="/assets/images/decoration-3.svg"
//                         className="svg-shape"
//                         width={148}
//                         height={148}
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                   {/* End Decorative Waves */}
//                   <div className="row wow fadeInUp">
//                     <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 text-md-start mb-sm-30">
//                       <p className="section-descr mb-0">
//                         Looking for exclusive digital services? Contact us, and
//                         we'll start productive cooperation.
//                       </p>
//                     </div>
//                     <div className="col-md-4 col-lg-3 text-md-end">
//                       <div className="local-scroll">
//                         <Link
//                           href={`/main-pages-contact-1`}
//                           className="btn btn-mod btn-large btn-round btn-hover-anim"
//                         >
//                           <span>Contact us</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </>
//           </main>
//           <Footer1 />
//         </div>{" "}
//       </div>
//     </>
//   );
// }
