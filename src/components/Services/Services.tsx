import { portfolioData } from '../../data/portfolio'
import styles from './Services.module.css'

function Services() {
  return (
    <section id="services" className="section fade-in-section">
      <div className="container">
        <h2 className="section-title">
          My <span>Services</span>
        </h2>
        <div className={styles.grid}>
          {portfolioData.services.map((service) => (
            <div key={service.title} className={styles.card}>
              <span className={styles.icon}>{service.icon}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services
