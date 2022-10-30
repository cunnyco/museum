export interface IList {
  title: {
    japanese: string;
    romaji: string;
  }
  description: string;
  coverImage: string;
  isEnded: boolean;
  episodes: number;
  website: {
    info: string;
    stream: string;
  }
}
