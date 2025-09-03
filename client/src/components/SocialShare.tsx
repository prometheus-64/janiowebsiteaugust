import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2, Linkedin, Twitter, Facebook, Mail, Link2 } from 'lucide-react';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  via?: string;
  className?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({
  url = window.location.href,
  title = 'Janio - 4PL Logistics Solutions for Southeast Asia',
  description = 'Transform your supply chain with Janio\'s comprehensive 4PL logistics solutions.',
  via = 'JanioAsia',
  className = ''
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=${via}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%20${encodedUrl}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
      console.log('Link copied to clipboard');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const openShareWindow = (url: string) => {
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    window.open(
      url,
      'share',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-muted-foreground flex items-center gap-2">
        <Share2 className="w-4 h-4" />
        Share:
      </span>
      
      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => openShareWindow(shareLinks.linkedin)}
          className="hover:text-[#0077B5]"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => openShareWindow(shareLinks.twitter)}
          className="hover:text-[#1DA1F2]"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-4 h-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => openShareWindow(shareLinks.facebook)}
          className="hover:text-[#1877F2]"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-4 h-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.open(shareLinks.email)}
          className="hover:text-primary"
          aria-label="Share via Email"
        >
          <Mail className="w-4 h-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="hover:text-primary"
          aria-label="Copy Link"
        >
          <Link2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;