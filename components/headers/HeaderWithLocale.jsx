"use client";
import { useLocale } from "next-intl";
import Header8 from "./Header8";
import { getModernMultipage } from "@/data/menu";

export default function HeaderWithLocale() {
  const locale = useLocale();
  const links = getModernMultipage(locale);

  return <Header8 links={links} />;
}
