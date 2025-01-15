import { getManga } from '@/server/routes/manga';
import { Container, Image, List, Paper, ThemeIcon, Title } from '@mantine/core';
import { IconBook } from '@tabler/icons-react';
import ChaptersList from './chapters-list';

type MangaPageProps = {
  params: {
    manga_name: string;
  };
};

export default async function MangaPage({
  params: { manga_name },
}: MangaPageProps) {
  // get title without url encoding
  const mangaName = decodeURIComponent(manga_name);

  const manga = await getManga(mangaName);

  return (
    <Container>
      <Paper p="xl" shadow="xs" style={{ textAlign: 'center' }}>
        <Title order={1} mb="md">
          {manga.name}
        </Title>
        <Image
          src="https://olympustaff.com/images/manga/1662548242.jpg"
          alt="manga cover"
          style={{ height: 500, marginBottom: 20 }}
        />
        <ChaptersList chapters={manga.chapters} mangaName={manga.name} />
      </Paper>
    </Container>
  );
}
