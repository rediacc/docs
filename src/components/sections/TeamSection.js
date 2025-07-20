import React from 'react';
import styles from './TeamSection.module.css';

const teamMembers = [
  {
    name: 'Muhammed Fatih BAYRAKTAR',
    title: 'CEO & Co-Founder',
    summary: 'Visionary leader with a passion for building great products and even greater teams.',
    image: '/img/profiles/mfb.jpeg',
    linkedin: 'https://www.linkedin.com/in/muhammed-fatih-bayraktar/',
  },
  {
    name: 'Hamza ÖZSARAC',
    title: 'Full Stack Developer',
    summary: 'Expert in scalable systems and cutting-edge technology, driving our technical vision.',
    image: '/img/profiles/hmz.jpeg',
    linkedin: 'https://www.linkedin.com/in/hamza-ozsarac/',
  },
  {
    name: 'Hasan Anıl KARTAL',
    title: 'Software Test & Quality Expert',
    summary: 'Creative mind behind our user-centric design, making complexity feel simple.',
    image: '/img/profiles/hak.jpeg',
    linkedin: 'https://www.linkedin.com/in/hasananilkartal/',
  },
  {
    name: 'Yüksel Demirel',
    title: 'System And DevOps Engineer',
    summary: 'Dedicated to crafting robust and efficient code that powers our platform.',
    image: '/img/profiles/yd.jpeg',
    linkedin: 'https://www.linkedin.com/in/yüksel-demirel-92065749/',
  },
];

const TeamSection = () => {
  return (
    <section id="team" className={styles.teamSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Meet Our Team</h2>
          <p className={styles.sectionSubtitle}>
            We're a team of passionate technologists dedicated to creating innovative solutions for modern data challenges.
          </p>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.memberImage}
                />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberTitle}>{member.title}</p>
              <p className={styles.memberSummary}>{member.summary}</p>
              <div className={styles.socialLinks}>
                <a 
                  href={member.linkedin} 
                  aria-label={`${member.name} LinkedIn`} 
                  className={styles.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={styles.linkedinIcon} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;