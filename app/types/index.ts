// Common Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  features: string[];
  link: string;
}

export interface TestimonialItem {
  text: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image?: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  category: string;
  image: string;
  client: string;
  results: string[];
  link: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zip: string;
  };
  hours: {
    days: string;
    time: string;
  }[];
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
  budget: string;
}

export interface QuoteFormData extends ContactFormData {
  projectType: string;
  deadline: string;
  quantity: number;
  specifications: string;
} 