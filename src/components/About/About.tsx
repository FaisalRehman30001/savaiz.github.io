import { portfolioData } from '../../data/portfolio'
import styles from './About.module.css'

function About() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <section id="about" className="section fade-in-section">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <div className={styles.aboutGrid}>
          <div className={styles.visual}>
            <div className={styles.visualPlaceholder}>
              <span className={styles.initials}>
                {portfolioData.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </span>
            </div>
          </div>
          <div className={styles.content}>
            <h3 className={styles.contentTitle}>
              I Help Businesses Scale Through Intelligent Automation
            </h3>
            <p className={styles.bio}>{portfolioData.aboutBio}</p>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Name:</span>
                <span className={styles.infoValue}>{portfolioData.name}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email:</span>
                <span className={styles.infoValue}>{portfolioData.contactInfo.email}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location:</span>
                <span className={styles.infoValue}>{portfolioData.contactInfo.location}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Phone:</span>
                <span className={styles.infoValue}>{portfolioData.contactInfo.phone}</span>
              </div>
            </div>
            <a href={`${basePath}cv.pdf`} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Open CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
