"use client";
import { socialLinks } from "@/data/footer";
import React, { useState } from "react";
import PrivacyModal from "@/components/policy/PrivacyModal";
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer2() {
  const t = useTranslations();
  const locale = useLocale();
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <div className="container">
      <div className="page-section">
        <div className="row">
          {/* Copyright */}
          <div className="col-lg-3 text-center text-lg-start mb-md-50">
            © {new Date().getFullYear()} Trendsetter 
            <div className="small" style={{ fontSize: '0.5rem' }}>
            {t('footer.rights')}
            </div>

          </div>
          {/* End Copyright */}
          {/* Social Links */}
          <div className="col-lg-6 fw-social-inline text-center mb-md-40">
            {socialLinks.map((elm, i) => (
              <div key={i} className="fw-social-inline-item">
                <a
                  href={elm.href}
                  target="_blank"
                  rel="nofollow noopener"
                  className="link-hover-anim align-middle"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">{elm.text}</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      {elm.text}
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </div>
          {/* End Social Links */}
          <div
            className="col-lg-3 text-center text-lg-end local-scroll"
            onClick={scrollToTop}
          >
            <a href="#top" className="fw-top-link">
              <span className="fw-top-link-underline">{t('footer.buttonBackToTop')}</span>
              <span className="icon ms-1">
                <i className="icon-arrow-up1 size-22" />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Footer Text */}
      <div className="footer-text mt-n10 pb-50"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px"
          }}>
        <div >
        <Link
          href={`/${locale}/gift-card`}
          className="link-hover-anim align-middle"
          data-btn-animate="y"
        >
          <span className="btn-animate-y">
            {/* Первая часть текста (анимируется вверх при ховере) */}
            <span className="btn-animate-y-1 d-inline-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-2"
                aria-hidden="true"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              {t("footer.giftCard")}
            </span>

            {/* Вторая часть (всплывает при ховере) */}
            <span className="btn-animate-y-2 d-inline-flex align-items-center" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-2"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              {t("footer.giftCard")}
            </span>
          </span>
        </Link>

        </div>
        <div className="small">
          <PrivacyModal />
        </div>
      </div>
      {/* End Footer Text */}
    </div>
  );
}
