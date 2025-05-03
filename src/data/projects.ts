import { Project } from '../components/ui/ProjectCard';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Framework de Migração Cloud',
    description: 'Framework empresarial para migração de aplicações on-premises para AWS com zero downtime. Inclui ferramentas automatizadas de avaliação, planejamento e migração.',
    technologies: ['AWS', 'Terraform', 'Python'],
    stars: 78,
    forks: 23,
    url: '#project-cloud-migration'
  },
  {
    id: 2,
    title: 'Cluster Kubernetes Multi-Região',
    description: 'Infraestrutura Kubernetes pronta para produção abrangendo múltiplas regiões AWS para alta disponibilidade e recuperação de desastres com failover automatizado.',
    technologies: ['AWS', 'Terraform', 'GitOps'],
    stars: 124,
    forks: 42,
    url: '#project-multi-region-kubernetes'
  },
  {
    id: 3,
    title: 'Pipeline DevSecOps',
    description: 'Pipeline CI/CD abrangente com varredura de segurança integrada, avaliação de vulnerabilidades e verificações de conformidade para cliente do setor financeiro.',
    technologies: ['GitHub Actions', 'Docker', 'AWS', 'Security'],
    stars: 89,
    forks: 31,
    url: '#project-devsecops-pipeline'
  }
];