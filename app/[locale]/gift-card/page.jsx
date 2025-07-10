import GiftCardPageClient from './GiftCardPageClient';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const titles = {
    en: "Gift Card",
    ru: "Подарочная карта",
    am: "Նվեր քարտ",
  };

  const descriptions = {
    en: "Give the gift of fashion with a Trendsetter gift card.",
    ru: "Подарите стиль с подарочной картой от Trendsetter.",
    am: "Նվիրեք ոճ Trendsetter-ի նվեր քարտով։",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default function GiftCardPage(props) {
  return <GiftCardPageClient {...props} />;
}
