"use client";

import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/src/components/LocaleSwitcher";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <>
      <LocaleSwitcher />
      <h1>{t("title")}</h1>
    </>
  );
}
