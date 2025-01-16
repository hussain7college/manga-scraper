import '@mantine/core/styles.css';
import React from 'react';
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from '@mantine/core';
import { theme } from '../theme';
import { Navbar } from '../components/Navbar';

export const metadata = {
  title: 'Manga Scraper',
  description:
    'This is a tool for scraping manga from the internet and reading them.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.webp" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
