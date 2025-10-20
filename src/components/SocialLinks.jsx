import React from 'react';
import { socialLinks } from '../data/mockData';
import { Button } from './ui/button';
import { Github, Palette, Linkedin } from 'lucide-react';

const iconMap = {
  Github: Github,
  Palette: Palette,
  Linkedin: Linkedin
};

const SocialLinks = () => {
  return (
    <section className="px-6 py-20" id="social">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4 text-center">Let's Connect</h2>
          <p className="text-muted-foreground text-center mb-8">
            Find me on these platforms
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <Button
                  key={link.name}
                  asChild
                  variant="outline"
                  size="lg"
                  className="glass-card hover:scale-105 transition-transform"
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <Icon className="mr-2 h-5 w-5" />
                    {link.name}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;