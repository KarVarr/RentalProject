"use client";
import { blogs8 } from "@/data/blogs";
import { Toast, ToastContainer } from "react-bootstrap";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PrivacyModal from "@/components/policy/PrivacyModal";
import { useTranslations } from 'next-intl';

export default function Blog() {
  const [email, setEmail] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const t = useTranslations();
  
  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      const data = await res.json();
      if (res.ok) {
        setToastMessage("✅ Вы успешно подписались на обновления!");
        setEmail("");
      } else {
        setToastMessage("❌ Ошибка, подписка не оформлена: " + (data.error || "неизвестная ошибка"));
      }
    } catch (err) {
      console.error(err);
      setToastMessage("❌ Сетевая ошибка при подписке");
    } finally {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1500); // показывать 1.5 секунды
    }
  };

  return (
    <>
      {/* <div className="row">
        <div className="col-8 col-sm-7">
          <h3 className="hs-title-5 font-alt overflow-hidden mb-100 mb-md-40">
            <span className="d-block wow fadeRotateIn"> Latest </span>
            <span className="d-block text-end wow fadeRotateIn"> News </span>
          </h3>
        </div>
      </div> */}
      {/* Blog Grid */}
      <div className="row gy-4">
        {/* Post Item */}
        {/* {blogs8.map((post, index) => (
          <div
            key={index}
            className={`post-prev-2 col-md-6 col-lg-4`}
            data-rellax-y={post.rellaxY}
            data-rellax-speed={post.rellaxSpeed}
            data-rellax-percentage={post.rellaxPercentage}
          >
            <div
              className={`
              ${index == 0 ? "mt-140 mt-md-0" : ""}
              ${index == 2 ? "mt-n140 mt-md-0" : ""}
            `}
            >
              <div className="post-prev-2-img">
                <Link href={`https://www.instagram.com/p/DI8l6fFsp1b/`} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src={post.imageSrc}
                    width={700}
                    height={479}
                    alt="Image Description"
                  />
                  </a>
                </Link>
              </div>
              <h3 className="post-prev-2-title">
                <Link href={`/modern-blog-single/${post.id}`}>
                  {post.title}
                </Link>
              </h3>
              <div className="post-prev-2-info">{post.date}</div>
            </div>
          </div>
        ))} */}
        {/* End Post Item */}
      </div>
      {/* End Blog Grid */}
      {/* Newsletter Form */}
      <div className="row mt-100 mt-sm-60 wow fadeInUp">
        <div className="col-lg-8 offset-lg-2">
          
        <form onSubmit={handleSubscribe} className="form newsletter-modern">
            <div className="d-md-flex justify-content-between mb-40">
              <label htmlFor="newsletter-email" className="visually-hidden">
                Your email
              </label>
              <input
                placeholder={t('blog.homeEnterYourEmain')}
                className="newsletter-field mb-sm-20 me-md-4"
                id="newsletter-email"
                name="newsletter-email"
                type="email"
                pattern=".{5,100}"
                required
                aria-required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="d-md-flex align-items-end">
                <button
                  type="submit"
                  aria-controls="subscribe-result"
                  className="btn btn-mod btn-border btn-medium btn-circle text-nowrap"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1"> {t('blog.homeButtonSubscribe1')}</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                    {t('blog.homeButtonSubscribe2')}
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div className="form-tip">
              <i className="icon-info size-16" /> {t('blog.homePrivicy')} {" "}
              <PrivacyModal /> 
            </div>
            {/* Toast уведомление */}
              <ToastContainer
                className="p-3 position-fixed top-50 start-50 translate-middle"
                style={{ zIndex: 1060 }}
              >
                <Toast
                  show={showToast}
                  bg={toastMessage.startsWith("✅") ? "success" : "danger"}
                  onClose={() => setShowToast(false)}
                  delay={1500}
                  autohide
                >
                  <Toast.Body className="text-white text-center fw-bold">{toastMessage}</Toast.Body>
                </Toast>
              </ToastContainer>
          </form>

            {/* <div className="text-center mb-40">
              <h2 className="section-title-tiny mb-30 d-inline-flex align-items-center justify-content-center">
                <span className="icon-ellipse me-2" /> The latest news is on our telegram
              </h2>
              <div>
                <a
                  href="https://t.me/trendsetteramultibrand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-mod btn-border btn-medium btn-circle text-nowrap"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">Subscribe Now</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      Subscribe Now
                    </span>
                  </span>
                </a>
              </div>
            </div> */}



        </div>
      </div>{" "}
    </>
  );
}
