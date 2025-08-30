import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🛡️ AI Safety & Protection',
    Svg: require('@site/static/img/advanced-security.svg').default,
    description: (
      <>
        Prevent AI disasters with rapid production cloning. AI works on copies, 
        keeping production data safe. Fast recovery from AI mistakes.
      </>
    ),
  },
  {
    title: '⚡ Rapid Disaster Recovery',
    Svg: require('@site/static/img/time-travel.svg').default,
    description: (
      <>
        Recover from ransomware, outages, or human errors quickly. 
        Immutable backups with geographic redundancy and automatic failover.
      </>
    ),
  },
  {
    title: '💰 Zero-Cost Infrastructure',
    Svg: require('@site/static/img/backup-optimization.svg').default,
    description: (
      <>
        Cut storage costs by up to 90% with smart deduplication. Clone large databases quickly 
        using minimal storage. Potentially up to 70% more cost-effective compared to traditional enterprise backup solutions.
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
