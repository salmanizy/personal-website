import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <Button
        onClick={toggleTheme}
        variant="ghost"
        size="icon"
        className="fixed top-6 right-6 z-50 glass-card"
      >
        {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </Button>

      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-medium px-4 py-2 rounded-full glass-card">
                Web Developer
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Salman Al Farisy Azhar
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A curious Website Developer and UI/UX Design enthusiast passionate about creating seamless and impactful web experiences. Interested in software engineering and focused on building solutions that balance usability, performance, and scalability. Combines design intuition with clean, efficient code to deliver websites that look exceptional and work flawlessly.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative glass-card p-2 rounded-3xl">
                <img
                  src="https://cdn.jsdelivr.net/gh/salmanizy/asset@master/assets/avatar.png"
                  alt="Salman Al Farisy Azhar"
                  className="w-80 h-80 object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;