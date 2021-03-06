/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

module.exports = {
  title: 'Computerization',
  tagline: 'C社 << Computerization << 世外信息化社',
  url: 'https://computerization.io',
  baseUrl: '/',
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'Computerization', // Usually your GitHub org/user name.
  projectName: 'computerization.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Computerization',
      logo: {
        alt: 'Computerization Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        { to: 'alumni', label: 'Alumni', position: 'left' },
        { to: 'docs/about-us', label: 'Docs', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/Computerization',
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
              label: 'Docs',
              to: 'docs/about-us',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Computerization',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'Computerization Logo',
        src: 'img/logo.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Computerization. Built with Docusaurus.`,
    },
  },
  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        blog: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
