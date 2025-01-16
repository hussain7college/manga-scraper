import { listManga, type MangaType } from '@/server/routes/manga';
import { Container, Grid } from '@mantine/core';
import MangaCard from './manga-card';

export default async function MangasPage() {
  const mangaList: MangaType[] = await listManga();
  return (
    <Container>
      <h1>Manga List</h1>
      <Grid columns={3}>
        {mangaList.map((manga) => (
          <MangaCard
            key={manga.name}
            title={manga.name}
            image="https://olympustaff.com/images/manga/1662548242.jpg"
            category={manga.chapters.length}
            url={`/mangas/${manga.name}`}
          />
        ))}
      </Grid>
    </Container>
  );
}
