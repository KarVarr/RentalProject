// "use client";

// import { useEffect, useRef } from "react";
// import Script from "next/script";

// const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;
// const YandexMap = ({
//   center = [40.183347, 44.514810],
//   zoom = 16,
//   width = "100%",
//   height = "400px",
// }) => {
//   const mapRef = useRef(null);
//   const hasMap = useRef(false); // 🔒 Флаг, чтобы избежать повторной инициализации

//   useEffect(() => {
//     if (!mapRef.current || hasMap.current) return;

//     const initMap = () => {
//       if (hasMap.current) return;
//       const map = new window.ymaps.Map(mapRef.current, {
//         center,
//         zoom,
//         controls: ["zoomControl", "fullscreenControl"],
//       });

//       map.geoObjects.add(
//         new window.ymaps.Placemark(
//           center,
//           { balloonContent: "ТЦ Ташир стрит, Северный проспект 6/2" },
//           { preset: "islands#redDotIcon" }
//         )
//       );

//       hasMap.current = true; // помечаем, что карта уже инициализирована
//     };

//     if (window.ymaps) {
//       window.ymaps.ready(initMap);
//     }
//   }, [center.join(","), zoom]);

//   return (
//     <>
//       <Script
//         src={`https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`}
//         strategy="afterInteractive" // ✅ Лучше чем beforeInteractive для этой библиотеки
//       />
//       <div ref={mapRef} style={{ width, height }} />
//     </>
//   );
// };

// export default YandexMap;

// "use client";

// import { useEffect, useRef } from "react";
// import Script from "next/script";

// const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;

// const YandexMap = ({
//   center = [40.183347, 44.514810],
//   zoom = 16,
//   width = "100%",
//   height = "400px",
// }) => {
//   const mapRef = useRef(null);
//   const hasMap = useRef(false);
//   let mapInstance = useRef(null);

//   useEffect(() => {
//     const initMap = () => {
//       if (hasMap.current || !mapRef.current || !window.ymaps) return;

//       mapInstance.current = new window.ymaps.Map(mapRef.current, {
//         center,
//         zoom,
//         controls: ["zoomControl", "fullscreenControl"],
//       });

//       mapInstance.current.geoObjects.add(
//         new window.ymaps.Placemark(
//           center,
//           { balloonContent: "ТЦ Ташир стрит, Северный проспект 6/2" },
//           { preset: "islands#redDotIcon" }
//         )
//       );

//       hasMap.current = true;
//     };

//     if (window.ymaps) {
//       window.ymaps.ready(initMap);
//     }

//     return () => {
//       if (mapRef.current) {
//         mapRef.current.innerHTML = "";
//       }
//       hasMap.current = false;
//     };
//   }, [center.join(","), zoom]);

//   return (
//     <>
//       <Script
//         src={`https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`}
//         strategy="beforeInteractive"
//       />
//       <div ref={mapRef} style={{ width, height }} />
//     </>
//   );
// };

// export default YandexMap;

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Script from "next/script";

// const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;

// const YandexMap = ({
//   center = [40.183347, 44.514810],
//   zoom = 16,
//   width = "100%",
//   height = "400px",
// }) => {
//   const mapRef = useRef(null);
//   const [isScriptLoaded, setIsScriptLoaded] = useState(false);
//   const hasMap = useRef(false);

//   useEffect(() => {
//     if (!isScriptLoaded || hasMap.current || !mapRef.current) return;

//     const initMap = () => {
//       if (!window.ymaps || hasMap.current || !mapRef.current) return;

//       const map = new window.ymaps.Map(mapRef.current, {
//         center,
//         zoom,
//         controls: ["zoomControl", "fullscreenControl"],
//       });

//       map.geoObjects.add(
//         new window.ymaps.Placemark(
//           center,
//           { balloonContent: "ТЦ Ташир стрит, Северный проспект 6/2" },
//           { preset: "islands#redDotIcon" }
//         )
//       );

//       hasMap.current = true;
//     };

//     window.ymaps.ready(initMap);

