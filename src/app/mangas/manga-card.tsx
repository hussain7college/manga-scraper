'use client';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useRouter } from 'next/navigation';

type MangaCardProps = {
  title: string;
  image: string;
  category: string | number;
  url: string;
  buttonTitle?: string;
};

export default function MangaCard({
  title,
  image,
  category,
  url,
  buttonTitle = 'Read',
}: MangaCardProps) {
  const navigation = useRouter();

  const handleRead = () => {
    navigation.push(url);
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={image}
          height={160}
          alt="Manga Poster"
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="pink">{category}</Badge>
      </Group>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={handleRead}>
        {buttonTitle}
      </Button>
    </Card>
  );
}
