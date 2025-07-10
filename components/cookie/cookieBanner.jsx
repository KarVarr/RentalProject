'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Cookies from 'js-cookie';

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '280px',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      zIndex: 10000,
    }}>
      <p style={{ margin: '0 0 15px', fontSize: '14px', lineHeight: '1.4' }}>
        {t('cookie.banner')}
      </p>
      <button
        onClick={acceptCookies}
        style={{
          width: '100%',
          padding: '10px 0',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          color: '#fff',
          fontWeight: '600',
          fontSize: '16px',
          background: 'linear-gradient(90deg, #192ed5 0%, #ae2e28 100%)',
          transition: 'background 0.3s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(90deg, #ae2e28 0%, #192ed5 100%)'}
        onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(90deg, #192ed5 0%, #ae2e28 100%)'}
      >
        {t('cookie.button')}
      </button>
    </div>
  );
}

