import ModernBlogPageClient from './ModernBlogPageClient';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const titles = {
    en: "Sale of apartments",
    ru: "Продажа квартир",
    am: "Բնակարանների վաճառք",
  };

  const descriptions = {
    en: "",
    ru: "",
    am: "",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default function ModernBlogPage(props) {
  return <ModernBlogPageClient {...props} />;
}