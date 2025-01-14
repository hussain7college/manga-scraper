'use client';

import { useState } from 'react';
import { Burger, Container, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import favicon from '@/assets/favicon.webp';
import classes from './Navbar.module.css';
import Link from 'next/link';

const links = [
  { link: '/manga-list', label: 'Manga List' },
  { link: '/scraping', label: 'Scraping' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

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
        <Image src={favicon} alt="Mantine logo" width={30} height={30} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
