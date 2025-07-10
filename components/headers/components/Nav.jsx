// "use client";

// import addScrollspy from "@/utils/addScrollSpy";
// import { init_classic_menu_resize } from "@/utils/menuToggle";
// import { scrollToElement } from "@/utils/scrollToElement";
// import { closeMobileMenu } from "@/utils/toggleMobileMenu";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";

// export default function OnePageNav({ links, animateY = false }) {
//   useEffect(() => {
//     setTimeout(() => {
//       scrollToElement();
//     }, 1000);
//     init_classic_menu_resize();
//     window.addEventListener("scroll", addScrollspy);

//     window.addEventListener("resize", init_classic_menu_resize);

//     return () => {
//       window.removeEventListener("scroll", addScrollspy);
//       window.removeEventListener("resize", init_classic_menu_resize);
//     };
//   }, []);
//   const pathname = usePathname();

//   return (
//     <>
//       {links[0].href?.includes("/") &&
//         links.map((link, index) => (
//           <li key={index}>
//             <Link
//               className={
//                 pathname.split("/")[1] == link.href.split("/")[1]
//                   ? "active"
//                   : ""
//               }
//               href={link.href}
//             >
//               {animateY ? (
//                 <span className="btn-animate-y">
//                   <span className="btn-animate-y-1">{link.text}</span>
//                   <span className="btn-animate-y-2" aria-hidden="true">
//                     {link.text}
//                   </span>
//                 </span>
//               ) : (
//                 link.text
//               )}
//             </Link>
//           </li>
//         ))}
//       {!links[0].href?.includes("/") &&
//         links.map((link, index) => (
//           <li className="scrollspy-link" key={index}>
//             <a onClick={() => closeMobileMenu()} className="" href={link.href}>
//               {animateY ? (
//                 <span className="btn-animate-y">
//                   <span className="btn-animate-y-1">{link.text}</span>
//                   <span className="btn-animate-y-2" aria-hidden="true">
//                     {link.text}
//                   </span>
//                 </span>
//               ) : (
//                 link.text
//               )}
//             </a>
//           </li>
//         ))}
//     </>
//   );
// }


"use client";

import addScrollspy from "@/utils/addScrollSpy";
import { init_classic_menu_resize } from "@/utils/menuToggle";
import { scrollToElement } from "@/utils/scrollToElement";
import { closeMobileMenu } from "@/utils/toggleMobileMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function OnePageNav({ links, animateY = false }) {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      scrollToElement();
    }, 1000);

    init_classic_menu_resize();
    window.addEventListener("scroll", addScrollspy);
    window.addEventListener("resize", init_classic_menu_resize);

    return () => {
      window.removeEventListener("scroll", addScrollspy);
      window.removeEventListener("resize", init_classic_menu_resize);
    };
  }, []);

  // 👉 Хелпер для сравнения активной страницы (поддерживает /ru/about и т.д.)
  const isActive = (href) => {
    const current = pathname.split("/")[2]; // например: 'about'
    const link = href.split("/")[2];        // например: 'about'
    return current === link;
  };

  return (
    <>
      {/* Если ссылки с путём */}
      {links[0].href?.includes("/") &&
        links.map((link, index) => (
          <li key={index}>
            <Link
              className={isActive(link.href) ? "active" : ""}
              href={link.href}
            >
              {animateY ? (
                <span className="btn-animate-y">
                  <span className="btn-animate-y-1">{link.text}</span>
                  <span className="btn-animate-y-2" aria-hidden="true">
                    {link.text}
                  </span>
                </span>
              ) : (
                link.text
              )}
            </Link>
          </li>
        ))}

      {/* Если якорные ссылки внутри страницы */}
      {!links[0].href?.includes("/") &&
        links.map((link, index) => (
          <li className="scrollspy-link" key={index}>
            <a onClick={() => closeMobileMenu()} href={link.href}>
              {animateY ? (
                <span className="btn-animate-y">
                  <span className="btn-animate-y-1">{link.text}</span>
                  <span className="btn-animate-y-2" aria-hidden="true">
                    {link.text}
                  </span>
                </span>
              ) : (
                link.text
              )}
            </a>
          </li>
        ))}
    </>
  );
}
