import React from 'react';
import Layout from '@theme/Layout';
import TeamSection from '../components/sections/TeamSection';
import styles from './about.module.css';

export default function About() {
  return (
    <Layout
      title="About Us"
      description="Learn about Rediacc's journey from personal adversity to innovation">
      <main className={styles.aboutPage}>
        <section className={styles.heroSection}>
          <div className="container">
            <h1 className={styles.heroTitle}>About Rediacc</h1>
            <p className={styles.heroSubtitle}>
              Our mission is to help businesses operate with flexibility and resilience through innovative database solutions.
            </p>
          </div>
        </section>

        <section className={styles.storySection}>
          <div className="container">
            <div className={styles.storyCard}>
              <h2 className={styles.sectionTitle}>The Beginning</h2>
              <div className={styles.divider}></div>
              
              <p className={styles.paragraph}>
                The calendar showed September 2018. I had resigned (was an extremely difficult resignation) from the 
                institution where I worked as a software engineer, wanting to code my own dreams. I could only sleep 
                for maybe 4-5 hours due to excitement; I was working day and night. This pace continued like this for 
                about 5-6 months. One day, two police officers showed up at my door. They told me that an investigation 
                had been opened against me and that I was being called to give a statement.
              </p>

              <p className={styles.paragraph}>
                It was a very long day. I spoke with police officers, a commissioner, a doctor, and finally, the prosecutor. 
                All without any lawyer support. In short, they took my statement and then seized my high-tech computers 
                and many disk drives from my home 'for a short time' to clone the data.
              </p>

              <p className={styles.paragraph}>
                Until that time I had covered all my expenses, including my rent payments, car loan payment, and all 
                the expenses of my startup entirely with other high-interest loans. I had no backup of my work, and 
                even if I had, what could I have done? I had used completely on-premises hardware, and I no longer had 
                the financial means to purchase new equipment. To pay off my debts and continue living with my wife 
                and son, I had to return to a salaried job.
              </p>

              <p className={styles.paragraph}>
                It took me "20 months" to get my devices back, and 3-4 years later, a non-prosecution decision was 
                made, proving my innocence. During this time, I had drifted far from my dreams and started living in 
                another world. The lawyers of the banks I owed money to were calling me every week. After the police, 
                lawyers and bailiffs from three different banks started visiting our home.
              </p>
            </div>

            <div className={styles.storyCard}>
              <h2 className={styles.sectionTitle}>The Turning Point</h2>
              <div className={styles.divider}></div>

              <p className={styles.paragraph}>
                Years later, I kept thinking about what I could do to prevent such a problem from happening again in 
                the future. I needed a tool that would allow me to move my systems to another environment whenever I 
                wanted, activate them whenever needed, back them up easily, and store them securely no matter where 
                I moved them. Virtual machines weren't the answer, as I required native performance without the overhead 
                of virtualization.
              </p>

              <p className={styles.paragraph}>
                In 2021, I watched NetworkChuck's video, "you need to learn Docker RIGHT NOW!! // Docker Containers 101". 
                Then I was shocked. I wanted to go out to the balcony and scream as loud as I could. I wished I had 
                known about this technology earlier!
              </p>

              <p className={styles.paragraph}>
                Still, this technology didn't solve all my problems. Moving container files from one system to another 
                was difficult. I faced compatibility issues with file ownership, and most importantly, as the data size 
                grew, transferring it took longer. Moreover, I had to keep services offline until system migration 
                finished and the technology almost has nothing about security.
              </p>

              <div className={styles.quote}>
                <p>"When they took my machines, I lost my work. But I found my purpose."</p>
              </div>
            </div>

            <div className={styles.storyCard}>
              <h2 className={styles.sectionTitle}>Birth of Rediacc</h2>
              <div className={styles.divider}></div>

              <p className={styles.paragraph}>
                It all started with the development of a portable file system logic. From there, I integrated a backup 
                module. Then came one of the most critical challenges: enabling live system transfers with minimal 
                downtime, regardless of data size. Then I added unique features based on my needs.
              </p>

              <p className={styles.paragraph}>
                This is how Rediacc was born—a product forged through the toughest moments of my life. Now, it's 
                available to everyone. Use it and don't let anything hold your business back—be ready to accelerate.
              </p>

              <div className={styles.principles}>
                <div className={styles.principle}>
                  <span className={styles.principleIcon}>🚀</span>
                  <h3>Innovation</h3>
                  <p>Pushing boundaries in data protection technology</p>
                </div>
                <div className={styles.principle}>
                  <span className={styles.principleIcon}>💡</span>
                  <h3>Simplicity</h3>
                  <p>Making complex solutions accessible</p>
                </div>
              </div>
            </div>

            <div className={styles.meaningSection}>
              <h2 className={styles.sectionTitle}>The Meaning of Rediacc</h2>
              <div className={styles.divider}></div>

              <p className={styles.paragraph}>
                The name "Rediacc" has a rich dual meaning that reflects both our technological roots and our 
                forward-thinking vision.
              </p>

              <h3 className={styles.subsectionTitle}>Technical Origin</h3>
              <p className={styles.paragraph}>
                Initially, Rediacc was conceptualized as a GPU-accelerated version of Redis, the popular key-value 
                store. While Redis stands for "Remote Dictionary Server," Rediacc was conceived as "Remote Dictionary 
                Accelerated"—representing an evolution toward greater speed and performance.
              </p>

              <h3 className={styles.subsectionTitle}>Philosophical Significance</h3>
              <p className={styles.paragraph}>
                Over time, Rediacc took on an additional meaning: "Ready to Accelerate." This interpretation perfectly 
                captures the essence of our current solution. Rediacc embodies a harmonious blend of preparation and 
                velocity—symbolizing readiness for rapid change and progress.
              </p>

              <p className={styles.summaryText}>
                Our name reflects our mission to help businesses and developers operate with flexibility and resilience, 
                ready to accelerate whenever opportunities or challenges arise.
              </p>
            </div>
          </div>
        </section>

        <TeamSection />
      </main>
    </Layout>
  );
}