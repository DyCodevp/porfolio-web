import type { TechIconSlug } from "./tech-icons"

export interface Tech {
  name: string
  icon?: TechIconSlug
}

// Keys used in projects.json `tags` and in the skills list.
export const TECH = {
  PYTHON: { name: "Python", icon: "python" },
  TYPESCRIPT: { name: "TypeScript", icon: "typescript" },
  JAVASCRIPT: { name: "JavaScript", icon: "javascript" },
  GO: { name: "Go", icon: "go" },
  SQL: { name: "SQL" },
  NODE: { name: "Node.js", icon: "nodedotjs" },
  FASTAPI: { name: "FastAPI", icon: "fastapi" },
  REST: { name: "REST" },
  SOAP: { name: "SOAP" },
  JSON: { name: "JSON", icon: "json" },
  XML: { name: "XML", icon: "xml" },
  MICROSERVICES: { name: "Microservices" },
  MCP: { name: "MCP", icon: "modelcontextprotocol" },
  OAUTH: { name: "OAuth" },
  JWT: { name: "JWT", icon: "jsonwebtokens" },
  ENCRYPTION: { name: "Encryption" },
  SSH: { name: "SSH" },
  ACL: { name: "ACLs & IP/port filtering" },
  DOCKER: { name: "Docker", icon: "docker" },
  KUBERNETES: { name: "Kubernetes (basic)", icon: "kubernetes" },
  JENKINS: { name: "Jenkins", icon: "jenkins" },
  GIT: { name: "Git", icon: "git" },
  GITHUB: { name: "GitHub", icon: "github" },
  GITLAB: { name: "GitLab", icon: "gitlab" },
  LINUX: { name: "Linux", icon: "linux" },
  AZURE: { name: "Azure" },
  CLOUDFLARE: { name: "Cloudflare", icon: "cloudflare" },
  VERCEL: { name: "Vercel", icon: "vercel" },
  POSTGRESQL: { name: "PostgreSQL", icon: "postgresql" },
  PGVECTOR: { name: "pgvector" },
  SQLITE: { name: "SQLite", icon: "sqlite" },
  LLAMAINDEX: { name: "LlamaIndex" },
  RAG: { name: "RAG" },
  TEAMS: { name: "Microsoft Teams" },
  SOFTEXPERT: { name: "SoftExpert SE Suite" },
  ODOO: { name: "Odoo", icon: "odoo" },
  ASTRO: { name: "Astro", icon: "astro" },
  SVELTIA: { name: "Sveltia CMS" },
  I18N: { name: "i18n (ES/EN/中文)" },
  REACT: { name: "React", icon: "react" },
  QWIK: { name: "Qwik", icon: "qwik" },
  TAILWIND: { name: "Tailwind CSS", icon: "tailwindcss" },
  VITE: { name: "Vite", icon: "vite" },
  CLARIFAI: { name: "Clarifai API", icon: "clarifai" },
  TCPIP: { name: "TCP/IP" },
  NAT: { name: "NAT" },
  DHCP: { name: "DHCP" },
  LANWAN: { name: "LAN/WAN" },
  WIRESHARK: { name: "Wireshark" },
  TCPDUMP: { name: "tcpdump" },
} satisfies Record<string, Tech>

export type TechKey = keyof typeof TECH
