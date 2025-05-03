import React from 'react';
import Terminal from './ui/Terminal';
import TypingEffect from './ui/TypingEffect';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  const cloudText = `$ expertise --categoria="Cloud"\n> ${skills.cloud.join('\n> ')}`;
  const devopsText = `$ expertise --categoria="DevOps"\n> ${skills.devops.join('\n> ')}`;
  const toolsText = `$ expertise --categoria="Ferramentas"\n> ${skills.tools.join('\n> ')}`;

  return (
    <section id="skills" className="py-20 bg-[#0D1117]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#C9D1D9] mb-4">Experiência Técnica</h2>
          <p className="text-[#8B949E] max-w-2xl mx-auto">
            Especializado em soluções cloud e práticas DevOps que impulsionam eficiência, 
            escalabilidade e confiabilidade para aplicações modernas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="h-full">
            <Terminal title="habilidades-cloud.sh">
              <div className="min-h-[200px]">
                <TypingEffect 
                  texts={[cloudText]} 
                  typingSpeed={30}
                  repeat={false}
                  className="text-sm whitespace-pre-line"
                />
              </div>
            </Terminal>
          </div>
          
          <div className="h-full">
            <Terminal title="habilidades-devops.sh">
              <div className="min-h-[200px]">
                <TypingEffect 
                  texts={[devopsText]} 
                  typingSpeed={30}
                  repeat={false}
                  className="text-sm whitespace-pre-line"
                />
              </div>
            </Terminal>
          </div>
          
          <div className="h-full">
            <Terminal title="habilidades-ferramentas.sh">
              <div className="min-h-[200px]">
                <TypingEffect 
                  texts={[toolsText]} 
                  typingSpeed={30}
                  repeat={false}
                  className="text-sm whitespace-pre-line"
                />
              </div>
            </Terminal>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#C9D1D9] mb-6 text-center">Minha Abordagem</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#161B22] p-6 rounded-lg border border-[#30363D]">
              <h4 className="text-[#2F81F7] text-lg font-bold mb-3">Infraestrutura como Código</h4>
              <p className="text-[#C9D1D9]">
                Acredito em tratar infraestrutura como código para reprodutibilidade,
                consistência e controle de versão. Esta abordagem elimina desvios de configuração
                e permite escalonamento rápido.
              </p>
            </div>
            <div className="bg-[#161B22] p-6 rounded-lg border border-[#30363D]">
              <h4 className="text-[#2F81F7] text-lg font-bold mb-3">Automação CI/CD</h4>
              <p className="text-[#C9D1D9]">
                Implementação de pipelines CI/CD robustos reduz erros manuais, aumenta a frequência
                de implantação e reduz o tempo de lançamento mantendo altos padrões de qualidade.
              </p>
            </div>
            <div className="bg-[#161B22] p-6 rounded-lg border border-[#30363D]">
              <h4 className="text-[#2F81F7] text-lg font-bold mb-3">Otimização de Custos Cloud</h4>
              <p className="text-[#C9D1D9]">
                Especializado em equilibrar requisitos de performance com soluções cloud
                custo-efetivas, implementando dimensionamento adequado, auto-scaling e
                gerenciamento do ciclo de vida dos recursos.
              </p>
            </div>
            <div className="bg-[#161B22] p-6 rounded-lg border border-[#30363D]">
              <h4 className="text-[#2F81F7] text-lg font-bold mb-3">Segurança em Primeiro Lugar</h4>
              <p className="text-[#C9D1D9]">
                Segurança é integrada em todo o ciclo de desenvolvimento, não adicionada como
                uma reflexão tardia. Implemento princípio do menor privilégio, criptografia e
                varredura automatizada de segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;