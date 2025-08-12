import { atom } from "jotai";

type ContentType = "tweets" | "videos" | "documents" | "links" | "tags";

export const tileSelectedAtom = atom(false);

export const currentTileSelectedAtom = atom<ContentType | null>(null);
