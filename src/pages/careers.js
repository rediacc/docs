import { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Icon } from '../components/Icon';

export default function Careers() {
  const [positions, setPositions] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [expandedPosition, setExpandedPosition] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/positions.json')
      .then(res => res.json())
      .then(data => {
        setPositions(data.positions);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load positions:', err);
        setLoading(false);
      });
  }, []);

  const filteredPositions = positions.filter(position => {
    if (!position.active) return false;
    if (selectedDepartment !== 'all' && position.department !== selectedDepartment) return false;
    if (selectedLevel !== 'all' && position.level !== selectedLevel) return false;
    return true;
  });

  const departments = [...new Set(positions.map(p => p.department))];
  const levels = [...new Set(positions.map(p => p.level))];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return '#ff4757';
      case 'medium': return '#ffa502';
      case 'low': return '#2ed573';
      default: return '#747d8c';
    }
  };

  const benefits = {
    compensation: {
      icon: 'dollar-sign',
      title: 'Profit Sharing Model',
      items: [
        'Direct profit participation',
        'Performance-based rewards',
        'Quarterly settlements',
        'Transparent distribution system'
      ]
    },
    ownership: {
      icon: 'award',
      title: 'Entrepreneurship Path',
      items: [
        'Equity opportunity for early experts',
        'Long-term value creation',
        'Shared success model',
        'Business collaboration framework'
      ]
    },
    growth: {
      icon: 'trending-up',
      title: 'Professional Development',
      items: [
        'Expert coefficient system',
        'Performance evaluations',
        'Cross-functional contributions',
        'Knowledge sharing sessions'
      ]
    },
    flexibility: {
      icon: 'globe',
      title: 'Ultimate Flexibility',
      items: [
        'Results-oriented work',
        'Choose your own hours',
        'Work from anywhere',
        'Asynchronous collaboration'
      ]
    },
    culture: {
      icon: 'users',
      title: 'Expert Community',
      items: [
        'Autonomous work environment',
        'Transparent decision making',
        'Minimal meetings principle',
        'Innovation encouragement'
      ]
    },
    technology: {
      icon: 'cpu',
      title: 'Technical Excellence',
      items: [
        'Modern tech stack',
        'Open contribution model',
        'Best practices focus',
        'Continuous innovation'
      ]
    }
  };

  const techStack = {
    frontend: ['React', 'TypeScript', 'Redux Toolkit', 'Vite', 'Ant Design'],
    backend: ['.NET 9', 'C#', 'SQL Server', 'Docker', 'ASP.NET Core'],
    systems: ['C++17', 'libssh', 'CMake', 'Ceph', 'Linux'],
    infrastructure: ['Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'GitOps'],
    tools: ['Python', 'Bash', 'PowerShell', 'Git', 'CI/CD']
  };

  const hiringProcess = [
    { step: 'Apply', time: '5 min', description: 'Submit your expertise' },
    { step: 'Evaluation', time: '30-45 min', description: 'Technical discussion' },
    { step: 'Assessment', time: '2-3 hrs', description: 'Skills demonstration' },
    { step: 'Collaboration Review', time: '1-2 hrs', description: 'Agreement discussion' },
    { step: 'Contract', time: '1-2 days', description: 'Join as Expert' }
  ];

  return (
    <Layout
      title="Careers - Join the Rediacc Team"
      description="Join our mission to revolutionize infrastructure management. We're looking for talented individuals who want to make a difference.">
      
      <article>
        {/* Hero Section */}
        <section className="hero-section" style={{
          padding: '4rem 1rem',
          background: 'linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)',
          color: 'white'
        }}>
          <div className="container">
            <h1 className="hero-title animate-fade-in-up" style={{color: 'white'}}>
              Join Our Expert Collaboration Network
            </h1>
            <p className="hero-subtitle animate-fade-in-up animate-delay-100" style={{
              fontSize: '1.3rem',
              opacity: 0.95,
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Partner with us as an Expert in building next-generation infrastructure management solutions through our unique profit-sharing model
            </p>
            <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a className="button button--secondary button--lg" href="#open-positions" style={{color: 'var(--ifm-color-primary)'}}>
                View Expert Opportunities
              </a>
              <a className="button button--outline button--lg" href="#culture" style={{color: 'white', borderColor: 'white'}}>
                Discover Our Model
              </a>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section style={{padding: '3rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center'}}>
              Our Technology Stack
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto'}}>
              {Object.entries(techStack).map(([category, techs]) => (
                <div key={category} style={{
                  padding: '1.5rem',
                  background: 'var(--ifm-background-surface-color)',
                  borderRadius: '8px',
                  border: '1px solid var(--ifm-toc-border-color)'
                }}>
                  <h3 style={{fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'capitalize'}}>
                    {category}
                  </h3>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                    {techs.map(tech => (
                      <span key={tech} style={{
                        padding: '0.25rem 0.75rem',
                        background: 'var(--ifm-color-primary-lightest)',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        color: 'var(--ifm-color-primary-dark)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="culture" style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>
              Why Collaborate with Rediacc?
            </h2>
            <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-font-color-secondary)'}}>
              We're not like other companies - we share success through a transparent profit-sharing model
            </p>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <Link 
                className="button button--primary" 
                to="/blog/expert-collaboration-model">
                Learn About Our Model
              </Link>
            </div>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
              {Object.entries(benefits).map(([key, benefit]) => (
                <div key={key} className="feature-card" style={{
                  padding: '2rem',
                  background: 'var(--ifm-background-color)',
                  borderRadius: '12px',
                  border: '1px solid var(--ifm-toc-border-color)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <h3 style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                    <Icon name={benefit.icon} size={24} style={{marginRight: '10px', color: 'var(--ifm-color-primary)'}} />
                    {benefit.title}
                  </h3>
                  <ul style={{margin: 0, paddingLeft: '1.5rem'}}>
                    {benefit.items.map((item, idx) => (
                      <li key={idx} style={{marginBottom: '0.5rem', color: 'var(--ifm-font-color-secondary)'}}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section style={{padding: '3rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center'}}>
              Expert Onboarding Process
            </h2>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '900px', margin: '0 auto', flexWrap: 'wrap'}}>
              {hiringProcess.map((stage, idx) => (
                <div key={idx} style={{
                  flex: '1',
                  textAlign: 'center',
                  padding: '1rem',
                  minWidth: '150px',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--ifm-color-primary)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>
                    {idx + 1}
                  </div>
                  <h4 style={{marginBottom: '0.5rem'}}>{stage.step}</h4>
                  <p style={{fontSize: '0.9rem', color: 'var(--ifm-font-color-secondary)', marginBottom: '0.25rem'}}>
                    {stage.time}
                  </p>
                  <p style={{fontSize: '0.85rem', color: 'var(--ifm-font-color-secondary)'}}>
                    {stage.description}
                  </p>
                  {idx < hiringProcess.length - 1 && (
                    <div className="hiring-connector" style={{
                      position: 'absolute',
                      top: '30px',
                      left: '60%',
                      width: '100%',
                      height: '2px',
                      background: 'var(--ifm-color-primary)',
                      opacity: 0.3
                    }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" style={{padding: '4rem 1rem', background: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Expert Opportunities
            </h2>
            
            {/* Filters */}
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap'}}>
              <select 
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  border: '1px solid var(--ifm-toc-border-color)',
                  background: 'var(--ifm-background-color)',
                  cursor: 'pointer'
                }}>
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  border: '1px solid var(--ifm-toc-border-color)',
                  background: 'var(--ifm-background-color)',
                  cursor: 'pointer'
                }}>
                <option value="all">All Levels</option>
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            
            {/* Position Cards */}
            <div style={{maxWidth: '900px', margin: '0 auto'}}>
              {loading ? (
                <p style={{textAlign: 'center'}}>Loading positions...</p>
              ) : filteredPositions.length === 0 ? (
                <p style={{textAlign: 'center', fontSize: '1.2rem', color: 'var(--ifm-font-color-secondary)'}}>
                  No positions match your criteria. Please check back later or adjust your filters.
                </p>
              ) : (
                filteredPositions.map(position => (
                  <div key={position.id} style={{
                    marginBottom: '2rem',
                    padding: '2rem',
                    background: 'var(--ifm-background-color)',
                    borderRadius: '12px',
                    border: '2px solid var(--ifm-toc-border-color)',
                    transition: 'border-color 0.3s',
                    cursor: 'pointer'
                  }}
                  onClick={() => setExpandedPosition(expandedPosition === position.id ? null : position.id)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--ifm-color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--ifm-toc-border-color)';
                  }}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem'}}>
                      <div>
                        <h3 style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center'}}>
                          {position.title}
                          {position.priority === 'high' && (
                            <span style={{
                              marginLeft: '10px',
                              padding: '2px 8px',
                              background: getPriorityColor(position.priority),
                              color: 'white',
                              borderRadius: '4px',
                              fontSize: '0.75rem',
                              fontWeight: 'normal'
                            }}>
                              High Priority
                            </span>
                          )}
                        </h3>
                        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                          <span style={{color: 'var(--ifm-font-color-secondary)', fontSize: '0.95rem'}}>
                            <Icon name="briefcase" size={14} style={{marginRight: '4px'}} />
                            {position.department}
                          </span>
                          <span style={{color: 'var(--ifm-font-color-secondary)', fontSize: '0.95rem'}}>
                            <Icon name="map-pin" size={14} style={{marginRight: '4px'}} />
                            {position.location}
                          </span>
                          <span style={{color: 'var(--ifm-font-color-secondary)', fontSize: '0.95rem'}}>
                            <Icon name="clock" size={14} style={{marginRight: '4px'}} />
                            {position.type}
                          </span>
                          <span style={{color: 'var(--ifm-font-color-secondary)', fontSize: '0.95rem'}}>
                            <Icon name="award" size={14} style={{marginRight: '4px'}} />
                            {position.level}
                          </span>
                        </div>
                      </div>
                      <Icon 
                        name={expandedPosition === position.id ? "chevron-up" : "chevron-down"} 
                        size={20} 
                        style={{color: 'var(--ifm-font-color-secondary)'}} 
                      />
                    </div>
                    
                    <p style={{marginBottom: '1rem'}}>{position.summary}</p>
                    
                    {/* Technology Tags */}
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem'}}>
                      {position.technologies.slice(0, 5).map(tech => (
                        <span key={tech} style={{
                          padding: '0.25rem 0.75rem',
                          background: 'var(--ifm-color-primary-lightest)',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          color: 'var(--ifm-color-primary-dark)'
                        }}>
                          {tech}
                        </span>
                      ))}
                      {position.technologies.length > 5 && (
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          background: 'var(--ifm-background-surface-color)',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          color: 'var(--ifm-font-color-secondary)'
                        }}>
                          +{position.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                    
                    {/* Expanded Content */}
                    {expandedPosition === position.id && (
                      <div style={{marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--ifm-toc-border-color)'}}>
                        <h4 style={{marginBottom: '1rem'}}>Responsibilities</h4>
                        <ul style={{marginBottom: '2rem'}}>
                          {position.responsibilities.map((resp, idx) => (
                            <li key={idx} style={{marginBottom: '0.5rem'}}>{resp}</li>
                          ))}
                        </ul>
                        
                        <h4 style={{marginBottom: '1rem'}}>Requirements</h4>
                        <h5 style={{fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--ifm-font-color-secondary)'}}>
                          Technical Skills
                        </h5>
                        <ul style={{marginBottom: '1.5rem'}}>
                          {position.requirements.technical.map((req, idx) => (
                            <li key={idx} style={{marginBottom: '0.5rem'}}>{req}</li>
                          ))}
                        </ul>
                        
                        {position.requirements.preferred && (
                          <>
                            <h5 style={{fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--ifm-font-color-secondary)'}}>
                              Nice to Have
                            </h5>
                            <ul style={{marginBottom: '2rem'}}>
                              {position.requirements.preferred.map((req, idx) => (
                                <li key={idx} style={{marginBottom: '0.5rem'}}>{req}</li>
                              ))}
                            </ul>
                          </>
                        )}
                        
                        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                          <Link className="button button--primary button--lg" to="/contact">
                            Express Interest
                          </Link>
                          <Link className="button button--outline button--lg" to={`/contact?position=${position.id}`}>
                            Learn More
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section style={{padding: '4rem 1rem', background: 'var(--ifm-background-color)'}}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              Our Values
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto'}}>
              {[
                { icon: 'target', title: 'Results-Oriented', description: 'Focus on delivered outcomes, not hours worked' },
                { icon: 'users', title: 'Transparent Collaboration', description: 'Open information flow and distributed decision making' },
                { icon: 'shield', title: 'Trust & Autonomy', description: 'Self-management with clear expectations' },
                { icon: 'trending-up', title: 'Shared Success', description: 'Direct participation in company profits' },
                { icon: 'clock', title: 'Asynchronous First', description: 'Minimal meetings, maximum productivity' },
                { icon: 'award', title: 'Expert Recognition', description: 'Performance-based rewards and advancement' }
              ].map((value, idx) => (
                <div key={idx} style={{textAlign: 'center'}}>
                  <Icon name={value.icon} size={48} style={{color: 'var(--ifm-color-primary)', marginBottom: '1rem'}} />
                  <h3 style={{marginBottom: '0.5rem'}}>{value.title}</h3>
                  <p style={{color: 'var(--ifm-font-color-secondary)'}}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '4rem 1rem',
          background: 'linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)',
          textAlign: 'center',
          color: 'white'
        }}>
          <div className="container">
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white'}}>
              Ready to Become an Expert?
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2rem'}}>
              Join our selective expert network. We're looking for exceptional professionals who value autonomy and shared success.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link
                className="button button--secondary button--lg"
                to="/contact"
                style={{color: 'var(--ifm-color-primary)'}}>
                Join as Expert
              </Link>
              <Link
                className="button button--outline button--lg"
                to="mailto:careers@rediacc.com"
                style={{color: 'white', borderColor: 'white'}}>
                Email Us
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}