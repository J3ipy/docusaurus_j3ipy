import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentos de João Pedro',
  tagline: 'Androides sonham com ovelhas elétricas?',

  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://J3ipy.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus_j3ipy/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'J3ipy', // Usually your GitHub org/user name.
  projectName: 'docusaurus_j3ipy', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
            remarkPlugins: [require('remark-math')],
            rehypePlugins: [require('rehype-katex')],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC2bXKu9EDTxnpsf5iQGMC+4iSzxU1PI9HY9pmt3JS+gxm9xjDqYHf5Enrza/4',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'LABIC',
          },

          {
            href: 'https://github.com/J3ipy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentos LABIC',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Redes',
            items: [
              {
                label: 'Kaggle',
                href: 'https://www.kaggle.com/j3ipyexe',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/j3ipy/',
              },
              {
                label: 'Lattes',
                href: 'http://lattes.cnpq.br/0393390160975070',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()},  J3ipy.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
