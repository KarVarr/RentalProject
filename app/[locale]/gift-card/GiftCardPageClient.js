'use client';

import Footer2 from "@/components/footers/Footer2";
import HeaderWithLocale from "@/components/headers/HeaderWithLocale";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
// import Image from "next/image";
import Link from "next/link";

export default function GiftCardPageClient() {
  const params = useParams();
  const locale = params.locale;
  const t = useTranslations();

  return (
    <div className="theme-modern">
      <div className="page" id="top">
        <nav className="main-nav dark transparent stick-fixed wow-menubar">
          <HeaderWithLocale locale={locale} />
        </nav>

        <main id="main">
          <ParallaxContainer
            className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
            style={{ backgroundImage: "url(/assets/images/demo-modern/navGiftCard.jpg)" }}
            id="home"
          >
            <div className="container position-relative">
              <div className="mb-20">
                <div className="mb-10">
                  <Link href={`/${locale}/home`} className="link-hover-anim align-middle" data-btn-animate="y">
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">
                        <i className="icon-arrow-left2 size-14" /> {t('home.buttonBackToHome')}
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        <i className="icon-arrow-left2 size-14" /> {t('home.buttonBackToHome')}
                      </span>
                    </span>
                  </Link>
                </div>
                <hr className="white mt-0 mb-0" />
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  <h1 className="hs-title-4 font-alt overflow-hidden mb-0">
                    <span className="d-block wow fadeRotateIn">
                      {t('gift.title')}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </ParallaxContainer>

          <section className="page-section" id="gift-card-info">
            <div className="container">
              {/* Title */}
             
              
              {/* Terms and Conditions */}
              <div className="section">
                <h2>{t('gift.programTitle')}</h2>
                <p>{t('gift.programDescription')}</p>
              </div>

              {/* General Terms */}
              <div className="section">
                <h2>{t('gift.generalTitle')}</h2>
                <h4>{t('gift.generalTerms')}</h4>
                <p>{t('gift.generalTermsDescription')}</p>

                {/* Participation and Registration */}
                <h4>{t('gift.registrationTitle')}</h4>
                <p>{t('gift.registrationDescription')}</p>

                {/* Points Earning and Usage */}
                <h4>{t('gift.pointsTitle')}</h4>
                <p>{t('gift.pointsDescription')}</p>

                {/* Suspension or Termination of Participation */}
                <h4>{t('gift.suspensionTitle')}</h4>
                <ul>
                  <li>{t('gift.suspensionPoint1')}</li>
                  <li>{t('gift.suspensionPoint2')}</li>
                </ul>
              </div>

              <div className="section">
                {/* Title */}
                <h2>{t('gift.giftCardsTitle')}</h2>
                {/* Gift Cards Description */}
                <p>{t('gift.giftCardsDescription')}</p>
              </div>

              <div className="section">
                {/* Title */}
                <h2>{t('gift.returnsAndCompensationsTitle')}</h2>

                {/* Returns and Compensations Description */}
                <p>{t('gift.returnsAndCompensationsDescription')}</p>

                {/* List of conditions for returns */}
                <h4>{t('gift.returnConditionsTitle')}</h4>
                <ul>
                  <li>{t('gift.returnCondition1')}</li>
                  <li>{t('gift.returnCondition2')}</li>
                  <li>{t('gift.returnCondition3')}</li>
                </ul>

                {/* Bonus Points Policy */}
                <p>{t('gift.bonusPointsPolicyDescription')}</p>
              </div>

              <div className="section">
                {/* Title */}
                <h2>{t('gift.privacyPolicyTitle')}</h2>

                {/* Privacy Policy Description */}
                <p>{t('gift.privacyPolicyDescription')}</p>

                {/* Collected Data Categories */}
                <p>{t('gift.collectedDataDescription')}</p>

                {/* Data Protection */}
                <p>{t('gift.dataProtectionDescription')}</p>

                {/* Third Party Data Sharing */}
                <h4>{t('gift.thirdPartySharingTitle')}</h4>
                <ul>
                  <li>{t('gift.thirdPartySharingPoint1')}</li>
                  <li>{t('gift.thirdPartySharingPoint2')}</li>
                </ul>

                {/* Client Rights */}
                <p>{t('gift.clientRightsDescription')}</p>
              </div>

              <div className="section">
                {/* Title */}
                <h2>{t('gift.otherTermsTitle')}</h2>

                {/* Other Terms Description */}
                <p>{t('gift.otherTermsDescription')}</p>
                <p>{t('gift.liabilityDisclaimerDescription')}</p>
                <p>{t('gift.serviceDisruptionDescription')}</p>
                <p>{t('gift.indirectLossesDescription')}</p>
                <p>{t('gift.changesToTermsDescription')}</p>
                <p>{t('gift.invalidTermsDescription')}</p>
              </div>

              {/* Back to home button */}
              <div className="row justify-content-center mt-5 mt-md-6">
              <div className="col-auto text-center">
                <Link
                  href={`/${locale}/home`}
                  className="btn btn-mod btn-white btn-circle btn-ellipse"
                  data-btn-animate="ellipse"
                >
                  <span className="btn-ellipse-inner">
                    <span className="btn-ellipse-unhovered">
                      {t('gift.homeButton')}{" "}
                      <i className="icon-arrow-right2 size-14" aria-hidden="true"></i>
                    </span>
                    <span className="btn-ellipse-hovered" aria-hidden="true">
                      {t('gift.homeButton')}{" "}
                      <i className="icon-arrow-right2 size-14" aria-hidden="true"></i>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
              
            </div>
          </section>
        </main>

        <footer className="footer-1 bg-dark-1 light-content">
          <Footer2 />
        </footer>
      </div>
    </div>
  );
}
