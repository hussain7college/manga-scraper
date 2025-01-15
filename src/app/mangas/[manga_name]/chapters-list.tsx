'use client';
import { List, ThemeIcon } from '@mantine/core';
import { IconBook } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

type ChaptersListProps = {
  chapters: string[];
  mangaName: string;
};

export default function ChaptersList({
  chapters,
  mangaName,
}: ChaptersListProps) {
  const navigation = useRouter();

  const handleRead = (url: string) => {
    navigation.push(url);
  };

  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconBook size={16} />
        </ThemeIcon>
      }
    >
      {chapters.map((chapter) => (
        <List.Item
          key={chapter}
          style={{ cursor: 'pointer' }}
          onClick={() => handleRead(`/mangas/${mangaName}/${chapter}`)}
        >
          {chapter}
        </List.Item>
      ))}
    </List>
  );
}
