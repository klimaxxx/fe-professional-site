import React, { ReactNode } from 'react';

interface TerminalProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ title = 'terminal', children, className = '' }) => {
  return (
    <div className={`bg-[#161B22] rounded-lg overflow-hidden shadow-xl border border-[#30363D] ${className}`}>
      <div className="bg-[#0D1117] px-4 py-2 flex items-center border-b border-[#30363D]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#F85149]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FDBF2D]"></div>
          <div className="w-3 h-3 rounded-full bg-[#238636]"></div>
        </div>
        <div className="text-[#8B949E] text-sm font-mono ml-4">
          ~ {title}
        </div>
      </div>
      <div className="p-4 font-mono text-[#C9D1D9] overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Terminal;