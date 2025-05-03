import React, { useState } from 'react';
import Terminal from './ui/Terminal';
import TypingEffect from './ui/TypingEffect';
import ParticleBackground from './ui/ParticleBackground';

const Hero: React.FC = () => {
  const [typingComplete, setTypingComplete] = useState(false);

  const terminalTexts = [
    "> Nome: Kelton Lima\n> Cargo: Arquiteto Cloud e DevOps\n> Email: kelton.lima@ragt.com.br",
  ];

  const handleTypingComplete = () => {
    setTypingComplete(true);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <ParticleBackground />
      <div className="container mx-auto px-4 z-10 py-16 md:py-0">
        <div className="max-w-3xl mx-auto">
          <Terminal title="perfil.sh" className="md:min-w-[600px]">
            <div className="min-h-[120px]">
              <TypingEffect 
                texts={terminalTexts}
                typingSpeed={50}
                repeat={false}
                onComplete={handleTypingComplete}
                className="text-sm md:text-base"
              />
              
              {typingComplete && (
                <div className="mt-6 animate-fadeIn">
                  <p className="text-[#8B949E] mb-4">Bem-vindo ao meu portfólio! Sou especialista em:</p>
                  <ul className="list-disc list-inside space-y-1 text-[#C9D1D9]">
                    <li>Arquitetura Cloud & Infraestrutura</li>
                    <li>Implementação & Otimização DevOps</li>
                    <li>Design de Pipeline CI/CD</li>
                    <li>Infraestrutura como Código</li>
                  </ul>
                  
                  <div className="mt-6">
                    <button 
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-2 rounded-md transition-colors duration-200 mr-4"
                    >
                      Ver Projetos
                    </button>
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-[#30363D] hover:bg-[#444D56] text-[#C9D1D9] px-4 py-2 rounded-md transition-colors duration-200"
                    >
                      Contato
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Terminal>
        </div>
      </div>
    </section>
  );
};

export default Hero;