export function generateMetadata({ params }) {
    const { locale } = params;
  
    const titles = {
      en: "Page Not Found",
      ru: "Страница не найдена",
      am: "Էջը չի գտնվել"
    };
  
    const descriptions = {
      en: "404",
      ru: "404",
      am: "404"
    };
  
    return {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en
    };
  }
  