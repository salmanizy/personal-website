import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Calendar } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <div className="mb-2">
            <Badge variant="secondary" className="text-xs">
              {project.category}
            </Badge>
          </div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl glass-modal max-h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Project Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
            </div>

            {/* Category and Date */}
            <div className="flex items-center justify-between">
              <Badge variant="secondary">{project.category}</Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{new Date(project.completedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-semibold mb-2">About</h4>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>

            {/* Link */}
            <div>
              <Button asChild className="w-full">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;