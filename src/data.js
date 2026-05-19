import {
  Bot,
  ChartNoAxesCombined,
  ClipboardList,
  Code2,
  Globe,
  Headphones,
  Layers3,
  MessageCircleMore,
  Megaphone,
  Repeat,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  Rocket,
  Smartphone,
} from 'lucide-react'

export const navLinks = ['Home', 'Services', 'Solutions', 'About', 'Portfolio', 'Contact']

export const counters = [
  { label: 'Clients', value: 100 },
  { label: 'Projects', value: 250 },
  { label: 'Support', value: 24, suffix: '/7' },
  { label: 'Satisfaction', value: 99, suffix: '%' },
]

export const services = [
  { title: 'LLM Training', icon: Sparkles, description: 'Build proprietary language models, fine-tune workflows, and shape domain-aware AI systems.', glow: 'from-indigo-200/80 to-cyan-200/60' },
  { title: 'AI Agent Bots', icon: Bot, description: 'Deploy autonomous assistants that answer, qualify, guide, and resolve with premium precision.', glow: 'from-cyan-200/80 to-sky-200/60' },
  { title: 'Social Media Management', icon: Megaphone, description: 'Elevate your brand with strategic content, community engagement, and conversion-focused social systems.', glow: 'from-fuchsia-200/80 to-violet-200/60' },
  { title: 'Digital Marketing', icon: Search, description: 'Scale demand with data-led performance campaigns, positioning, and multi-channel growth systems.', glow: 'from-amber-200/80 to-pink-200/60' },
  { title: 'Web Development', icon: Code2, description: 'Create responsive, elegant, high-performance websites built for trust, speed, and clarity.', glow: 'from-sky-200/80 to-indigo-200/60' },
  { title: 'App Development', icon: Smartphone, description: 'Design polished mobile experiences that feel fast, intuitive, and native to modern users.', glow: 'from-cyan-200/80 to-emerald-200/60' },
  { title: 'Call Center / BPO', icon: Headphones, description: 'Deliver customer operations with refined scripting, scalable teams, and brand-safe quality.', glow: 'from-indigo-200/80 to-purple-200/60' },
  { title: 'Chat Support', icon: MessageCircleMore, description: 'Offer instant support with human tone, strong SLAs, and seamless handoff flows.', glow: 'from-teal-200/80 to-cyan-200/60' },
  { title: 'Email Support', icon: ClipboardList, description: 'Keep communications clean, quick, and professional across every inbox touchpoint.', glow: 'from-violet-200/80 to-pink-200/60' },
  { title: 'Data Analytics', icon: ChartNoAxesCombined, description: 'Turn operations into decisions with dashboards, funnels, reporting, and insight layers.', glow: 'from-sky-200/80 to-cyan-200/60' },
  { title: 'Business Automation', icon: Workflow, description: 'Streamline repetitive work with systems that save time, reduce errors, and increase output.', glow: 'from-emerald-200/80 to-sky-200/60' },
  { title: 'CRM Integration', icon: Repeat, description: 'Unify pipelines, customer data, and workflows into one smooth revenue engine.', glow: 'from-fuchsia-200/80 to-indigo-200/60' },
]

export const benefits = [
  { title: 'AI Expertise', icon: Sparkles, text: 'Senior-level AI systems, automation, and product thinking crafted for business outcomes.' },
  { title: 'Fast Delivery', icon: Rocket, text: 'Efficient sprints, clean execution, and rapid launch cycles without compromising quality.' },
  { title: 'Dedicated Support', icon: Headphones, text: 'Responsive collaboration, clear communication, and dependable post-launch assistance.' },
  { title: 'Scalable Systems', icon: Layers3, text: 'Flexible architectures built to grow with your operations, traffic, and service needs.' },
  { title: 'Cost Effective', icon: ShieldCheck, text: 'Smart delivery models that maximize performance, reduce waste, and preserve budget.' },
  { title: 'Enterprise Quality', icon: Globe, text: 'Premium standards, robust UX, and polished systems aligned with modern brands.' },
]

export const processSteps = [
  { step: '01', title: 'Discovery', text: 'Understand goals, users, and the smartest path to value.' },
  { step: '02', title: 'Planning', text: 'Shape architecture, flow, content, and launch priorities.' },
  { step: '03', title: 'Development', text: 'Build sleek interfaces, AI features, and performant systems.' },
  { step: '04', title: 'Testing', text: 'Refine interactions, polish UX, and validate every detail.' },
  { step: '05', title: 'Launch', text: 'Deploy a premium experience ready for real-world growth.' },
  { step: '06', title: 'Optimization', text: 'Improve using performance data, feedback, and experimentation.' },
]

export const portfolio = [
  { title: 'AI Dashboard', category: 'Analytics', accent: 'from-indigo-200 to-cyan-100' },
  { title: 'Web App Suite', category: 'Product', accent: 'from-sky-200 to-violet-100' },
  { title: 'Mobile Experience', category: 'App', accent: 'from-cyan-200 to-white' },
  { title: 'Marketing Growth', category: 'Campaign', accent: 'from-fuchsia-200 to-pink-100' },
  { title: 'Operations Hub', category: 'Automation', accent: 'from-emerald-200 to-sky-100' },
  { title: 'CRM Platform', category: 'Systems', accent: 'from-amber-100 to-indigo-100' },
]

export const testimonials = [
  {
    name: 'Ayesha Malik',
    role: 'Founder, NovaGrid',
    quote: 'CALLARO translated our vision into a polished AI experience that feels premium and immediate.',
  },
  {
    name: 'Daniel Carter',
    role: 'CMO, Orbit Labs',
    quote: 'The delivery quality was exceptional. Every interaction felt deliberate, clean, and conversion-focused.',
  },
  {
    name: 'Mina Rossi',
    role: 'Operations Lead, Flux Commerce',
    quote: 'They combined design, automation, and support into one seamless system that truly scales.',
  },
  {
    name: 'Omar Khan',
    role: 'CEO, ElevateX',
    quote: 'Premium visuals, strong strategy, and fast execution. Exactly the kind of partner we needed.',
  },
]

export const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'X', href: '#' },
  { label: 'Dribbble', href: '#' },
]
