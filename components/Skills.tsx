import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Design Tools",
    skills: ["Figma", "Sketch", "Adobe Creative Suite", "Framer", "Principle", "InVision"]
  },
  {
    title: "Research & Testing",
    skills: ["User Interviews", "Usability Testing", "A/B Testing", "Surveys", "Analytics", "Heatmaps"]
  },
  {
    title: "Development",
    skills: ["HTML/CSS", "JavaScript", "Python", "React", "Tailwind CSS", "Git", "Responsive Design"]
  },
  {
    title: "Methodology",
    skills: ["Design Thinking", "Agile/Scrum", "Design Systems", "Accessibility", "Information Architecture"]
  }
];

const tools = [
  { name: "Figma", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "Python", level: 80 },
  { name: "Sketch", level: 85 },
  { name: "HTML/CSS", level: 90 },
  { name: "React", level: 75 }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 font-serif">Skills & Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional user experiences
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-serif">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.2 + index * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-muted rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-xl mb-6 text-center font-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Proficiency Levels
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <motion.div 
                key={index} 
                className="space-y-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between">
                  <span>{tool.name}</span>
                  <span className="text-muted-foreground">{tool.level}%</span>
                </div>
                <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                  <motion.div 
                    className="bg-primary h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.level}%` }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}