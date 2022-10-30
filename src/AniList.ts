import { IAnimeList } from "./types/list.interface";

export const AniList: Array<IAnimeList> = [
  {
    title: {
      japanese: "スロウスタート",
      romaji: "Slow Start",
    },
    website: {
      info: "https://myanimelist.net/anime/35540/Slow_Start",
      stream: "https://www.crunchyroll.com/series/GRE5G4DP6/slow-start",
    },
    description: "Hana Ichinose has enrolled in high school one year late due to studying to get in. It might not seem like a big deal, but it is to her. She’s off to a slow start, but she wants to work hard and catch up to everyone else!",
    coverImage: "slow-start.jpg",
    isEnded: true,
    episodes: 12,
  },
  {
    title: {
      japanese: "超次元ゲイム ネプテューヌ THE ANIMATION",
      romaji: "Choujigen Game Neptune The Animation",
    },
    website: {
      info: "http://nep-anime.tv/anime/",
      stream: "https://www.bilibili.tv/th/play/35147",
    },
    description: "Choujigen Game Neptune The Animation follows Neptune and her friends' attempts at raising Shares, while dealing with an external threat that could spell the end of both the Goddesses and Gamindustri itself...",
    coverImage: "neptune.jpg",
    isEnded: true,
    episodes: 12,
  },
];