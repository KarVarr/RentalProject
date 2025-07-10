// "use client";

// import { useEffect, useState } from "react";
// import { NextIntlClientProvider } from "next-intl";

// export default function IntlProviderWrapper({ children, locale }) {
//   const [messages, setMessages] = useState(null);

//   useEffect(() => {
//     async function loadMessages() {
//       const response = await import(`@/public/locales/${locale}.json`);
//       setMessages(response.default);
//     }
//     loadMessages();
//   }, [locale]);

//   if (!messages) return null; // или прелоадер

//   return (
//     <NextIntlClientProvider locale={locale} messages={messages}>
//       {children}
//     </NextIntlClientProvider>
//   );
// }


// import { NextIntlClientProvider } from "next-intl";

// export default function IntlProviderWrapper({ children, locale, messages }) {
//   return (
//     <NextIntlClientProvider locale={locale} messages={messages}>
//       {children}
//     </NextIntlClientProvider>
//   );
// }

// 'use client';

// import { NextIntlClientProvider } from 'next-intl';
// import { useEffect, useState } from 'react';

// export default function IntlProviderWrapper({ children, locale }) {
//   const [messages, setMessages] = useState(null);

//   useEffect(() => {
//     async function loadMessages() {
//       try {
//         const msgs = await import(`../../messages/${locale}.json`);
//         setMessages(msgs.default);
//       } catch (error) {
//         console.error('Failed to load messages:', error);
//         // Fallback to empty messages
//         setMessages({});
//       }
//     }
    
//     loadMessages();
//   }, [locale]);

//   if (!messages) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <NextIntlClientProvider locale={locale} messages={messages}>
//       {children}
//     </NextIntlClientProvider>
//   );
// }

// 'use client';

// import { NextIntlClientProvider } from 'next-intl';
// import { useEffect, useState } from 'react';

// export default function IntlProviderWrapper({ children, locale }) {
//   const [messages, setMessages] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadMessages() {
//       try {
//         // Поскольку у вас есть и папка messages и locales, пробуем оба варианта
//         let msgs;
        
//         try {
//           // Сначала пробуем messages (из корня)
//           msgs = await import(`../../messages/${locale}.json`);
//         } catch (error1) {
//           try {
//             // Затем пробуем locales (из public)
//             const response = await fetch(`/locales/${locale}.json`);
//             if (response.ok) {
//               msgs = { default: await response.json() };
//             } else {
//               throw new Error('Failed to fetch');
//             }
//           } catch (error2) {
//             // Fallback - создаем базовые сообщения
//             console.warn(`Failed to load messages for locale ${locale}:`, error2);
//             msgs = { 
//               default: {
//                 home: { title: "Welcome" },
//                 about: { title: "About" },
//                 contact: { title: "Contact" },
//                 stores: { title: "Stores" },
//                 amu: { title: "AMU" }
//               }
//             };
//           }
//         }
        
//         setMessages(msgs.default || {});
//       } catch (error) {
//         console.error('Failed to load messages:', error);
//         setMessages({});
//       } finally {
//         setLoading(false);
//       }
//     }
    
//     loadMessages();
//   }, [locale]);

//   // Не показываем лоадер, сразу рендерим контент
//   return (
//     <NextIntlClientProvider locale={locale} messages={messages}>
//       {children}
//     </NextIntlClientProvider>
//   );
// }

'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState } from 'react';

export default function IntlProviderWrapper({ children, locale }) {
  const [messages, setMessages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMessages() {
      try {
        const response = await fetch(`/locales/${locale}.json`);
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error(`❌ Failed to fetch messages for locale "${locale}"`, error);
        setMessages({});
      } finally {
        setLoading(false);
      }
    }

    loadMessages();
  }, [locale]);

  if (loading) return null; // или показать спиннер

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
