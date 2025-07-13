// 'use client';
// import Pagination from "@/components/common/Pagination";
// import Footer2 from "@/components/footers/Footer2";
// // import Header8 from "@/components/headers/Header8";
// import Form5 from "@/components/newsletterForms/Form5";

// import { blogs12 } from "@/data/blogs";

// // import { modernMultipage } from "@/data/menu";
// import HeaderWithLocale from "@/components/headers/HeaderWithLocale";
// // import dynamic from "next/dynamic";
// import Image from "next/image";
// import Link from "next/link";
// import ParallaxContainer from "@/components/common/ParallaxContainer";

// import { useParams } from 'next/navigation';
// import { useTranslations } from 'next-intl';

'use client';
// import { blogs12 } from "@/data/blogs";
import { useEffect, useState } from 'react';
import Pagination from "@/components/common/Pagination";
import Footer2 from "@/components/footers/Footer2";
import Form5 from "@/components/newsletterForms/Form5";
import HeaderWithLocale from "@/components/headers/HeaderWithLocale";
import Image from "next/image";
import Link from "next/link";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import { useParams } from 'next/navigation';
// import { useTranslations } from 'next-intl';




export default function ModernBlogPageClient() {
  const params = useParams();
  const locale = params.locale;
  // const t = useTranslations();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(data => {
  //       setProducts(data);
  //       setLoading(false);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log("➡ fetch start");
  //   fetch('https://incredible-love-6a2151f21a.strapiapp.com/api/listings?populate=*')
      
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log('🚀 STRAPI RESPONSE:', data); // ← вот это ключ
  //       const listings = data.data
  //         .filter(item => item && item.attributes)
  //         .map(item => ({
  //           id: item.id,
  //           title: item.attributes.title || 'Без названия',
  //           price: item.attributes.multicurrencyprice?.price_usd || 0,
  //           image: item.attributes.images?.[0]?.url
  //             ? `https://incredible-love-6a2151f21a.strapiapp.com${item.attributes.images[0].url}`
  //             : '/assets/images/default.jpg',
  //         }));
  //       setProducts(listings);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Ошибка при получении данных:", err);
  //       setLoading(false);
  //     });
  // }, []);
  

  // useEffect(() => {
  //   console.log("➡ fetch start");
  
  //   fetch('https://incredible-love-6a2151f21a.strapiapp.com/api/listings?populate=*')
  //     .then(res => {
  //       console.log("📥 got response", res.status);
  //       console.log("📥 Raw response:", res);
  //       return res.json();
  //     })
  //     .then(data => {
  //       console.log("🚀 STRAPI RESPONSE:", data);
  
  //       if (!Array.isArray(data?.data)) {
  //         console.warn("⚠️ Неправильный формат данных:", data);
  //         return;
  //       }
  
  //       const listings = data.data
  //         .filter(item => item && item.attributes)
  //         .map(item => ({
  //           id: item.id,
  //           title: item.attributes.title || 'Без названия',
  //           price: item.attributes.multicurrencyprice?.price_usd || 0,
  //           image: item.attributes.images?.data?.[0]?.attributes?.url
  //             ? `https://incredible-love-6a2151f21a.strapiapp.com${item.attributes.images.data[0].attributes.url}`
  //             : '/assets/images/default.jpg',

  //         }));
  
  //       console.log("🧾 Listings prepared:", listings);
  //       setProducts(listings);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("❌ Ошибка при получении данных:", err);
  //       setLoading(false);
  //     });
  // }, []);


  useEffect(() => {
    console.log("➡ fetch start");
  
    fetch('https://incredible-love-6a2151f21a.strapiapp.com/api/listings?populate=*')
      .then(res => res.json())
      .then(data => {
        console.log("🚀 STRAPI RESPONSE:", data);
  
        if (!Array.isArray(data?.data)) {
          console.warn("⚠️ Неправильный формат данных:", data);
          return;
        }
  
        const listings = data.data.map(item => ({
          id: item.documentId,
          title: item.title || 'Без названия',
          price: item.multicurrencyprice?.price_usd || 0,
          area: item.apartment_info?.area || '—',
          rooms: item.apartment_info?.rooms || '—',
          city: item.location_info?.city || '—',
          street: item.location_info?.street || '—',
          building: item.location_info?.building_number || '—',
          image: item.images?.[0]?.formats?.thumbnail?.url || item.images?.[0]?.url || '',
        }));
        
        console.log("🧾 Listings prepared (titles only):", listings);
        setProducts(listings);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Ошибка при получении данных:", err);
        setLoading(false);
      });
  }, []);
  
  
 

  return (
    <>
      <div className="theme-modern">
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
                  "url(/assets/images/demo-modern/section-bg-7.jpg)",
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
                          Back to home
                        </span>
                        <span className="btn-animate-y-2" aria-hidden="true">
                          <i
                            className="icon-arrow-left2 size-14"
                            aria-hidden="true"
                          ></i>{" "}
                          Back to home
                        </span>
                      </span>
                    </Link>
                  </div>
                  <hr className="white mt-0 mb-0" />
                </div>
                <div className="row">
                  <div className="col-9 col-sm-8">
                    <h1 className="hs-title-5 font-alt overflow-hidden mb-0">
                      <span className="d-block wow fadeRotateIn">
                        {" "}
                        Selected{" "}
                      </span>
                      <span className="d-block text-end wow fadeRotateIn">
                        Works
                      </span>
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
                    <Image
                      width="50"
                      height="73"
                      src="/assets/images/demo-modern/arrow-down-1-white.svg"
                      alt="Scroll Down"
                    />
                  </span>
                </div>
              </div>
              {/* End Scroll Down */}
            </ParallaxContainer>
            <>
              {/* Blog Section */}
              <section className="page-section" id="blog">
                <div className="container position-relative">
                  {/* Blog Grid */}
                  <div className="row gx-5 mt-n50 mt-sm-n30 mb-50 mb-sm-30">
                    {/* Post Item */}
                    {/* {blogs12.map((elm, i) => ( */}
                    {loading ? (
                      <div>Loading...</div>
                    ) : (
                      products.map((elm, i) => (

                    //   <div
                    //     key={i}
                    //     className="post-prev-2 col-md-6 col-lg-4 mt-50 mt-sm-30"
                    //   >
                    //     <div className="post-prev-2-img">
                    //       <Link href={`./modern-blog-single/${elm.id}`}>
                    //         <Image
                    //           src={elm.imgSrc}
                    //           width={700}
                    //           height={479}
                    //           alt="Image Description"
                    //         />
                    //       </Link>
                    //     </div>
                    //     <h3 className="post-prev-2-title">
                    //       <Link href={`./modern-blog-single/${elm.id}`}>
                    //         {elm.title}
                    //       </Link>
                    //     </h3>
                    //     <div className="post-prev-2-info">{elm.date}</div>
                    //   </div>
                    // ))

                    // <div key={i} className="post-prev-2 col-md-6 col-lg-4 mt-50 mt-sm-30">
                    //   <div className="post-prev-2-img">
                    //     <Link href={`./modern-blog-single/${elm.id}`}>
                    //       <Image
                    //         src={elm.image}
                    //         width={700}
                    //         height={479}
                    //         alt={elm.title}
                    //       />
                    //     </Link>
                    //   </div>
                    //   <h3 className="post-prev-2-title">
                    //     <Link href={`./modern-blog-single/${elm.id}`}>
                    //       {elm.title}
                    //     </Link>
                    //   </h3>
                    //   <div className="post-prev-2-info">${elm.price}</div>
                    // </div>

                    // <div key={i} className="post-prev-2 col-md-6 col-lg-4 mt-50 mt-sm-30">
                    //   <div className="post-prev-2-img">
                    //     <Link href={`./modern-blog-single/${elm.id}`}>
                    //       {/* <Image
                    //         src={elm.image}
                    //         width={700}
                    //         height={479}
                    //         alt={elm.title}
                    //       /> */}
                    //     </Link>
                    //   </div>
                    //   <h3 className="post-prev-2-title">
                    //     <Link href={`./modern-blog-single/${elm.id}`}>
                    //       {elm.title}
                    //     </Link>
                    //   </h3>
                    //   <div className="post-prev-2-info">${elm.price}</div>
                    // </div>


                    <div key={i} className="post-prev-2 col-md-6 col-lg-4 mt-50 mt-sm-30">
                      <div className="post-prev-2-img">
                        {/* <Link href={`./modern-blog-single/${elm.documentId}`}> */}
                        <Link href={`/${locale}/modern-blog-single/${elm.id}`}>

                          {/* 👇 Картинку раскомментируешь позже */}
                          <Image
                            src={elm.image}
                            width={700}
                            height={479}
                            alt={elm.title}
                          />
                        </Link>
                      </div>

                      <h3 className="post-prev-2-title">
                        <Link href={`./modern-blog-single/${elm.id}`}>
                          {elm.title}
                        </Link>
                      </h3>

                      <div className="post-prev-2-info">
                        <p>Цена: ${elm.price}</p>
                        <p>Комнат: {elm.rooms}</p>
                        <p>Площадь: {elm.area} м²</p>
                        <p>
                          Адрес: {elm.city}, ул. {elm.street}, д. {elm.building}
                        </p>
                      </div>
                    </div>


                    )))}
                    {/* End Post Item */}

                    {/* End Post Item */}
                  </div>
                  {/* End Blog Grid */}
                  {/* Pagination */}
                  <Pagination className={"pagination"} />
                  {/* End Pagination */}
                </div>
              </section>
              {/* End Blog Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Newsletter Section */}
              <section className="small-section">
                <div className="container">
                  {/* Newsletter Form */}
                  <div className="row wow fadeInUp">
                    <div className="col-lg-8 offset-lg-2">
                      <h2 className="section-title-tiny mb-30">
                        <span className="icon-ellipse" /> Subscribe our
                        newsletter
                      </h2>
                      <Form5 />
                    </div>
                  </div>
                  {/* End Newsletter Form */}
                </div>
              </section>
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