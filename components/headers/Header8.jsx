"use client";
import { toggleMobileMenu } from "@/utils/toggleMobileMenu";
import Nav from "./components/Nav";
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

const links = [
  { href: "#home", text: "Home", className: "active", dataBtnAnimate: "y" },
  { href: "#about", text: "About", dataBtnAnimate: "y" },
  { href: "#services", text: "Services", dataBtnAnimate: "y" },
  { href: "#portfolio", text: "Portfolio", dataBtnAnimate: "y" },
  { href: "#blog", text: "Blog", dataBtnAnimate: "y" },
  { href: "#contact", text: "Contact", dataBtnAnimate: "y" },
];

import Image from "next/image";
import LanguageSelect from "./components/LanguageSelect";
import Link from "next/link";


export default function Header8({ links }) {
  const params = useParams();
  const locale = params?.locale
  const t = useTranslations();

  const navLinks = [
    { href: `/${locale}/home`, text: t('nav.home') },
    { href: `/${locale}/about`, text: t('nav.about') },
    { href: `/${locale}/shop`, text: t('nav.shop') },
    { href: `/${locale}/amu`, text: t('nav.amu') },
    { href: `/${locale}/blog`, text: t('nav.blog') },
    { href: `/${locale}/contacts`, text: t('nav.contacts') },
  ];

  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap local-scroll">
        <a href="#top" className="logo">
          <Image
            src="/assets/images/demo-modern/logo-dark.svg"
            alt="Your Company Logo"
            width={84}
            height={33}
            className="light-mode-logo"
          />
          <Image
            src="/assets/images/demo-modern/logo-white.svg"
            alt="Your Company Logo"
            width={84}
            height={33}
            className="dark-mode-logo"
          />
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          <Nav links={navLinks} animateY />
          <li className="desktop-nav-display">
            <div className="vr" />
          </li>
          {/* Languages */}
          <LanguageSelect />
          {/* End Languages */}
          <li>
            {links[0].href.includes("/") ? (
              <Link
                href={links[links.length - 1].href}
                className="opacity-1 no-hover"
              >
                <span
                  className="btn btn-mod btn-border btn-border-white btn-small btn-circle"
                  data-btn-animate="y"
                >
                  {t('nav.letsTalk')}
                </span>
              </Link>
            ) : (
              <a href="#contact" className="opacity-1 no-hover">
                <span
                  className="btn btn-mod btn-border btn-border-white btn-small btn-circle"
                  data-btn-animate="y"
                >
                  {t('nav.letsTalk')}
                </span>
              </a>
            )}
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
