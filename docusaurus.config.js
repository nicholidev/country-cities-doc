const math = require('remark-math')
const katex = require('rehype-katex')
require('dotenv').config()

module.exports = {
  title: 'Countries, States, Cities - NPM',
  tagline: 'Documentation and Guides for country-cities',
  url: 'https://docs.uniswap.org/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'nicholidev', // Usually your GitHub org/user name.
  projectName: 'country-cities', // Usually your repo name.
  themeConfig: {
    image: 'img/twitter_card_bg.jpg',
    prism: {
      additionalLanguages: ['javascript','typescript'],
    },
    navbar: {
      title: 'Country Cities',
      logo: {
        alt: 'Country Cities icon',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/v1/overview',
          label: 'Docs',
          position: 'left',
          className: 'V3_active',
        },
        {
          href: 'https://github.com/nicholidev/country-cities/issues',
          label: 'Report Issue',
          position: 'right',
          className: 'persistent',
        },
        {
          href: 'https://github.com/nicholidev/country-cities',
          label: 'GitHub',
          position: 'right',
          className: 'persistent',
        },
        {
          href: 'https://nicholijin.com/',
          label: 'Publisher',
          position: 'right',
          className: 'persistent',
        },
      ],
    },
    footer: {
      // style: "dark",
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Overview',
              href: '/v1/overview',
            },
            {
              label: 'Installation',
              href: '/v1/installation',
            },
            {
              label: 'Es6',
              href: '/v1/es6/overview',
            },
            {
              label: 'Amd',
              href: '/v1/amd/overview',
            },
            {
              label: 'Quick Guide',
              href: '/v1/quick',
            },
          ],
        },
        {
          title: 'Extra Links',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/nicholidev/country-cities',
            },
            {
              label: 'Npm',
              href: 'https://www.npmjs.com/package/country-cities',
            },
            {
              label: 'Yarn',
              href: 'https://yarnpkg.com/package/country-cities',
            },
            {
              label: 'Report Issue',
              href: 'https://github.com/nicholidev/country-cities/issues',
            },
          ],
        },
        {
          title: 'Author',
          items: [
            {
              label: 'Personal Website',
              href: 'https://nicholijin.com/',
            },
            {
              label: 'Contact',
              href: 'https://nicholijin.com/contact',
            },
            {
              label: 'Codingame',
              href: 'https://www.codingame.com/profile/2d2f02e5a43320543afb8352edcaf6cd3601874',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/nicholi-jin-093388233/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/Pr3GZP8238',
            },
            {
              label: 'Skype',
              href: 'https://join.skype.com/invite/hwp9PMp0W8mA',
            },
          ],
        },
      ],
      // copyright: `unlicensed`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'v1',
          path: 'docs/v1',
          routeBasePath: 'v1/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          includeCurrentVersion: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          // customCss2: require.resolve('./src/css/colors.css'),
        },
      },
    ],
  ],
}
