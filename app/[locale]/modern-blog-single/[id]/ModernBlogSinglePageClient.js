// // app/[locale]/modern-blog-single/[id]/ModernBlogSinglePageClient.jsx
// 'use client';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Slider3 from '@/components/blog/sliders/Slider3';

// export default function ModernBlogSinglePageClient({ documentId, locale }) {
//   const [product, setProduct] = useState(null);
//   const [similar, setSimilar] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!documentId) return;
  
//     fetch(`https://incredible-love-6a2151f21a.strapiapp.com/api/listings?filters[documentId][$eq]=${documentId}&populate=*`)
//       .then(res => res.json())
//       .then(data => {
//         const record = data.data[0];
//         if (!record) throw new Error("No record");
//         // Учитываем оба варианта: если есть attributes, берём его, иначе сам record
//         const p = record.attributes ?? record;
//         console.log("→ Unwrapped p:", p);
//         setProduct(p);
//         setLoading(false);
//         // дальше можно взять p.location_info без ошибок
//         return fetch(
//           `https://incredible-love-6a2151f21a.strapiapp.com/api/listings?filters[location_info][city][$eq]=${encodeURIComponent(p.location_info.city)}&populate=*&pagination[pageSize]=4`
//         );
//       })
//       .then(res => res.json())
//       .then(simData => {
//         setSimilar(simData.data ?? []);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [documentId]);
  

//   if (loading || !product) return <div>Loading…</div>;

//   const {
//     title,
//     description,
//     multicurrencyprice,
//     images,
//     location_info,
//     apartment_info,
//     building_info,
//     features,
//     contact,
//   } = product;

//   const sliderImages = (images?.data || []).map((img) => ({
//     url: img.formats?.thumbnail?.url || img.url,
//     width: img.width,
//     height: img.height,
//   }));

//   return (
//     <div className="container py-5">
//       <div className="row">
//         {/* Slider */}
//         <div className="col-lg-8 mb-4">
//           <Slider3 images={sliderImages} />
//         </div>
//         {/* Info */}
//         <div className="col-lg-4">
//           <div className="border rounded p-4 shadow-sm">
//             <h2 className="h4 mb-3">{title}</h2>
//             <p className="h5 text-primary mb-4">
//               ${multicurrencyprice.price_usd.toLocaleString()}
//             </p>
//             <ul className="list-unstyled mb-4">
//               <li>
//                 <strong>Площадь:</strong> {apartment_info.area} м²
//               </li>
//               <li>
//                 <strong>Комнат:</strong> {apartment_info.rooms}
//               </li>
//               <li>
//                 <strong>Санузлов:</strong> {apartment_info.bathrooms}
//               </li>
//               <li>
//                 <strong>Этаж:</strong> {apartment_info.floor} /{' '}
//                 {building_info.floors_total}
//               </li>
//               <li>
//                 <strong>Потолки:</strong> {apartment_info.ceiling_height} м
//               </li>
//               {apartment_info.balcony && (
//                 <li>
//                   <strong>Балкон:</strong> есть
//                 </li>
//               )}
//               <li>
//                 <strong>Ремонт:</strong> {apartment_info.renovation_type}
//               </li>
//               <li>
//                 <strong>Мебель:</strong>{' '}
//                 {apartment_info.furniture ? 'есть' : 'нет'}
//               </li>
//               {features.find((f) => f.name === 'wifi') && <li>Wi-Fi</li>}
//               {features.find((f) => f.name === 'air_conditioner') && (
//                 <li>Кондиционер</li>
//               )}
//             </ul>
//             <p>
//               <i className="icon-location me-1" /> {location_info.city}, ул.{' '}
//               {location_info.street}, д. {location_info.building_number}
//             </p>
//             <Link
//               href={`tel:+${contact?.phone || ''}`}
//               className="btn btn-primary w-100"
//             >
//               Позвонить
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Description */}
//       <div className="row mt-5">
//         <div className="col">
//           <h3>Описание</h3>
//           <p>{description}</p>
//         </div>
//       </div>

//       {/* Similar */}
//       {similar.length > 0 && (
//         <div className="row mt-5">
//           <div className="col">
//             <h3>Другие предложения в этом районе</h3>
//           </div>
//           {similar.map((item, idx) => {
//             const a = item.attributes;
//             const thumb =
//               a.images.data[0]?.attributes.formats?.thumbnail?.url;
//             return (
//               <div className="col-md-3 mb-4" key={idx}>
//                 <div className="card h-100">
//                   {thumb && (
//                     <Image
//                       src={thumb}
//                       alt={a.title}
//                       width={300}
//                       height={200}
//                       className="card-img-top"
//                     />
//                   )}
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="card-title fs-sm">{a.title}</h5>
//                     <p className="card-text mt-auto">
//                       <strong>
//                         ${a.multicurrencyprice.price_usd.toLocaleString()}
//                       </strong>
//                     </p>
//                     <Link
//                       href={`/${locale}/modern-blog-single/${item.documentId}`}
//                       className="btn btn-outline-primary btn-sm"
//                     >
//                       Подробнее
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import HeaderWithLocale from '@/components/headers/HeaderWithLocale';
import ParallaxContainer from '@/components/common/ParallaxContainer';
import Slider3 from '@/components/blog/sliders/Slider3';
import Footer2 from '@/components/footers/Footer2';

