'use client';

import { useState } from 'react';
import {
  ActionIcon,
  Burger,
  Container,
  Group,
  Image,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import NextImage from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import favicon from '@/assets/favicon.webp';
import classes from './Navbar.module.css';
import Link from 'next/link';
import {
  IconBrightness,
  IconMoonFilled,
  IconSunFilled,
} from '@tabler/icons-react';

const links = [
  { link: '/mangas', label: 'Manga List' },
  { link: '/scraping', label: 'Scraping' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Link
          href="/"
          className={classes.logo}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Group align="center" justify="center" gap="sm">
            <Image
              component={NextImage}
              src={favicon.src}
              alt="Manga Scraper logo"
              width={30}
              height={30}
            />
            <Text>Manga Scraper</Text>
          </Group>
        </Link>
        <Group gap={5} visibleFrom="xs">
          {items}
          <ActionIcon
            size="lg"
            onClick={() => toggleColorScheme()}
            aria-label="Toggle Color Scheme"
            variant="transparent"
            color="gray"
          >
            {colorScheme === 'dark' ? (
              <IconSunFilled size={24} />
            ) : colorScheme === 'light' ? (
              <IconMoonFilled size={24} />
            ) : (
              <IconBrightness size={24} />
            )}
          </ActionIcon>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
