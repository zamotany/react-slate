const users = [
  {
    caption: 'Haul CLI',
    image: 'https://cloud.githubusercontent.com/assets/1174278/24502391/25619f98-156b-11e7-994c-a8495b4735d5.png',
    infoLink: 'https://github.com/callstack/haul',
    pinned: true,
  },
];

module.exports = {
  title: 'react-slate',
  tagline: 'Render React apps to terminal',
  url: 'https://zamotany.github.io',
  baseUrl: '/',
  projectName: 'react-slate',
  organizationName: 'zamotany',
  headerLinks: [
    { doc: 'installation', label: 'Docs' },
  ],
  users,
  colors: {
    primaryColor: '#3c1b63',
    secondaryColor: '#24113a',
  },
  copyright: '',
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  repoUrl: 'https://github.com/zamotany/react-slate',
};
