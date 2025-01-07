'use client';
import React from 'react';
import {Monitor, Languages, ChevronDown} from 'lucide-react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import {technologies} from '@/lib/utils';

const TechnologiesAndSkills = () => {
  return (
    // <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
    <section className="mt-12">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
        <Monitor className="w-6 h-6" />
        Technologies & Skills
      </h2>

      <div className="grid gap-6">
        {Object.entries(technologies).map(([category, items]) => (
          <Collapsible key={category}>
            <Card>
              <CollapsibleTrigger className="w-full">
                <CardHeader className="flex flex-row items-center justify-between p-6">
                  <CardTitle className="text-xl flex items-center gap-2">
                    {category === 'Operating Systems' && (
                      <Monitor className="w-5 h-5" />
                    )}
                    {category === 'Programming Languages' && (
                      <Languages className="w-5 h-5" />
                    )}
                    {category}
                  </CardTitle>
                  <ChevronDown className="w-5 h-5" />
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="p-6 pt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {items.map((item) => (
                      <div
                        key={item.name}
                        className="p-4 border rounded-lg flex flex-col items-center justify-center text-center"
                      >
                        <span className="font-medium mb-2">{item.name}</span>
                        <Badge
                          variant={
                            item.level === 'Advanced'
                              ? 'default'
                              : item.level === 'Intermediate'
                                ? 'secondary'
                                : 'outline'
                          }
                        >
                          {item.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        ))}
      </div>
    </section>
    // </div>
  );
};

export default TechnologiesAndSkills;
