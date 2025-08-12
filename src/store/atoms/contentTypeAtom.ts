import { atom } from "jotai";

// type ContentType = "tweets" | "videos" | "documents" | "links" | "tags";

// export const tileSelectedAtom = atom(false);

// export const currentTileSelectedAtom = atom<ContentType | null>(null);

export const tweetTileAtom = atom(false);
export const videosTileAtom = atom(false);
export const documentsTileAtom = atom(false);
export const linksTileAtom = atom(false);
export const tagsTileAtom = atom(false);
