import { portfolioData } from '../../data/portfolio'
import styles from './Footer.module.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <a href="#home" className={styles.logo}>
              {portfolioData.name.split(' ')[0]}
              <span>.</span>
            </a>
            <p className={styles.tagline}>{portfolioData.title}</p>
          </div>

          <nav className={styles.footerNav}>
            {portfolioData.navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.footerSocial}>
            {portfolioData.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={link.platform}
              >
                {link.icon === 'linkedin' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {link.icon === 'email' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerContact}>
          <span>{portfolioData.contactInfo.email}</span>
          <span className={styles.separator}>|</span>
          <span>{portfolioData.contactInfo.phone}</span>
        </div>

        <div className={styles.footerBottom}>
          <p>
            &copy; {currentYear} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
