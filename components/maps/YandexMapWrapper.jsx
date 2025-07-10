// "use client";

// import dynamic from "next/dynamic";

// // Оборачиваем динамически карту, отключая SSR
// const YandexMap = dynamic(() => import("./YandexMap"), {
//   ssr: false,
// });

// export default function YandexMapWrapper(props) {
//   return <YandexMap {...props} />;
// }

"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Динамический импорт компонента карты 
const YandexMapDynamic = dynamic(() => import("./YandexMap"), {
  ssr: false,
  loading: () => (
    <div 
      style={{ 
        width: "100%", 
        height: "400px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "#f5f5f5"
      }}
    >
      Loading map...
    </div>
  )
});

const YandexMapWrapper = (props) => {
  // Проверка, что компонент рендерится на клиенте
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div 
        style={{ 
          width: "100%", 
          height: "400px", 
          backgroundColor: "#f5f5f5" 
        }}
      />
    );
  }

  return <YandexMapDynamic {...props} />;
};

export default YandexMapWrapper;