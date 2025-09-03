import React from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/utils/analytics';

interface CTALinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ctaName?: string;
}

/**
 * Enhanced Link component that tracks CTA source page for contact form workflows
 * Automatically captures the current page URL when linking to /contact
 */
export const CTALink: React.FC<CTALinkProps> = ({ to, children, className, onClick, ctaName, ...props }) => {
  const handleClick = () => {
    const currentPage = window.location.pathname;
    
    // Track CTA click
    trackCTAClick(
      ctaName || (typeof children === 'string' ? children : 'CTA Link'),
      currentPage
    );
    
    // If this is a link to the contact page, capture the current page as CTA source
    if (to === '/contact') {
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
  ctaName?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  targetPage = '/contact', 
  children, 
  onClick,
  ctaName,
  ...props 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentPage = window.location.pathname;
    
    // Track CTA click
    trackCTAClick(
      ctaName || (typeof children === 'string' ? children : 'CTA Button'),
      currentPage
    );
    
    // Capture the current page as CTA source if targeting contact page
    if (targetPage === '/contact') {
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