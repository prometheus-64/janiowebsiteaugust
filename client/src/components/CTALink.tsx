import React from 'react';
import { Link } from 'react-router-dom';

interface CTALinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Enhanced Link component that tracks CTA source page for contact form workflows
 * Automatically captures the current page URL when linking to /contact
 */
export const CTALink: React.FC<CTALinkProps> = ({ to, children, className, onClick, ...props }) => {
  const handleClick = () => {
    // If this is a link to the contact page, capture the current page as CTA source
    if (to === '/contact') {
      const currentPage = window.location.pathname + window.location.search;
      sessionStorage.setItem('ctaSourcePage', currentPage);
    }
    
    // Call any additional onClick handler
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link 
      to={to} 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};

/**
 * Enhanced button component for CTA buttons that tracks source page
 */
interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  targetPage?: string;
  children: React.ReactNode;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  targetPage = '/contact', 
  children, 
  onClick, 
  ...props 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Capture the current page as CTA source if targeting contact page
    if (targetPage === '/contact') {
      const currentPage = window.location.pathname + window.location.search;
      sessionStorage.setItem('ctaSourcePage', currentPage);
    }
    
    // Call any additional onClick handler
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default CTALink;