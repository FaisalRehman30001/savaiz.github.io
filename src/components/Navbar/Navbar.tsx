import { useState } from 'react'
import { portfolioData } from '../../data/portfolio'
import styles from './Navbar.module.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => setIsOpen(false);

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
              <a href={link.href} onClick={handleLinkClick}>
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
