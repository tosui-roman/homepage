import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "陶酔ロマン",
  subTitle: "同人サークル『陶酔ロマン』オフィシャルサイト",
  brandTitle: "Home",

  description: "Demo Site",

  site: "https://tosui-roman.github.io///",

  locale: "en",

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_gallery,
      href: "/gallery",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
  ],

  username1: "八雲 櫻",
  sign1: "サークル代表",
  avatarImg1: "/image/gallery/sakura_meri.jpg",
  socialLinks1: [
    {
      icon: "fa6-brands:x-twitter",
      link: "https://x.com/yakumoougama?s=21&t=HgKqcnVyxch9ihDE10UdoA",
    },
    {
      icon: "simple-icons:pixiv",
      link: "https://www.pixiv.net/users/104579569",
    },
  ],

  username2: "りーん10",
  sign2: "サイト管理者",
  avatarImg2: "/image/gallery/rein_yuma.jpg",
  socialLinks2: [
    {
      icon: "fa6-brands:x-twitter",
      link: "https://x.com/rein_13424?s=21&t=HgKqcnVyxch9ihDE10UdoA",
    },
    {
      icon: "simple-icons:pixiv",
      link: "https://www.pixiv.net/users/111882781",
    },
  ],

  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "/image/banner/sakura_banner1.jpg",
    "/image/banner/rein_banner1.jpg",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
