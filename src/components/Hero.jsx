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
              I'm a dedicated student at Bina Nusantara University, specializing in Front-End Development and UI/UX Design. I'm passionate about crafting engaging user experiences through innovative design thinking and creating responsive web solutions. Let's collaborate and embark on a journey of creativity and excellence!
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