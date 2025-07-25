// import { services4 } from "@/data/services";
// import Image from "next/image";
// export default function Service() {
//   return (
//     <div className="mb-100 mb-md-40">
//       {/* Services Item */}
//       {services4.map((service, index) => (
//         <h3
//           key={index}
//           className={`services-4-item ${service.align} parallax-mousemove-scene wow fadeInUp`}
//         >
//           <span className="services-4-title hs-title-5 font-alt overflow-hidden">
//             {service.title}
//           </span>
//           <span className="services-4-image parallax-mousemove-follow">
//             {/* <Image
//               src={service.imageSrc}
//               loading="lazy"
//               width={550}
//               height={673}
//               alt={service.alt}
//             /> */}
//           </span>
//         </h3>
//       ))}
//       {/* End Services Item */}
//     </div>
//   );
// }

'use client';
import Image from "next/image";
import { services4 } from "@/data/services";
import { useTranslations } from "next-intl";

export default function Service() {
  const t = useTranslations("products");

  return (
    <div className="services-4-wrapper">
      {services4.map((service, index) => (
        <h3
          key={index}
          className={`services-4-item ${service.align} parallax-mousemove-scene wow fadeInUp`}
        >
          <span className="services-4-title hs-title-5 font-alt overflow-hidden">
          {t(service.key)}
          </span>
          <span className="services-4-image parallax-mousemove-follow">
            <Image
              src={service.imageSrc}
              loading="lazy"
              width={550}
              height={673}
              alt={service.alt}
              style={{
                borderRadius: '20px',
                
              }}
            />
         </span>
        </h3>
      ))}
    </div>
  );
}

