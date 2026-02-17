import { useState, useMemo } from 'react'
import { portfolioData } from '../../data/portfolio'
import styles from './Portfolio.module.css'

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(portfolioData.projects.map((p) => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return portfolioData.projects;
    return portfolioData.projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="section fade-in-section">
      <div className="container">
        <h2 className="section-title">
          My <span>Portfolio</span>
        </h2>

        <div className={styles.filterTabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.projectGrid}>
          {filteredProjects.map((project) => (
            <div key={project.title} className={styles.projectCard}>
              {project.image.startsWith('linear-gradient')
                ? <div
                    className={styles.projectImage}
                    style={{ background: project.image }}
                    role="img"
                    aria-label={project.title}
                  />
                : <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
              }
              <div className={styles.projectInfo}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio
