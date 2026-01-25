import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  tools: string[];
  icon: React.ComponentType<any>;
}

export interface Tool {
  name: string;
  iconUrl: string; // Using placeholder URLs for visuals
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  color: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  category: 'article' | 'walkthrough';
  content: (
    | { type: 'paragraph'; value: string }
    | { type: 'heading'; value: string }
    | { type: 'subheading'; value: string }
    | { type: 'list'; value: string[] }
    | { type: 'code'; value: string; language: string }
    | { type: 'image'; value: string; caption?: string }
  )[];
}