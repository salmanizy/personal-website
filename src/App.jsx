import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import Toolbox from './components/Toolbox';

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen transition-colors duration-300">
        <Hero />
        <Projects />
        <Toolbox />
        <SocialLinks />
        
        <footer className="px-6 py-8 border-t border-border/50">
          <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
            <p>© 2024 Salman Al Farisy Azhar. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;