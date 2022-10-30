import type { Component } from "solid-js";
import { Card } from "./components/Card";
import { For } from "solid-js";
import { AniList } from "./AniList";

const App: Component = () => {
  return (
    <div class={"bg-[url('/background.jpg')] bg-cover h-screen"}>
      <div class={"grid place-items-center bg-white/25 h-screen"}>
        <div class={"flex flex-col gap-6"}>
          {/*<input type="text" class={"p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring duration-100"} />*/}
          <div class={"flex flex-col"}>
            <h1 class={'text-6xl font-bold text-center'}>✨Anime Museum</h1>
            <p class={"text-center"}>Contribute to the list at <a class={'text-base underline italic font-bold'} href={"https://github.com/cunnyco/animuseum"} target={'_blank'}>Github!</a></p>
          </div>
          <div id="list" class={"grid items-stretch lg:grid-cols-2 grid-cols-1 p-1 place-items-center gap-4 max-h-[600px] max-w-[900px] mx-auto overflow-y-scroll"}>
            <For each={AniList}>{(anime) =>
              <Card
                title={anime.title}
                description={anime.description}
                image={anime.coverImage}
                coverImage={anime.coverImage}
                website={anime.website}
                isEnded={anime.isEnded}
                episodes={anime.episodes}
              />
            }
            </For>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
