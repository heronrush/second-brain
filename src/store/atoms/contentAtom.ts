import { atom } from "jotai";

type TagType = {
  id: number;
  title: string;
  tag_id: number;
};

type ContentType = {
  id: number;
  title: string;
  description?: string;
  link: string;
  type: "TWEET" | "VIDEO" | "DOCUMENT" | "LINK";
  userId: number;
  tags: TagType;
};

// this is the userId received from the backend
export const userIdAtom = atom<number | null>(null);

// based on that userId the contents are fetched
export const userContentAtom = atom<[] | ContentType[]>();
