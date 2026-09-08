// Data contracts and domain types for Traders @ BPHC

export interface EventItem {
  id: string;
  name: string;
  category: "upcoming" | "past";
  date: string;
  time: string;
  venue: string;
  description: string;
  badge: string;
  registrationOpen: boolean;
  posterBg: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: string;
  linkedin: string;
  bio?: string;
  image?: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: "Applications" | "Results" | "Research" | "Notice";
  summary: string;
  linkText?: string;
  linkHref?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Recruitment" | "Quant & Tech" | "Competitions";
}

export interface ContactInquiry {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date?: string;
}

export interface EventRegistration {
  id?: string;
  eventId: string;
  name: string;
  email: string;
  date?: string;
}