import { Component } from "solid-js";
import { IAnimeList } from "../types/list.interface";

export const CardProps: Component = ({ ...props }: IAnimeList) => {
  return (
    <div class={"rounded-lg"} style={{ "background-image": `url('/cover/${props.coverImage}')`, "background-size": "cover" }}>
      <div class={"flex flex-col gap-2 p-4 bg-black/75 w-full h-full rounded-lg"}>
        <div class={"flex flex-col"}>
          <h1 class="text-2xl text-white font-bold">{props.title.japanese}</h1>
          <h1 class="text-lg text-gray-500 font-bold">{props.title.romaji}</h1>
        </div>
        <p class="text-sm text-gray-300">{props.description}</p>
        <div class={"flex flex-row gap-1"}>
          <button
            class={"border border-pink-500 text-pink-500 px-2 py-1 rounded-md"}
            onClick={() => window.open(props.website.info, "_blank")}
          >
            Info
          </button>
          <button
            class={"bg-pink-500 text-white px-2 py-1 rounded-md"}
            onClick={() => window.open(props.website.stream, "_blank")}
          >
            Stream
          </button>
        </div>
      </div>
    </div>
  );
};
