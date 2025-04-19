import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '💾 Intelligent Backup Solutions',
    Svg: require('@site/static/img/backup-optimization.svg').default,
    description: (
      <>
        Save up to 90% on storage costs with our smart differential backup technology.
        Restore your system to any point in time with automated snapshots.
      </>
    ),
  },
  {
    title: '🛡️ Advanced Security',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Keep your systems secure with real-time defense against threats, 
        repository encryption, and multi-factor authentication across all tiers.
      </>
    ),
  },
  {
    title: '📈 Seamless Scaling',
    Svg: require('@site/static/img/hybrid-cloud-scaling.svg').default,
    description: (
      <>
        Instantly clone your environment to the cloud during peak hours and 
        synchronize changes back to on-premise systems when demand decreases.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
