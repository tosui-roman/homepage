import type I18nKeys from "../locales/keys";

interface Configuration {
  title: string;
  subTitle: string;
  brandTitle: string;

  description: string;

  site: string;

  locale: "en" | "zh-CN";

  navigators: { nameKey: I18nKeys; href: string }[];

  username1: string;
  sign1: string;
  avatarImg1: ImageMetadata;
  socialLinks1: { icon: string; link: string }[];

  username2: string;
  sign2: string;
  avatarImg2: ImageMetadata;
  socialLinks2: { icon: string; link: string }[];

  maxSidebarCategoryChip: number;
  maxSidebarTagChip: number;
  maxFooterCategoryChip: number;
  maxFooterTagChip: number;

  banners: ImageMetadata[];

  slugMode: "HASH" | "RAW";

  license: {
    name: string;
    url: string;
  };

  bannerStyle: "LOOP";
}

export type { Configuration };
