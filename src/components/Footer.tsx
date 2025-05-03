import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D1117] border-t border-[#30363D] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-[#2F81F7] font-mono font-bold text-xl">
              <span className="text-[#C9D1D9]">&gt;</span> kelton.lima
            </div>
            <p className="text-[#8B949E] text-sm mt-2">
              Arquiteto Cloud e DevOps
            </p>
          </div>
          
          <div className="flex space-x-6">
            <SocialLink href="https://github.com/" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://twitter.com/" icon={<Twitter size={20} />} label="Twitter" />
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-[#30363D] text-center text-[#8B949E] text-sm">
          <p>
            &copy; {new Date().getFullYear()} Kelton Lima. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Feito com tecnologias web modernas.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-[#8B949E] hover:text-[#2F81F7] transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;