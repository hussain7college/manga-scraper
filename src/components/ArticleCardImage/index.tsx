import { Button, Paper, Text, Title } from '@mantine/core';
import classes from './ArticleCardImage.module.css';

type ArticleCardImageProps = {
  title: string;
  category: string;
  buttonText?: string;
  image: string;
};

export function ArticleCardImage({
  title,
  category,
  buttonText = 'Read',
  image,
}: ArticleCardImageProps) {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card} bg={image}>
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        {buttonText}
      </Button>
    </Paper>
  );
}
