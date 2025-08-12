import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PersonaCardProps {
  title: string;
  headline: string;
  subtext: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
}

const PersonaCard: React.FC<PersonaCardProps> = ({
  title,
  headline,
  subtext,
  href,
  icon,
  className
}) => {
  return (
    <Card className={cn(
      "group relative overflow-hidden transition-all duration-300 hover:shadow-strong hover:-translate-y-1 border-l-4 border-l-accent",
      className
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3 mb-3">
          <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
            {icon}
          </div>
          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {title}
          </div>
        </div>
        <h3 className="text-xl font-semibold font-display text-foreground group-hover:text-primary transition-colors duration-300">
          {headline}
        </h3>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {subtext}
        </p>
        <Button 
          variant="outline" 
          className="w-full group-hover:border-primary group-hover:text-primary transition-all duration-300"
          asChild
        >
          <Link to={href}>
            Learn More
            <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PersonaCard;