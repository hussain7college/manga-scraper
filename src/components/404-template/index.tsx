'use client';

import {
  Button,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import notFound from '@/assets/404.webp';
import classes from './NotFoundImage.module.css';
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFoundTemplate() {
  const navigation = useRouter();

  const handleRedirect = () => {
    navigation.back();
  };

  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image
          component={NextImage}
          src={notFound}
          className={classes.mobileImage}
          alt="404 image"
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            onClick={handleRedirect}
            className={classes.control}
          >
            Back to previous page
          </Button>
        </div>
        <Image
          component={NextImage}
          src={notFound}
          className={classes.desktopImage}
          alt="404 image"
        />
      </SimpleGrid>
    </Container>
  );
}
