import { useState, useEffect } from 'react'
import { portfolioData } from '../../data/portfolio'
import styles from './Navbar.module.css'

const sectionIds = portfolioData.navLinks.map((link) => link.href.replace('#', ''));

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => setIsOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#home" className={styles.logo}>
          {portfolioData.name.split(' ')[0]}
          <span>.</span>
        </a>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          type="button"
        >
          <span className={`${styles.bar} ${isOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${isOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${isOpen ? styles.open : ''}`} />
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          {portfolioData.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className={activeSection === link.href ? styles.activeLink : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={`btn-primary ${styles.hireMeBtn}`}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar
