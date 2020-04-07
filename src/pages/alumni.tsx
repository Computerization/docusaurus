/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import AlumniTimeline from "../components/AlumniTimeline";
import styles from "./alumni.module.css"

const alumni = [
  {
    classOf: 2020,
    members: [
      {
        name: 'Ye Shu',
        image: 'https://avatars3.githubusercontent.com/u/49149993',
        website: null,
        github: 'https://github.com/yechs',
        linkedin: 'https://www.linkedin.com/in/yechs/',
        bio: 'Current 12th grade student.',
        favoredLink: 'github'
      },
    ]
  },
  {
    classOf: 2017,
    members: [
      {
        name: 'Sam Zhou',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        website: 'https://developersam.com',
        github: null,
        linkedin: null,
        bio: null,
        favoredLink: 'website'
      },
    ]
  },
  {
    classOf: 2016,
    members: [
      {
        name: '杜佳梦',
        image: "/img/alumni/Jiameng_Du.png",
        // Planning to implement a useBaseUrl hook on the URL at the component level
        website: null,
        github: null,
        linkedin: 'https://www.linkedin.com/in/jiameng-lily-du/',
        bio: null,
        favoredLink: 'linkedin'
      },
    ]
  }
];

export default () => {
  return (
    <Layout
      title="Our Alumni"
      description="The alumni directory of Computerization club"
    >
      <main>
        <div className="container margin-vert--lg">
          <div className={styles.content}>
            <h1>Our Alumni</h1>
            <p className="text--large">
              If you are an alumnus or an alumna of the Computerization club and would like us to update your listing or link to your homepage, please open an issue or pull request at the <a href="https://github.com/Computerization/docusaurus/issues">Computerization/docusaurus</a> repository, or drop us a WeChat message.
            </p>
          </div>
          <AlumniTimeline alumni={alumni} />
        </div>
      </main>
    </Layout>
  );
}