import { useEffect, useRef, useState } from 'react'
import { portfolioData } from '../../data/portfolio'
import type { Skill } from '../../data/portfolio'
import styles from './Skills.module.css'

interface SkillCircleProps {
  skill: Skill;
  isVisible: boolean;
}

function SkillCircle({ skill, isVisible }: SkillCircleProps) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.percentage / 100) * circumference;

  return (
    <div className={styles.skillItem}>
      <div className={styles.circleWrap}>
        <svg className={styles.circleSvg} viewBox="0 0 120 120">
          <circle
            className={styles.circleBg}
            cx="60"
            cy="60"
            r={radius}
            strokeWidth="8"
            fill="none"
          />
          <circle
            className={`${styles.circleProgress} ${isVisible ? styles.animate : ''}`}
            cx="60"
            cy="60"
            r={radius}
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? offset : circumference}
            strokeLinecap="round"
          />
        </svg>
        <span className={styles.percentage}>{skill.percentage}%</span>
      </div>
      <p className={styles.skillName}>{skill.name}</p>
    </div>
  );
}

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="skills" className="section fade-in-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <div className={styles.skillsGrid}>
          {portfolioData.skills.map((skill) => (
            <SkillCircle key={skill.name} skill={skill} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills
