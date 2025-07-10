
// import { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "swiper/css";
// import "@/public/assets/css/styles.css";
// import "jarallax/dist/jarallax.min.css";
// import "swiper/css/effect-fade";
// import "tippy.js/dist/tippy.css";
// import "photoswipe/dist/photoswipe.css";

// import CookieBanner from "@/components/cookie/cookieBanner.jsx";
// import { usePathname } from "next/navigation";
// import { parallaxMouseMovement, parallaxScroll } from "@/utils/parallax";
// import { init_wow } from "@/utils/initWowjs";
// import { headerChangeOnScroll } from "@/utils/changeHeaderOnScroll";

// import { NextIntlClientProvider } from "next-intl";
// import { notFound } from "next/navigation";
// import { getMessages } from "next-intl/server";

// // поддерживаемые языки
// export function generateStaticParams() {
//   return ["en", "ru", "am"].map((locale) => ({ locale }));
// }

// export default async function RootLayout({ children, params }) {
//   const path = usePathname();

//   const { locale } = params;
//   if (!["en", "ru", "am"].includes(locale)) notFound();

//   const messages = await getMessages({ locale });

//   useEffect(() => {
//     init_wow();
//     parallaxMouseMovement();

//     const mainNav = document.querySelector(".main-nav");
//     if (mainNav?.classList.contains("transparent")) {
//       mainNav.classList.add("js-transparent");
//     } else if (!mainNav?.classList?.contains("dark")) {
//       mainNav?.classList.add("js-no-transparent-white");
//     }

//     window.addEventListener("scroll", headerChangeOnScroll);
//     parallaxScroll();
//     return () => window.removeEventListener("scroll", headerChangeOnScroll);
//   }, [path]);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       import("bootstrap/dist/js/bootstrap.esm");
//     }
//   }, []);

//   return (
//     <html lang={locale} className="no-mobile no-touch">
//       <head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className="appear-animate body">
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           {children}
//           <CookieBanner />
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }


// import "bootstrap/dist/css/bootstrap.min.css";
// import "swiper/css";
// import "@/public/assets/css/styles.css";
// import "jarallax/dist/jarallax.min.css";
// import "swiper/css/effect-fade";
// import "tippy.js/dist/tippy.css";
// import "photoswipe/dist/photoswipe.css";

// import { getMessages } from 'next-intl/server';
// import ClientEffects from "@/components/common/ClientEffects";
// import CookieBanner from "@/components/cookie/cookieBanner";
// import IntlProviderWrapper from "@/components/common/IntlProviderWrapper";

// // Генерация путей
// export function generateStaticParams() {
//   return ["en", "ru", "am"].map((locale) => ({ locale }));
// }

// export default async function RootLayout({ children, params }) {
//   // const locale = params.locale;
//   const { locale } = await params;

//   // const messages = await getMessages({ locale });
//   let messages = {};
//   try {
//     messages = await getMessages({ locale });
//   } catch (error) {
//     console.error('Failed to load messages:', error);
//   }

//   return (
//     <html lang={locale} className="no-mobile no-touch">
//       <head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className="appear-animate body">
//       <IntlProviderWrapper locale={locale} messages={messages}>
//           <ClientEffects />
//           {children}
//           <CookieBanner />
//         </IntlProviderWrapper>
//       </body>
//     </html>
//   );
// }


import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "@/public/assets/css/styles.css";
import "jarallax/dist/jarallax.min.css";
import "swiper/css/effect-fade";
import "tippy.js/dist/tippy.css";
import "photoswipe/dist/photoswipe.css";

import ClientEffects from "@/components/common/ClientEffects";
import CookieBanner from "@/components/cookie/cookieBanner";
import IntlProviderWrapper from "@/components/common/IntlProviderWrapper";

// Генерация путей
export function generateStaticParams() {
  return ["en", "ru", "am"].map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  // Ожидаем params перед использованием
  const { locale } = await params;

  return (
    <html lang={locale} className="no-mobile no-touch">
      {/* <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head> */}
      <body className="appear-animate body">
        <IntlProviderWrapper locale={locale}>
          <ClientEffects />
          {children}
          <CookieBanner />
        </IntlProviderWrapper>
      </body>
    </html>
  );
}