export default function ModernBlogSinglePageClient({ documentId, locale }) {
  const [product, setProduct] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!documentId) return;

    fetch(
      `https://incredible-love-6a2151f21a.strapiapp.com/api/listings?filters[documentId][$eq]=${documentId}&populate=*`
    )
      .then((r) => r.json())
      .then((data) => {
        const rec = data.data?.[0];
        if (!rec) throw new Error('Not found');
        const p = rec.attributes ?? rec;
        setProduct(p);
        setLoading(false);
        return fetch(
          `https://incredible-love-6a2151f21a.strapiapp.com/api/listings?filters[location_info][city][$eq]=${encodeURIComponent(
            p.location_info.city
          )}&populate=*`
        );
      })
      .then((r) => r.json())
      .then((data) => {
        const flat = (data.data || []).map((r) => r.attributes ?? r);
        setSimilar(flat);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, [documentId]);

  if (loading || !product) {
    return <div className="text-center py-5">Loading…</div>;
  }

  const {
    title,
    description,
    multicurrencyprice,
    images,
    location_info,
    apartment_info,
    building_info,
    // features,
    contact,
  } = product;

  const sliderImages = (images || []).map((img) => ({
    url: img.formats?.thumbnail?.url || img.url,
    alt: img.caption || img.name || title,
  }));

  return (
    <div className="theme-modern">
      <nav className="main-nav dark transparent stick-fixed">
        <HeaderWithLocale locale={locale} />
      </nav>

      <main id="main">
        <ParallaxContainer
          className="page-section pt-90 pb-90 bg-dark-alpha-60 parallax-5 light-content"
          style={{ backgroundImage: "url(/assets/images/demo-modern/section-bg-7.jpg)" }}
        >
          <div className="container position-relative z-index-1">
            <Link href={`/${locale}/blog`} className="link-hover-anim mb-20 d-inline-block">
              ← Back to blog
            </Link>
            <h1 className="section-title-large font-alt uppercase">{title}</h1>
          </div>
        </ParallaxContainer>

        <section className="page-section">
          <div className="container py-5">
            <div className="row">
              {/* ——— Левая колонка: слайдер + детали ——— */}
              <div className="col-lg-8">
                {/* Слайдер */}
                <div className="swiper mb-4">
                  <Slider3 images={sliderImages} />
                </div>

                {/* О здании */}
                <h4>О здании</h4>
                <dl className="row mb-4">
                  <dt className="col-sm-4">Тип здания</dt>
                  <dd className="col-sm-8">{building_info.construction_type}</dd>

                  <dt className="col-sm-4">Новостройка</dt>
                  <dd className="col-sm-8">{building_info.is_new ? 'Да' : 'Нет'}</dd>

                  <dt className="col-sm-4">Этажей в доме</dt>
                  <dd className="col-sm-8">{building_info.floors_total}</dd>

                  <dt className="col-sm-4">Лифт</dt>
                  <dd className="col-sm-8">{building_info.has_elevator ? 'Есть' : 'Нет'}</dd>
                </dl>

                {/* О квартире */}
                <h4>О квартире</h4>
                <dl className="row mb-4">
                  <dt className="col-sm-4">Площадь</dt>
                  <dd className="col-sm-8">{apartment_info.area} м²</dd>

                  <dt className="col-sm-4">Комнат</dt>
                  <dd className="col-sm-8">{apartment_info.rooms}</dd>

                  <dt className="col-sm-4">Санузлов</dt>
                  <dd className="col-sm-8">{apartment_info.bathrooms}</dd>

                  <dt className="col-sm-4">Этаж</dt>
                  <dd className="col-sm-8">
                    {apartment_info.floor} / {building_info.floors_total}
                  </dd>

                  <dt className="col-sm-4">Потолки</dt>
                  <dd className="col-sm-8">{apartment_info.ceiling_height} м</dd>
                </dl>

                {/* Правила проживания */}
                <h4>Правила проживания</h4>
                <ul className="mb-4">
                  <li>Можно с детьми: Да</li>
                  <li>Можно с животными: По договорённости</li>
                </ul>

                {/* Условия сделки */}
                <h4>Условия сделки</h4>
                <ul className="mb-4">
                  <li>Коммунальные платежи: Не включены</li>
                  <li>Предоплата: 1 месяц</li>
                </ul>

                {/* Описание */}
                <h4>Описание</h4>
                <p className="mb-5">{description}</p>
              </div>

              {/* ——— Правая колонка: инфо-карточка + «Другие предложения» ——— */}
              <div className="col-lg-4">
                <div className="border rounded p-4 shadow-sm mb-4">
                  <h5 className="mb-2">{title}</h5>
                  <p className="h5 text-primary">${multicurrencyprice.price_usd.toLocaleString()}</p>
                  <p className="small mt-3">
                    <i className="icon-location me-1" />
                    {location_info.city}, ул. {location_info.street}, д. {location_info.building_number}
                  </p>
                  <Link href={`tel:${contact?.phone || ''}`} className="btn btn-primary w-100 mt-3">
                    Позвонить
                  </Link>
                </div>

                {similar.length > 0 && (
                  <>
                    <h6 className="mb-3">Другие предложения в этом районе</h6>
                    <div className="list-group">
                      {similar.map((item) => {
                        const thumb =
                          item.images?.[0]?.formats?.thumbnail?.url || item.images?.[0]?.url;
                        return (
                          <Link
                            key={item.documentId}
                            href={`/${locale}/modern-blog-single/${item.documentId}`}
                            className="list-group-item list-group-item-action mb-2 d-flex align-items-center p-2"
                          >
                            {thumb && (
                              <Image
                                src={thumb}
                                alt={item.title}
                                width={80}
                                height={60}
                                className="rounded flex-shrink-0"
                              />
                            )}
                            <div className="ms-3 small">
                              <div className="fw-medium">{item.title}</div>
                              <div className="text-primary">
                                ${item.multicurrencyprice.price_usd.toLocaleString()}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-1 bg-dark-1 light-content">
        <Footer2 />
      </footer>
    </div>
  );
}
