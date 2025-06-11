import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

import avataImage1 from "./src/content/images/sakura_meri.jpg";
import avataImage2 from "./src/content/images/rein_yuma.jpg";
import banner1 from "./src/content/banners/sakura_banner1.jpg";
import banner2 from "./src/content/banners/rein_banner1.jpg";

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
  avatarImg1: avataImage1,
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
  avatarImg2: avataImage2,
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

  banners: [banner1, banner2],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
