"use server";

import AnimeCard, { AnimeProp } from "@/components/anime-card";

const MAX_LIMIT = 12;

export async function fetchAnime(page: number) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );
  const data = await response.json();
  return data.map((anime: AnimeProp, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
}
