import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Code, 
  Mail, 
  ExternalLink, 
  Github, 
  Linkedin,
  Brain,
  Zap,
  Star,
  ChevronDown,
  Bot
} from 'lucide-react';
import { AIAssistant } from './AIAssistant';

const FuturisticPortfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'React/Next.js', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'TypeScript', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'AI/ML Integration', level: 88, icon: <Brain className="w-5 h-5" /> },
    { name: 'UI/UX Design', level: 85, icon: <Star className="w-5 h-5" /> },
    { name: 'Node.js/Python', level: 82, icon: <Zap className="w-5 h-5" /> },
    { name: 'Cloud Architecture', level: 80, icon: <Zap className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: 'Neural Dashboard Pro',
      description: 'AI-powered analytics dashboard with real-time data visualization and predictive insights.',
      tech: ['React', 'TypeScript', 'D3.js', 'TensorFlow.js'],
      link: '#',
      github: '#',
    },
    {
      title: 'Quantum Commerce',
      description: 'Next-gen e-commerce platform with AR product visualization and AI recommendations.',
      tech: ['Next.js', 'Three.js', 'WebXR', 'GPT-4'],
      link: '#',
      github: '#',
    },
    {
      title: 'CyberChat Assistant',
      description: 'Intelligent chatbot with natural language processing and multi-modal interactions.',
      tech: ['Python', 'OpenAI', 'React', 'FastAPI'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-circuit-board opacity-20"></div>
      
      {/* Animated Border Frame */}
      <div className="fixed inset-4 circuit-border rounded-2xl pointer-events-none z-10"></div>
      
      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-panel px-6 py-3 rounded-full">
          <div className="flex items-center space-x-6">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === section
                    ? 'text-primary glow-text'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* AI Assistant */}
      <AIAssistant />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-8 relative">
        <div className="text-center max-w-4xl">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text">
              AI Creative
              <span className="block bg-gradient-neon bg-clip-text text-transparent">
                Professional
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Building the future with cutting-edge AI solutions, immersive experiences, 
              and next-generation web technologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="neon-border bg-primary/20 hover:bg-primary/30 text-primary">
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="neon-border border-secondary text-secondary hover:bg-secondary/10">
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors neon-glow">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors neon-glow">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors neon-glow">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
            About <span className="text-primary">Neural Network</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-panel p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold">Digital Architect</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of experience in cutting-edge technology, I specialize in creating 
                AI-powered applications that push the boundaries of what's possible. My expertise spans 
                from neural networks to immersive web experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I transform complex ideas into elegant, functional solutions that deliver real value 
                to users and businesses. Every project is an opportunity to innovate and create 
                something extraordinary.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-xl hover:neon-border transition-all duration-300">
                <Brain className="w-8 h-8 text-secondary mb-4" />
                <h4 className="text-xl font-semibold mb-2">AI Innovation</h4>
                <p className="text-muted-foreground">
                  Leveraging machine learning and neural networks to create intelligent applications.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-xl hover:neon-border transition-all duration-300">
                <Zap className="w-8 h-8 text-accent mb-4" />
                <h4 className="text-xl font-semibold mb-2">Performance Optimization</h4>
                <p className="text-muted-foreground">
                  Building lightning-fast applications with cutting-edge performance techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
            Technical <span className="text-secondary">Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="glass-panel p-6 rounded-xl hover:neon-border transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-3">{skill.icon}</div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full neon-glow transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
            Featured <span className="text-accent">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="glass-panel border-glass-border hover:neon-border transition-all duration-300 group">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="neon-border border-primary text-primary hover:bg-primary/10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="neon-border border-secondary text-secondary hover:bg-secondary/10">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 glow-text">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to bring your next AI-powered project to life? Let's discuss how we can 
            create something extraordinary together.
          </p>
          
          <div className="glass-panel p-8 rounded-2xl max-w-md mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <Mail className="w-6 h-6 text-primary" />
                <span className="text-lg">contact@aiportfolio.dev</span>
              </div>
              
              <Button size="lg" className="w-full neon-border bg-primary/20 hover:bg-primary/30 text-primary">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
              
              <div className="flex justify-center space-x-6 pt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors neon-glow">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors neon-glow">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuturisticPortfolio;