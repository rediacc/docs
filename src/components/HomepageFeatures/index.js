import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🛡️ AI Safety & Protection',
    Svg: require('@site/static/img/advanced-security.svg').default,
    description: (
      <>
        AI agents get safe sandbox environments to test changes without production risk.
        Native MCP integration enables Claude Code, Gemini, and all major AI systems to safely interact with infrastructure.
      </>
    ),
  },
  {
    title: '⚡ Next-Generation Disaster Recovery',
    Svg: require('@site/static/img/time-travel.svg').default,
    description: (
      <>
        Traditional DR involves costly duplicate infrastructure and complex manual processes.
        Continuous lightweight snapshots enable rapid restoration with minimal infrastructure overhead.
      </>
    ),
  },
  {
    title: '⚡ Accelerated Development Operations',
    Svg: require('@site/static/img/backup-optimization.svg').default,
    description: (
      <>
        Instant environment provisioning for testing, staging, and development.
        Smart deduplication storage architecture reduces environment setup from days to minutes with 70-99.99% (depending on update ratio of the total data between snapshots) storage reduction.
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
