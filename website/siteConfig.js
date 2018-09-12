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
  tagline: 'Write React apps for terminal',
  url: 'https://zamotany.github.io',
  baseUrl: '/',
  projectName: 'react-slate',
  headerIcon: 'img/react_slate_icon.png',
  organizationName: 'zamotany',
  headerLinks: [
    { doc: 'installation', label: 'Docs' },
  ],
  users,
  colors: {
    primaryColor: '#457D9A',
    secondaryColor: '#5699bc',
  },
  copyright: '',
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  repoUrl: 'https://github.com/zamotany/react-slate',
};
