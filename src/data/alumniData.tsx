/**
 * This file keeps track of all alumni listed in the alumni page.
 *
 * It is used strictly for building the alumni network for WFLA Computerization Club
 * and has received consent for publishing these information on our website.
 *
 * However, we do appreciate if you ask for consent from these people
 * first, before re-using their personal information elsewhere.
 */

export type Member = {
  readonly name: string;
  readonly bio?: string; // ideally ≤ 120 characters
  // URL of profile image ("src" attribute in <img>);
  // if null/undefined, a default image will be shown
  readonly image?: string;
  // Below 4 are contact methods; Each should be a link ("href" attribute in <a>)
  readonly links: {
    readonly website?: string;
    readonly github?: string;
    readonly linkedin?: string;
    readonly email?: string;
  };
  // Below is the preferred contact method;
  // clicking the profile image leads to this type of link
  readonly favoredLink: 'website' | 'github' | 'linkedin' | 'email';
};

type alumniOfYear = {
  readonly classOf: number;
  readonly members: readonly Member[];
};

export type alumniData = alumniOfYear[];

const alumni: alumniData = [
  {
    classOf: 2020,
    members: [
      {
        name: 'Ye Shu',
        image: 'https://avatars3.githubusercontent.com/u/49149993',
        bio:
          "Williams College '24, Interested in information security, network, and Linux kernel",
        links: {
          website: 'https://blog.shuye.dev/',
          github: 'https://github.com/yechs',
          linkedin: 'https://www.linkedin.com/in/yechs/',
        },
        favoredLink: 'github',
      },
    ],
  },
  {
    classOf: 2019,
    members: [
      {
        name: 'Yuchen Zhong',
        image: '/img/alumni/Yuchen_Zhong.jpg',
        bio: "ex-OIer / UTSG Math+CS 23'",
        links: {
          website: 'https://davidzyc.github.io/',
          github: 'https://github.com/davidzyc',
        },
        favoredLink: 'github',
      },
      {
        name: 'Jimmy Gan',
        image: '/img/alumni/Jimmy_Gan.jpg',
        bio:
          'Rochester 2023 | Intended ECE & CS double major | Currently working on Hardware Security, Side-channel Attack',
        links: {
          email: 'mailto:jimmygan1012@gmail.com',
        },
        favoredLink: 'email',
      },
    ],
  },
  {
    classOf: 2018,
    members: [
      {
        name: 'Yudi Yang',
        image: '/img/alumni/Yudi_Yang.jpg',
        bio: "UR MATH+CS 22'",
        links: {
          github: 'https://github.com/2000jedi',
        },
        favoredLink: 'github',
      },
      {
        name: 'Rachel Gu',
        image: '/img/alumni/Rachel_Gu.png',
        bio:
          "UPenn Engineering '2022, Digital Media Design, Interest: Computer Graphics, Interactive Technologies, CG generalist",
        links: {
          email: 'mailto:gubeini@seas.upenn.edu',
        },
        favoredLink: 'email',
      },
      {
        name: 'Eric Zhang',
        image: '/img/alumni/Eric_Zhang.jpg',
        bio: 'NYU, Math & CS double major',
        links: {
          email: 'mailto:yz4801@nyu.edu',
        },
        favoredLink: 'email',
      },
    ],
  },
  {
    classOf: 2017,
    members: [
      {
        name: 'Sam Zhou',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        bio: "Facebook SWE Intern | Cornell Engineering '21",
        links: {
          website: 'https://developersam.com',
          github: 'https://github.com/SamChou19815',
          linkedin: 'https://www.linkedin.com/in/sam-zhou-30b91610b/',
        },
        favoredLink: 'website',
      },
      {
        name: '张秦子',
        image: '/img/alumni/Qinzi_Zhang.jpg',
        bio:
          'Boston College, Math (+CS Phys minor) | Interest: Applied Math, Analysis; Distributed System, Machine Learning',
        links: {
          email: 'mailto:zhangbcu@bc.edu',
        },
        favoredLink: 'email',
      },
      {
        name: 'Sam Hu',
        bio: 'Brandeis / CoSi & Math Major',
        links: {
          email: 'mailto:huruiyangsam@gmail.com',
        },
        favoredLink: 'email',
      },
      {
        name: 'Tim Zhu H.Maru',
        image: '/img/alumni/Tim_Zhu.jpg',
        bio:
          'Psychology / Philosophy | Interest: Positive Psychology; Self-help (and its discontents); Piano Performing and Arrangement',
        links: {
          email: 'mailto:hmaru8088@gmail.com',
        },
        favoredLink: 'email',
      },
    ],
  },
  {
    classOf: 2016,
    members: [
      {
        name: '杜佳梦',
        image: '/img/alumni/Jiameng_Du.jpg',
        bio: 'CMU ECE+CS Class of 2020',
        links: {
          linkedin: 'https://www.linkedin.com/in/jiameng-lily-du/',
        },
        favoredLink: 'linkedin',
      },
      {
        name: '昂国昊',
        image: '/img/alumni/Guohao_Ang.jpg',
        bio: 'UCB CS+Applied Math Class of 2020 / Googler',
        links: {
          linkedin: 'https://www.linkedin.com/in/guohao-ang-b35a32118/',
        },
        favoredLink: 'linkedin',
      },
      {
        name: '杨霁初',
        image: '/img/alumni/Jichu_Yang.jpg',
        bio: "Duke 2020'",
        links: {
          website: 'https://benjester.github.io/',
        },
        favoredLink: 'website',
      },
    ],
  },
];

export default alumni;
