import { useState } from 'react';
import heroImage from '../screens/Fabio-portrait.png';
import leadsImage from '../screens/Leads.png';

const contactEmail = 'fabiomoreiradacunha1@gmail.com';
const whatsAppUrl =
  'https://wa.me/5565996900584?text=Ola%2C%20Fabio!%20Vim%20pelo%20seu%20portfolio%20e%20gostaria%20de%20conversar.';

const navItems = [
  { href: '#about', label: 'Sobre mim' },
  { href: '#skills', label: 'Compet\u00eancias' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contato' },
];

const serviceCards = [
  {
    icon: 'bi-window-stack',
    title: 'Interfaces com foco em resultado',
    text:
      'Desenvolvo experi\u00eancias modernas, leves e responsivas para produtos digitais, p\u00e1ginas de convers\u00e3o e ambientes internos.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Back-end com estrutura',
    text:
      'Organizo APIs, integra\u00e7\u00f5es e fluxos de dados para sustentar produtos escal\u00e1veis, consistentes e prontos para evoluir.',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Solu\u00e7\u00f5es digitais completas',
    text:
      'Conecto regra de neg\u00f3cio, design e implementa\u00e7\u00e3o para transformar necessidades reais em entregas funcionais.',
  },
];

const skillGroups = [
  {
    title: 'Tecnologias em uso',
    items: ['React', 'JavaScript', 'Bootstrap', 'HTML5', 'CSS3', 'Git'],
  },
  {
    title: 'Expans\u00e3o de stack',
    items: ['Node.js', 'APIs REST', 'MySQL', 'MongoDB', 'TypeScript', 'UX aplicado'],
  },
  {
    title: 'Forma de trabalhar',
    items: [
      'Responsividade',
      'Clean Code',
      'Deploy',
      'Versionamento',
      'Prototipa\u00e7\u00e3o',
      'Colabora\u00e7\u00e3o',
    ],
  },
];

const portfolioItems = [
  {
    title: 'SDR CRM | Plataforma de Gestao de Leads com IA',
    description:
      'CRM full-stack para pre-vendas com leads, kanban, campanhas, metricas e IA, usando React, Node e Supabase.',
    tags: ['Node.js', 'PostgreSQL', 'Docker', 'API'],
    image: leadsImage,
    href: 'https://superb-cranachan-294219.netlify.app',
    layout: 'portfolio-card-featured',
  },
  {
    title: 'Dashboard comercial',
    description: '',
    tags: ['UI', 'Data Viz', 'Front-end'],
    layout: 'portfolio-card-secondary-a',
  },
  {
    title: 'Catalogo digital de servicos',
    description: '',
    tags: ['Design System', 'Performance'],
    layout: 'portfolio-card-secondary-b',
  },
  {
    title: 'Formulario inteligente',
    description: '',
    tags: ['Formularios', 'Validacao', 'Acessibilidade'],
    layout: 'portfolio-card-secondary-c',
  },
  {
    title: 'Portfolio pessoal',
    description: '',
    tags: ['Branding', 'SPA', 'Responsive'],
    layout: 'portfolio-card-secondary-d',
  },
  {
    title: 'Experiencias sob demanda',
    description: '',
    tags: ['Escalabilidade', 'Vite', 'Componentes'],
    layout: 'portfolio-card-tail',
  },
];

const socialLinks = [
  { href: 'https://github.com/', icon: 'bi-github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/', icon: 'bi-linkedin', label: 'LinkedIn' },
  { href: `mailto:${contactEmail}`, icon: 'bi-envelope', label: 'E-mail' },
];

function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-title ${light ? 'section-title-light' : ''}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function validateForm(values) {
  const nextErrors = {};

  if (!values.name.trim()) {
    nextErrors.name = 'Informe seu nome.';
  }

  if (!values.email.trim()) {
    nextErrors.email = 'Informe seu e-mail.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = 'Use um e-mail valido.';
  }

  if (values.phone.trim() && !/^[0-9()+\s-]{8,}$/.test(values.phone.trim())) {
    nextErrors.phone = 'Telefone invalido.';
  }

  if (!values.message.trim()) {
    nextErrors.message = 'Escreva uma mensagem.';
  } else if (values.message.trim().length < 20) {
    nextErrors.message = 'A mensagem precisa ter pelo menos 20 caracteres.';
  }

  return nextErrors;
}

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const summaryCards = [
    {
      title: 'JavaScript Ecosystem',
      description: 'Node.js / Express / React',
    },
    {
      title: 'Desenvolvimento Web',
      description: 'Interfaces + APIs + Banco',
    },
    {
      title: 'Foco em Produto',
      description: 'Sistemas organizados e escalaveis',
    },
  ];

  function handleChange(event) {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateForm(formValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const emailSubject = encodeURIComponent(`Contato pelo portfolio - ${formValues.name.trim()}`);
    const emailBody = encodeURIComponent(
      [
        `Nome: ${formValues.name.trim()}`,
        `E-mail: ${formValues.email.trim()}`,
        `Telefone: ${formValues.phone.trim() || 'Nao informado'}`,
        '',
        'Mensagem:',
        formValues.message.trim(),
      ].join('\n'),
    );

    setSubmitted(true);
    setFormValues({
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    window.location.href = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;
  }

  return (
    <div className="portfolio-app">
      <header className="site-header">
        <nav className="navbar navbar-expand-lg portfolio-navbar">
          <div className="container">
            <a className="navbar-brand" href="#top">
              F<span>M</span>C
            </a>
            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              aria-controls="portfolioNav"
              aria-expanded={isNavOpen}
              aria-label="Abrir navegacao"
              onClick={() => setIsNavOpen((current) => !current)}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse justify-content-end${isNavOpen ? ' show' : ''}`}
              id="portfolioNav"
            >
              <ul className="navbar-nav align-items-lg-center gap-lg-4">
                {navItems.map((item) => (
                  <li className="nav-item" key={item.href}>
                    <a className="nav-link" href={item.href} onClick={() => setIsNavOpen(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-panel reveal-up">
              <span className="hero-kicker">Desenvolvedor Full Stack</span>
              <h1>
                Fabio
                <br />
                Moreira da Cunha
              </h1>
              <p className="hero-copy">
                Desenvolvedor Full Stack em busca de novas oportunidades para criar experiencias
                digitais solidas, elegantes e orientadas a resultados.
              </p>
              <div className="hero-actions">
                <a className="btn btn-dark hero-btn" href="#portfolio">
                  Ver portfolio
                </a>
                <a
                  className="btn btn-outline-dark hero-btn secondary"
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar comigo
                </a>
              </div>
              <div className="hero-socials">
                {socialLinks.map((link) => (
                  <a
                    className="social-chip"
                    href={link.href}
                    key={link.label}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <i className={`bi ${link.icon}`} aria-hidden="true" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="hero-visual reveal-up delay-1">
              <div className="hero-photo-wrap">
                <img src={heroImage} alt="Fabio Moreira da Cunha" className="hero-photo" />
              </div>
              <div className="hero-badge badge-top">
                <span className="badge-label">Disponivel para</span>
                <strong>oportunidades full stack</strong>
              </div>
              <div className="hero-badge badge-bottom">
                <span className="badge-label">Entrega</span>
                <strong>solucoes digitais</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="intro-section">
          <div className="container intro-layout">
            <div className="intro-copy reveal-up">
              <span className="section-eyebrow">Resumo profissional</span>
              <h2>
                {
                  'Desenvolvedor Full Stack com experi\u00eancia em JavaScript, Node.js, Express, MySQL e React, criando aplica\u00e7\u00f5es web com foco em performance, usabilidade e organiza\u00e7\u00e3o de arquitetura.'
                }
              </h2>
            </div>
            <div className="intro-text reveal-up delay-1">
              <p>
                Minha proposta e transformar necessidades de negocio em interfaces, APIs e fluxos
                organizados, com atencao a legibilidade do codigo, experiencia de uso e evolucao
                sustentavel do produto.
              </p>
              <a href="#about" className="text-link">
                Conheca minha forma de trabalhar
              </a>
            </div>
          </div>
          <div className="container stats-grid reveal-up delay-2">
            {summaryCards.map((item) => (
              <div className="stat-card" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section section-light" id="about">
          <div className="container">
            <SectionTitle
              eyebrow="Sobre mim"
              title={'Aplica\u00e7\u00f5es Full Stack voltadas para solu\u00e7\u00f5es reais.'}
              text={
                'Este portf\u00f3lio apresenta projetos Full Stack desenvolvidos com foco em organiza\u00e7\u00e3o, experi\u00eancia do usu\u00e1rio e solu\u00e7\u00f5es aplicadas a cen\u00e1rios reais.'
              }
            />

            <div className="about-grid">
              <article className="about-story reveal-up">
                <h3>O que eu entrego</h3>
                <p>
                  {
                    'Atuo no desenvolvimento de interfaces e experi\u00eancias web com aten\u00e7\u00e3o especial \u00e0 estrutura, legibilidade e manuten\u00e7\u00e3o. Busco solu\u00e7\u00f5es que funcionem bem no presente sem comprometer os pr\u00f3ximos passos do produto.'
                  }
                </p>
                <p>
                  {
                    'Hoje estou em busca de oportunidades como Desenvolvedor Full Stack e quero contribuir com projetos que valorizem qualidade, aprendizado cont\u00ednuo e colabora\u00e7\u00e3o real.'
                  }
                </p>
              </article>

              <div className="services-grid">
                {serviceCards.map((card, index) => (
                  <article className={`service-card reveal-up delay-${index + 1}`} key={card.title}>
                    <i className={`bi ${card.icon}`} aria-hidden="true" />
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-dark" id="skills">
          <div className="container">
            <SectionTitle
              eyebrow={'Compet\u00eancias'}
              title={
                'Tecnologias utilizadas para desenvolver aplica\u00e7\u00f5es full stack modernas.'
              }
              text={
                'Interfaces responsivas, APIs, banco de dados e l\u00f3gica de backend organizados para criar sistemas completos e funcionais.'
              }
              light
            />

            <div className="skills-groups">
              {skillGroups.map((group, index) => (
                <article className={`skill-group reveal-up delay-${index}`} key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span className="skill-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section section-light" id="portfolio">
          <div className="portfolio-banner">
            <div className="container">
              <SectionTitle
                eyebrow="Portfolio"
                title="Meus Projetos e Servicos"
                text="Os cards abaixo destacam entregas e formatos de solucao que representam meu repertorio tecnico, minha capacidade de execucao e o tipo de problema que posso ajudar a resolver."
                light
              />
            </div>
          </div>

          <div className="container portfolio-grid">
            {portfolioItems.map((item, index) => (
              <article
                className={`portfolio-card ${item.layout} reveal-up delay-${index % 3}`}
                key={item.title}
              >
                {item.layout === 'portfolio-card-featured' ? (
                  <>
                    {item.image ? (
                      <a
                        className="portfolio-card-media"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Abrir projeto ${item.title}`}
                      >
                        <img src={item.image} alt={item.title} />
                      </a>
                    ) : null}
                    <span className="portfolio-index">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    {item.description ? <p>{item.description}</p> : null}
                    <div className="portfolio-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-light" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy reveal-up">
              <SectionTitle
                eyebrow="Contato"
                title={'Vamos conversar sobre seu pr\u00f3ximo projeto?'}
                text={
                  'Desenvolvimento full stack focado em aplica\u00e7\u00f5es modernas, interfaces organizadas e integra\u00e7\u00e3o de sistemas.'
                }
              />
              <div className="contact-points">
                <div>
                  <span>Objetivo profissional</span>
                  <strong>Atuar em projetos e oportunidades como Desenvolvedor Full Stack</strong>
                </div>
                <div>
                  <span>Escopo de atuacao</span>
                  <strong>Landing pages, interfaces web e solucoes digitais sob medida</strong>
                </div>
              </div>
            </div>

            <form className="contact-form reveal-up delay-1" noValidate onSubmit={handleSubmit}>
              <label>
                <span>Nome</span>
                <input
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className={errors.name ? 'field-error' : ''}
                />
                {errors.name ? <small>{errors.name}</small> : null}
              </label>

              <label>
                <span>E-mail</span>
                <input
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="voce@empresa.com"
                  className={errors.email ? 'field-error' : ''}
                />
                {errors.email ? <small>{errors.email}</small> : null}
              </label>

              <label>
                <span>Telefone</span>
                <input
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className={errors.phone ? 'field-error' : ''}
                />
                {errors.phone ? <small>{errors.phone}</small> : null}
              </label>

              <label>
                <span>Mensagem</span>
                <textarea
                  name="message"
                  rows="5"
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder="Conte brevemente sobre o projeto, a vaga ou o desafio."
                  className={errors.message ? 'field-error' : ''}
                />
                {errors.message ? <small>{errors.message}</small> : null}
              </label>

              <button className="btn btn-dark submit-btn" type="submit">
                Enviar mensagem
              </button>

              {submitted ? (
                <p className="success-note" role="status">
                  Mensagem validada com sucesso. Seu aplicativo de e-mail foi aberto para concluir
                  o envio da proposta de contato.
                </p>
              ) : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-layout">
          <a href="#top" className="back-to-top">
            <i className="bi bi-arrow-up" aria-hidden="true" />
            Voltar ao topo
          </a>
          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                aria-label={link.label}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <i className={`bi ${link.icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
          <p>Fabio Moreira da Cunha. Portfolio desenvolvido com React, Vite e Bootstrap.</p>
        </div>
      </footer>
    </div>
  );
}
