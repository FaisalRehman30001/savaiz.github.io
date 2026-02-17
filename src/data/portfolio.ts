// ─── Single Source of Truth — All data from Muhammad Savaiz Khan CV ───

import aiVoiceAgentImg from '../assets/projectsImage/AI-PoweredVoiceAgentSystem.jpg'
import airtableDbImg from '../assets/projectsImage/AirtableEnterpriseDatabaseArchitecture.png'
import lmsImg from '../assets/projectsImage/LearningManagementSystemforMadaris.jpg'
import notionKmsImg from '../assets/projectsImage/NotionKnowledgeManagementSystem.png'

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface SocialLink {
  readonly platform: string;
  readonly url: string;
  readonly icon: string;
}

export interface Stat {
  readonly value: string;
  readonly label: string;
}

export interface Service {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface Skill {
  readonly name: string;
  readonly percentage: number;
}

export interface Project {
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly image: string;
}

export interface ContactInfo {
  readonly email: string;
  readonly phone: string;
  readonly location: string;
}

export interface PortfolioData {
  readonly name: string;
  readonly title: string;
  readonly heroHeadline: string;
  readonly heroSubheading: string;
  readonly aboutBio: string;
  readonly navLinks: readonly NavLink[];
  readonly socialLinks: readonly SocialLink[];
  readonly stats: readonly Stat[];
  readonly services: readonly Service[];
  readonly skills: readonly Skill[];
  readonly projects: readonly Project[];
  readonly contactInfo: ContactInfo;
  readonly cvFilename: string;
}

export const portfolioData: PortfolioData = {
  name: 'Muhammad Savaiz Khan',
  title: 'Automation Engineer | Workflow Specialist | AI Integration Expert',
  heroHeadline: 'I Build AI-Powered Automation Systems That Transform Your Business',
  heroSubheading: 'Automation Engineer | Workflow Specialist | AI Integration Expert',
  aboutBio:
    'I help businesses eliminate manual work, streamline operations, and scale faster with intelligent automation. From CRM integrations and data pipelines to AI-powered voice agents and content management platforms, I design end-to-end systems using Make.com, Zapier, N8N, Airtable, and Notion that deliver measurable ROI — saving 120+ hours monthly, generating 10,000+ qualified leads, and cutting operational costs by up to 70%.',
  cvFilename: 'cv.pdf',

  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ] as const,

  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/muhammad-savaiz-khan-5a3145242/',
      icon: 'linkedin',
    },
    {
      platform: 'Email',
      url: 'mailto:savaizkhan647@gmail.com',
      icon: 'email',
    },
  ] as const,

  stats: [
    { value: '1+', label: 'Years Experience' },
    { value: '50+', label: 'Automation Workflows' },
    { value: '10,000+', label: 'Leads Generated Monthly' },
  ] as const,

  services: [
    {
      icon: '⚙️',
      title: 'Workflow Automation',
      description:
        'End-to-end workflow automation using Make.com, Zapier, and N8N that eliminates 90% of manual tasks and saves 120+ hours monthly.',
    },
    {
      icon: '🔗',
      title: 'CRM Integration & Management',
      description:
        'Advanced CRM integrations with Pipedrive, HubSpot, and Google Contacts — boosting sales team productivity by 40%.',
    },
    {
      icon: '🤖',
      title: 'AI Voice Agent Development',
      description:
        'Intelligent voice agents using VAPI, Retell AI, and Twilio handling 500+ calls weekly with 85% resolution rate and 24/7 availability.',
    },
    {
      icon: '📊',
      title: 'Data Extraction & Lead Generation',
      description:
        'Multi-source data pipelines generating 10,000+ qualified leads monthly with 95% accuracy, reducing cost per lead by 50%.',
    },
    {
      icon: '🗄️',
      title: 'Database Architecture & Automation',
      description:
        'Enterprise database systems in Airtable and Notion streamlining operations for 50+ team members across 8 departments.',
    },
    {
      icon: '📝',
      title: 'Content & Publishing Automation',
      description:
        'AI-powered content pipelines reducing creation time from 2 hours to 10 minutes, enabling 15+ articles weekly across multiple channels.',
    },
  ] as const,

  skills: [
    { name: 'Make.com', percentage: 95 },
    { name: 'Zapier', percentage: 90 },
    { name: 'N8N', percentage: 85 },
    { name: 'Airtable', percentage: 95 },
    { name: 'VAPI / Retell AI', percentage: 85 },
    { name: 'API Integration', percentage: 90 },
    { name: 'JavaScript / Node.js', percentage: 80 },
    { name: 'React.js', percentage: 75 },
    { name: 'Python', percentage: 75 },
    { name: 'Notion', percentage: 90 },
  ] as const,

  projects: [
    {
      title: 'CRM Integration & Lead Management Ecosystem',
      category: 'Automation',
      description:
        'Multi-platform CRM integration connecting Google Forms with Pipedrive, achieving 40% increase in sales productivity.',
      image: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    },
    {
      title: 'AI Content Management & Publishing Platform',
      category: 'AI',
      description:
        'Automated content pipeline leveraging OpenAI GPT models, reducing creation time by 90% and enabling 15+ articles weekly.',
      image: 'linear-gradient(135deg, #1a2e1a, #163e2a)',
    },
    {
      title: 'Automated Data Extraction & Lead Intelligence',
      category: 'Data',
      description:
        'Multi-source data extraction generating 10,000+ qualified leads monthly with 95% data accuracy.',
      image: 'linear-gradient(135deg, #2e1a1a, #3e1616)',
    },
    {
      title: 'Airtable Enterprise Database Architecture',
      category: 'Database',
      description:
        'Complex relational database supporting 50+ team members across 8 departments, improving data accuracy from 75% to 98%.',
      image: airtableDbImg,
    },
    {
      title: 'AI-Powered Voice Agent System',
      category: 'AI',
      description:
        'Conversational AI system handling 500+ calls weekly with 85% resolution rate and 70% cost reduction.',
      image: aiVoiceAgentImg,
    },
    {
      title: 'Learning Management System for Madaris',
      category: 'Development',
      description:
        'Three-portal LMS built with React.js and .NET Core supporting Admin, Teacher, and Student roles with multilingual support.',
      image: lmsImg,
    },
    {
      title: 'Notion Knowledge Management System',
      category: 'Automation',
      description:
        'Centralized knowledge system for 30+ team members reducing information search time by 45%.',
      image: notionKmsImg,
    },
    {
      title: 'Email Marketing & Communication Automation',
      category: 'Automation',
      description:
        'Sophisticated email marketing platform with dynamic personalization, A/B testing, and automated drip campaigns.',
      image: 'linear-gradient(135deg, #2e1a24, #3e1628)',
    },
  ] as const,

  contactInfo: {
    email: 'savaizkhan647@gmail.com',
    phone: '+92 303 5517417',
    location: 'Rawalpindi, Pakistan',
  },
};
