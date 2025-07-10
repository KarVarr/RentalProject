'use client';
import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Hero1() {
  const t = useTranslations();
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120 ">
      {/* Home Section Content */}
      <div className="home-content pb-sm-60 text-start position-relative">
        <h1 className="hs-title-5 font-alt overflow-hidden mb-30 mb-sm-20">
          <span className="d-block text-center wow fadeRotateIn"
          style={{ color: "#ae2e28" }}
          >
            
            <Image
              className="hs-image-5 wow fadeInRight"
              data-wow-delay="0.8s"
              data-wow-offset={0}
              src="/assets/images/demo-modern/logo-white.svg"
              width={1200}
              height={1200}
              alt="Image Description"
            />{" "}
            {/* TRENDSETTER */}
            
          </span>
          {/* <span
            className="d-block text-left wow fadeRotateIn"
            data-wow-delay="0.2s"
            data-wow-offset={0}
            style={{ color: "#192ED5",
              // marginLeft: "250px", 
             }}
          >
            Á 
          </span> */}
          {/* <span
            className="d-block text-center wow fadeRotateIn"
            data-wow-delay="0.4s"
            data-wow-offset={0}
            style={{ color: "#ae2e28" }}
          > */}
            {/* <span style={{ color: "#192ED5" }}>Á</span> */}
            {/* <span style={{ color: "#192ED5" }}>M</span>
            <span style={{ color: "#192ED5" }}>U</span>
            LTIBRAND{" "}
            <Image
              className="hs-image-2 wow fadeInRight"
              data-wow-delay="0.8s"
              data-wow-offset={0}
              src="/assets/images/demo-modern/smile.png"
              width={208}
              height={208}
              alt="Image Description"
            />{" "} */}
            {/* <Image
              className="hs-image-3 wow fadeInLeft"
              data-wow-delay="0.8s"
              data-wow-offset={0}
              src="/assets/images/demo-modern/hs-image-3.jpg"
              alt="Image Description"
              width={362}
              height={208}
              style={{ height: "fit-content", width: "fit-content" }}
            /> */}
          {/* </span> */}
        </h1>
        {/* <h2
          className="hs-title-6 font-alt text-center mb-sm-20 wow fadeInUp"
          data-wow-delay="0.6s"
          data-wow-offset={0}
        >
          Specialized in Branding, Web Design and Photography
        </h2>
        <p className="hs-paragraph-2 wow clipRightIn" data-wow-delay="0.8s">
          We are a full-service creative studio creating beautiful digital
          experiences and products. Our mission is to make work process
          meaningful.
        </p> */}

        <div
          className="hs-line d-none d-lg-block wow fadeIn parallax-mousemove"
          data-offset={100}
          data-wow-delay="0.8s"
          style={{ width: '500px', height: '500px', position: 'absolute' }}
        >
          <Image
            src="/assets/images/demo-modern/smile.png"
            width={200}
            height={200}
            alt="Custom Moving Element"
          />
          {" "}
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-2 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper text-end">
          <a href="#about" className="scroll-down-2">
            {/* <Image
              src="/assets/images/demo-modern/arrow-down.svg"
              alt="Scroll Down"
              width={51}
              height={132}
            /> */}
            <i className="icon-arrow-down1 size-22 scroll-icon-down" aria-hidden="true" />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
      {/* Social Media Links */}
      <div className="hs-social left wow fadeInUp" data-wow-offset={0}>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/trendsetter.a.multibrand/"
            className="hs-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="visually-hidden">Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24"
                  viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/trendsetteramultibrand"
            className="hs-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="visually-hidden">Telegram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.5 2.3L1.8 10.5c-1.4.6-1.4 1.3-.2 1.7l5.4 1.7L18.8 7.6c.7-.4 1.2-.2.8.3L9.8 15.4l-.4 4.5c.6 0 .8-.2 1.1-.5l2.7-2.5 5.5 4c1 .6 1.7.3 2-.9l3.6-16.8c.3-1.5-.6-2.1-1.6-1.7z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/trendsetter-%D0%B0%CC%81-multibrand/"
            className="hs-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="visually-hidden">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.555v-5.569c0-1.33-.023-3.042-1.854-3.042-1.857 0-2.141 1.45-2.141 2.946v5.665H9.344V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.367-1.848 3.6 0 4.268 2.368 4.268 5.448v6.284zM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zm1.777 13.017H3.56V9h3.554v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.541C0 23.226.792 24 1.771 24h20.451c.98 0 1.778-.774 1.778-1.73V1.73C24 .774 23.206 0 22.225 0z" />
            </svg>
          </a>
        </div>

      {/* End Social Media Links */}
    </div>
  );
}
