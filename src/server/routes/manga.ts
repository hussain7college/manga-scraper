'use server';
import { MANGA_PATH } from '@/constants';
import fs from 'fs/promises';

export type MangaType = {
  name: string;
  chapters: string[];
};

export async function listManga(): Promise<MangaType[]> {
  // get manga names from folder names in /manga
  const result: MangaType[] = [];
  const mangaNames = await fs.readdir(MANGA_PATH);
  for (const name of mangaNames) {
    const chapters = await fs.readdir(`${MANGA_PATH}/${name}`);
    result.push({ name, chapters });
  }
  return result;
}

export async function getManga(name: string): Promise<MangaType> {
  const chapters = await fs.readdir(`${MANGA_PATH}/${name}`);
  return { name, chapters };
}
