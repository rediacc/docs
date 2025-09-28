import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './storage-calculator.module.css';

function StorageCalculator() {
  const [inputs, setInputs] = useState({
    databaseSize: 100,
    dailyChangePercent: 1.0,
    retentionDays: 30,
    numberOfCopies: 3,
    unit: 'GB'
  });

  const [results, setResults] = useState({
    traditionalStorage: 0,
    cowStorage: 0,
    savingsPercent: 0,
    savingsAmount: 0
  });

  const [scenarios] = useState([
    {
      name: "Enterprise Production",
      description: "Large stable database with minimal daily changes",
      databaseSize: 1000,
      dailyChangePercent: 0.1,
      retentionDays: 30,
      numberOfCopies: 5,
      unit: 'GB'
    },
    {
      name: "Development Environment",
      description: "Active development with frequent code and data changes",
      databaseSize: 50,
      dailyChangePercent: 5.0,
      retentionDays: 14,
      numberOfCopies: 10,
      unit: 'GB'
    },
    {
      name: "Analytics Warehouse",
      description: "Data warehouse with daily ETL processes",
      databaseSize: 5,
      dailyChangePercent: 2.0,
      retentionDays: 90,
      numberOfCopies: 3,
      unit: 'TB'
    },
    {
      name: "High-Frequency Trading",
      description: "Financial database with constant updates",
      databaseSize: 200,
      dailyChangePercent: 10.0,
      retentionDays: 7,
      numberOfCopies: 2,
      unit: 'GB'
    }
  ]);

  const calculateStorage = (params) => {
    const { databaseSize, dailyChangePercent, retentionDays, numberOfCopies } = params;

    // Convert to GB for calculations
    const sizeInGB = params.unit === 'TB' ? databaseSize * 1024 : databaseSize;
    const dailyChangeGB = sizeInGB * (dailyChangePercent / 100);

    // Traditional backup: Full copies for each backup + copies for environments
    const traditionalStorage = (sizeInGB * retentionDays) + (sizeInGB * numberOfCopies);

    // CoW storage: Base size + accumulated changes + reference copies
    const accumulatedChanges = dailyChangeGB * retentionDays;
    const cowStorage = sizeInGB + accumulatedChanges + (dailyChangeGB * numberOfCopies);

    const savingsAmount = traditionalStorage - cowStorage;
    const savingsPercent = (savingsAmount / traditionalStorage) * 100;

    return {
      traditionalStorage: Math.round(traditionalStorage * 100) / 100,
      cowStorage: Math.round(cowStorage * 100) / 100,
      savingsPercent: Math.round(savingsPercent * 100) / 100,
      savingsAmount: Math.round(savingsAmount * 100) / 100
    };
  };

  useEffect(() => {
    setResults(calculateStorage(inputs));
  }, [inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const loadScenario = (scenario) => {
    setInputs(scenario);
  };

  const formatStorage = (gb, unit = inputs.unit) => {
    if (unit === 'TB') {
      return `${(gb / 1024).toFixed(2)} TB`;
    }
    return `${gb.toFixed(2)} GB`;
  };

  return (
    <Layout
      title="Storage Cost Calculator - Smart deduplication vs Traditional Backup"
      description="Interactive calculator showing real storage savings with Smart deduplication file systems. Calculate actual costs based on your data change patterns and backup requirements.">

      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <h1>Storage Cost Calculator</h1>
            <p className="margin-bottom--lg">
              Calculate real storage savings with Smart deduplication file systems.
              Storage reduction depends entirely on your data change patterns—not a fixed percentage.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col col--6">
            <div className="card margin-bottom--md">
              <div className="card__header">
                <h2>Configuration</h2>
              </div>
              <div className="card__body">
                <div className="margin-bottom--md">
                  <label>Database Size:</label>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <input
                      type="number"
                      value={inputs.databaseSize}
                      onChange={(e) => handleInputChange('databaseSize', parseFloat(e.target.value) || 0)}
                      style={{ flex: 1, padding: '8px' }}
                    />
                    <select
                      value={inputs.unit}
                      onChange={(e) => handleInputChange('unit', e.target.value)}
                      style={{ padding: '8px' }}
                    >
                      <option value="GB">GB</option>
                      <option value="TB">TB</option>
                    </select>
                  </div>
                </div>

                <div className="margin-bottom--md">
                  <label>Daily Change Rate: {inputs.dailyChangePercent}%</label>
                  <input
                    type="range"
                    min="0.01"
                    max="20"
                    step="0.01"
                    value={inputs.dailyChangePercent}
                    onChange={(e) => handleInputChange('dailyChangePercent', parseFloat(e.target.value))}
                    style={{ width: '100%' }}
                  />
                  <small>How much of your data changes each day</small>
                </div>

                <div className="margin-bottom--md">
                  <label>Backup Retention (days):</label>
                  <input
                    type="number"
                    value={inputs.retentionDays}
                    onChange={(e) => handleInputChange('retentionDays', parseInt(e.target.value) || 0)}
                    style={{ width: '100%', padding: '8px' }}
                  />
                </div>

                <div className="margin-bottom--md">
                  <label>Environment Copies:</label>
                  <input
                    type="number"
                    value={inputs.numberOfCopies}
                    onChange={(e) => handleInputChange('numberOfCopies', parseInt(e.target.value) || 0)}
                    style={{ width: '100%', padding: '8px' }}
                  />
                  <small>Development, staging, testing environments</small>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__header">
                <h3>Common Scenarios</h3>
              </div>
              <div className="card__body">
                {scenarios.map((scenario, index) => (
                  <div key={index} className="margin-bottom--sm">
                    <button
                      className="button button--secondary button--sm"
                      onClick={() => loadScenario(scenario)}
                      style={{ width: '100%', textAlign: 'left' }}
                    >
                      <strong>{scenario.name}</strong><br />
                      <small>{scenario.description}</small>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col col--6">
            <div className="card margin-bottom--md">
              <div className="card__header">
                <h2>Storage Comparison</h2>
              </div>
              <div className="card__body">
                <div className="margin-bottom--lg">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span><strong>Traditional Backup:</strong></span>
                    <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
                      {formatStorage(results.traditionalStorage)}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span><strong>Copy-on-Write:</strong></span>
                    <span style={{ color: '#28a745', fontWeight: 'bold' }}>
                      {formatStorage(results.cowStorage)}
                    </span>
                  </div>
                  <hr />
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span><strong>Savings:</strong></span>
                    <span style={{ color: '#28a745', fontWeight: 'bold' }}>
                      {formatStorage(results.savingsAmount)} ({(results.traditionalStorage / results.cowStorage).toFixed(1)}X reduction)
                    </span>
                  </div>
                </div>

                <div className="alert alert--info">
                  <h4>Key Insight</h4>
                  <p>
                    Storage savings depend on your <strong>change ratio</strong>.
                    Lower change rates = higher savings. Claims of "100X reduction" only apply
                    to databases with extremely low change rates (&lt;0.01X daily).
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__header">
                <h3>How It Works</h3>
              </div>
              <div className="card__body">
                <h4>Traditional Backup:</h4>
                <ul>
                  <li>Full copy for each backup day</li>
                  <li>Full copy for each environment</li>
                  <li>Total = (Database × Days) + (Database × Environments)</li>
                </ul>

                <h4>Smart deduplication:</h4>
                <ul>
                  <li>One base copy + accumulated changes</li>
                  <li>Environment copies share base data</li>
                  <li>Total = Base + (Daily Changes × Days) + (Changes × Environments)</li>
                </ul>

                <div className="alert alert--warning margin-top--md">
                  <h4>Real-World Example</h4>
                  <p>
                    <strong>100GB database, 1X daily changes, 10 days:</strong><br />
                    Traditional: 100GB × 10 days = 1,000GB<br />
                    Smart deduplication: 100GB + (1GB × 10) = 110GB<br />
                    Savings: 9X reduction (not 100X)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row margin-top--lg">
          <div className="col col--12">
            <div className="card">
              <div className="card__header">
                <h2>The Mathematics Behind Smart deduplication Storage</h2>
              </div>
              <div className="card__body">
                <h3>Formula Breakdown</h3>

                <h4>Traditional Storage Formula:</h4>
                <code>
                  Total = (Database_Size × Retention_Days) + (Database_Size × Environment_Copies)
                </code>

                <h4>Smart deduplication Storage Formula:</h4>
                <code>
                  Total = Database_Size + (Daily_Changes × Retention_Days) + (Daily_Changes × Environment_Copies)
                </code>

                <h4>Reduction Factor:</h4>
                <code>
                  Reduction = Traditional_Storage / Smart_deduplication_Storage
                </code>

                <h3>Change Rate Impact Examples</h3>
                <div className="row margin-top--md">
                  <div className="col col--3">
                    <div className="text--center">
                      <h4 style={{ color: '#28a745' }}>0.01X Daily</h4>
                      <p><strong>100X</strong> reduction</p>
                      <small>Read-only archives</small>
                    </div>
                  </div>
                  <div className="col col--3">
                    <div className="text--center">
                      <h4 style={{ color: '#17a2b8' }}>0.1X Daily</h4>
                      <p><strong>30X</strong> reduction</p>
                      <small>Stable production</small>
                    </div>
                  </div>
                  <div className="col col--3">
                    <div className="text--center">
                      <h4 style={{ color: '#ffc107' }}>1X Daily</h4>
                      <p><strong>9X</strong> reduction</p>
                      <small>Active systems</small>
                    </div>
                  </div>
                  <div className="col col--3">
                    <div className="text--center">
                      <h4 style={{ color: '#dc3545' }}>10X Daily</h4>
                      <p><strong>2X</strong> reduction</p>
                      <small>High-change workloads</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default StorageCalculator;