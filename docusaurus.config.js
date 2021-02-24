module.exports = {
  title: 'Jules Peguet',
  tagline: 'Student developper',
  url: 'https://j-peguet.github.io/portfolio',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'j-peguet', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.
  themeConfig: {
    // Metadatas
    image: 'img/logo.jpg',
    metadatas: [{name: 'twitter:card', content: 'Jules Peguet: Portfolio, documentation/blog'}],
    navbar: {
      title: 'Jules Peguet',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/j-peguet/portfolio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    hideableSidebar: true,
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: 'docs/',
            },
            {
              label: 'Kubernetes Installation',
              to: 'docs/Kubernetes/1_install_&_configuration/1_install_VM',
            },
          ],
        },
        {
          title: 'Contact me',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/jules-peguet',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Jules_Peguet',
            },
            {
              label: 'Mail',
              href: 'mailto:jules.peguet@epsi.fr',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/j-peguet',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jules Peguet`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/j-peguet/portfolio/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/j-peguet/portfolio/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
