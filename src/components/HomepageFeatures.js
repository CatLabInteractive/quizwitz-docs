import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Create',
    img: require('../../static/img/create.png').default,
    description: (
      <>
          Create a fully customizable quiz using different question and round types.
      </>
    ),
  },
  {
    title: 'Play',
      img: require('../../static/img/play.png').default,
    description: (
      <>
          Play any shared quiz on our platform with friends, family, colleagues, …
          Grab a smart device, connect via the web and show off how much you know!
      </>
    ),
  },
  {
    title: 'Share',
      img: require('../../static/img/share.png').default,
    description: (
      <>
          Collect and share quiz rounds from around the world, or share your own! Connect with other quiz aficionados.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
