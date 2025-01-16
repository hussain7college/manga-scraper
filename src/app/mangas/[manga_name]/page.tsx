import { getManga } from '@/server/routes/manga';
import {
  Container,
  Group,
  Image,
  List,
  Paper,
  Stack,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { IconBook } from '@tabler/icons-react';
import ChaptersList from './chapters-list';

type MangaPageProps = {
  params: Promise<{ manga_name: string }>;
};

export default async function MangaPage({ params }: MangaPageProps) {
  const { manga_name } = await params;
  // get title without url encoding
  const mangaName = decodeURIComponent(manga_name);

  const manga = await getManga(mangaName);

  return (
    <Container>
      <Paper p="xl" shadow="xs" style={{ textAlign: 'center' }}>
        <Group align="start">
          <Image
            src="https://olympustaff.com/images/manga/1662548242.jpg"
            alt="manga cover"
            style={{ height: 500, marginBottom: 20 }}
          />
          <Stack align="start">
            <Title order={1} mb="md">
              {manga.name}
            </Title>
            <ChaptersList chapters={manga.chapters} mangaName={manga.name} />
          </Stack>
        </Group>
      </Paper>
    </Container>
  );
}