//     return () => {
//       if (mapRef.current) {
//         mapRef.current.innerHTML = "";
//       }
//       hasMap.current = false;
//     };
//   }, [isScriptLoaded]);

//   return (
//     <>
//       <Script
//         src={`https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`}
//         strategy="afterInteractive"
//         onLoad={() => setIsScriptLoaded(true)}
//       />
//       <div ref={mapRef} style={{ width, height }} />
//     </>
//   );
// };

// export default YandexMap;

"use client";

import { useEffect, useRef } from "react";

// Глобальная переменная для отслеживания загрузки API
let isApiLoading = false;
let isApiLoaded = false;

// Функция для загрузки API Яндекс Карт (единожды)
const loadYandexMapsApi = () => {
  return new Promise((resolve, reject) => {
    // Если API уже загружен, сразу возвращаем результат
    if (isApiLoaded && window.ymaps) {
      resolve(window.ymaps);
      return;
    }
    
    // Если API уже загружается, ждем завершения
    if (isApiLoading) {
      const checkInterval = setInterval(() => {
        if (isApiLoaded && window.ymaps) {
          clearInterval(checkInterval);
          resolve(window.ymaps);
        }
      }, 100);
      return;
    }
    
    // Начинаем загрузку API
    isApiLoading = true;
    
    const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;
    if (!apiKey) {
      isApiLoading = false;
      reject(new Error("Yandex Maps API key is missing!"));
      return;
    }
    
    // Проверяем, не загружен ли скрипт уже
    const existingScript = document.querySelector(
      `script[src*="api-maps.yandex.ru/2.1"]`
    );
    
    if (existingScript) {
      // Если скрипт уже существует, ждем его загрузки
      if (window.ymaps) {
        isApiLoaded = true;
        isApiLoading = false;
        resolve(window.ymaps);
      } else {
        existingScript.addEventListener("load", () => {
          window.ymaps.ready(() => {
            isApiLoaded = true;
            isApiLoading = false;
            resolve(window.ymaps);
          });
        });
        
        existingScript.addEventListener("error", () => {
          isApiLoading = false;
          reject(new Error("Failed to load Yandex Maps script"));
        });
      }
      return;
    }
    
    // Создаем новый скрипт
    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
    script.async = true;
    
    script.onload = () => {
      window.ymaps.ready(() => {
        isApiLoaded = true;
        isApiLoading = false;
        resolve(window.ymaps);
      });
    };
    
    script.onerror = () => {
      isApiLoading = false;
      reject(new Error("Failed to load Yandex Maps script"));
    };
    
    document.body.appendChild(script);
  });
};

const YandexMap = ({
  center = [40.183347, 44.514810],
  zoom = 16,
  width = "100%",
  height = "400px",
}) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    // Safe check for browser environment
    if (typeof window === "undefined" || !mapRef.current) return;
    
    // Очищаем содержимое, если в контейнере что-то осталось
    if (mapRef.current.innerHTML !== "") {
      mapRef.current.innerHTML = "";
    }
    
    let isMounted = true;
    
    // Загружаем API и инициализируем карту
    loadYandexMapsApi()
      .then((ymaps) => {
        if (!isMounted || !mapRef.current) return;
        
        // Проверяем, создана ли уже карта на этом DOM элементе
        if (mapInstance.current) {
          mapInstance.current.destroy();
          mapInstance.current = null;
        }
        
        try {
          const map = new ymaps.Map(mapRef.current, {
            center,
            zoom,
            controls: ["zoomControl", "fullscreenControl"],
          });
          
          map.geoObjects.add(
            new ymaps.Placemark(
              center,
              { balloonContent: "ТЦ Ташир стрит, Северный проспект 6/2" },
              { preset: "islands#redDotIcon" }
            )
          );
          
          mapInstance.current = map;
        } catch (error) {
          console.error("Failed to initialize Yandex Map:", error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
      
    // Функция очистки
    return () => {
      isMounted = false;
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, [center, zoom]);

  return <div ref={mapRef} style={{ width, height }} />;
};

export default YandexMap;