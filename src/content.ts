export const COPY = {
  human: {
    tagline: `I build useful things, and I make sure they don't look too bad.`,
    projectsLabel: "things I've made",
    projects: [
      {
        num: '.01',
        name: 'Linde Toolbox',
        desc: 'a toolbox for designers who like things that work',
        url: 'https://lindetoolbox.com',
      },
      {
        num: '.02',
        name: 'Veriguard',
        desc: 'a no-nonsense scam detector, global',
        url: 'https://veriguard.app',
      },
      {
        num: '.03',
        name: 'Tooeasyvino',
        desc: "Your guide to SA's best drops",
        url: 'https://tooeasyvino.com',
      },
      {
        num: '.04',
        name: 'XDtox',
        desc: 'a one-click cleanup for XD imports in Figma',
        url: 'https://www.figma.com/community/plugin/1648196064868022957/xdtox',
      },
    ],
    contact: { email: 'email', linkedin: 'linkedin', github: 'github' },
    footerNote: '© Aleks Linde',
  },
  robot: {
    tagline: `Builds functional tools with attention to usability and visual design. Priorities: works first, looks good second.`,
    projectsLabel: 'PROJECT_INDEX',
    projects: [
      {
        num: 'P01',
        name: 'lindetoolbox.com',
        desc: '// type:tooling  status:DEPLOYED  input:designers',
        url: 'https://lindetoolbox.com',
      },
      {
        num: 'P02',
        name: 'veriguard.app',
        desc: '// type:tool  status:DEPLOYED  scope:GLOBAL',
        url: 'https://veriguard.app',
      },
      {
        num: 'P03',
        name: 'tooeasyvino.com',
        desc: '// type:directory  status:DEPLOYED  target:AU',
        url: 'https://tooeasyvino.com',
      },
      {
        num: 'P04',
        name: 'XDtox',
        desc: '// type:plugin  status:DEPLOYED  platform:figma',
        url: 'https://www.figma.com/community/plugin/1648196064868022957/xdtox',
      },
    ],
    contact: { email: 'EMAIL_ENDPOINT', linkedin: 'NETWORK_GRAPH', github: 'CODE_REPO' },
    footerNote: 'LAST_UPDATED: 2026 · ENTITY: ALEKS_LINDE',
  },
};

export type Mode = 'human' | 'robot';
export type ModeCopy = typeof COPY.human;
