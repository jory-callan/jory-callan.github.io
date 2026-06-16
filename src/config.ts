import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://jory-callan.github.io',
  base: '/',
  title: 'Jory Callan',
  description:
    'Backend & SRE Engineer — Go · Kubernetes · Cloud Native',
  author: 'Jory Callan',
  lang: 'en',
  ogLocale: 'en_US',
  imageDomains: [],
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/projects',
      title: 'Projects',
      displayMode: 'alwaysText',
      text: 'Projects',
    },
  ],
  socialLinks: [
    {
      link: 'https://github.com/jory-callan',
      title: 'GitHub',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-github-alt',
    },
  ],
  navBarLayout: {
    left: [],
    right: [
      'internalNavs',
      'hr',
      'socialLinks',
      'hr',
      'searchButton',
      'themeButton',

    ],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: [],
  postView: {
    postMetaStyle: 'minimal',
    useCoverAltAsCaption: true,
  },
  groupView: {
    maxGroupColumns: 3,
    showGroupItemColorOnHover: true,
  },
  githubView: {
    monorepos: [],
    mainLogoOverrides: [],
    subLogoMatches: [],
  },
  externalLink: {
    newTab: false,
    cursorType: '',
    showNewTabIcon: false,
  },
}

/**
 * Globally controls whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  slideEnterAnim: [true, { enterStep: 60 }],
  ogImage: [false],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'right',
      displayMode: 'content',
    },
  ],
  share: [false, {
    twitter: false,
    bluesky: false,
    mastodon: false,
    facebook: false,
    pinterest: false,
    reddit: false,
    telegram: false,
    whatsapp: false,
    email: false,
  }],
  giscus: [false],
  search: [false],
  tag: [
    true,
    {
      displayPosition: 'right',
      displayMode: 'content',
      filterMode: 'AND',
    },
  ],
}
