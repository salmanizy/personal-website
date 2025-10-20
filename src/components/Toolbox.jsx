import React from 'react';
import { toolbox } from '../data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';

const Toolbox = () => {
  return (
    <section className="px-6 py-20" id="toolbox">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Toolbox</h2>
          <p className="text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="glass-card rounded-2xl p-8">
          <Tabs defaultValue="webDev" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-border mb-8">
              <TabsTrigger value="webDev">Web</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="languages">Etc.</TabsTrigger>
            </TabsList>

            <TabsContent value="webDev" className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {toolbox.webDev.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium glass-badge"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="design" className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {toolbox.design.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium glass-badge"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="languages" className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {toolbox.languages.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium glass-badge"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Toolbox;