import { useState } from 'react';
import heroImage from '../screens/Fabio-portrait.png';

const contactEmail = 'fabiomoreiradacunha1@gmail.com';
const whatsAppUrl =
  'https://wa.me/5565996900584?text=Ol%C3%A1%2C%20Fabio!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.';

const navItems = [
  { href: '#about', label: 'Sobre mim' },
  { href: '#skills', label: 'Competencias' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contato' },
];

const serviceCards = [
  {
    icon: 'bi-window-stack',
    title: 'Interfaces com foco em resultado',
    text: 'Desenvolvo experiencias modernas, leves e responsivas para produtos digitais, paginas de conversao e ambientes internos.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Back-end com estrutura',
    text: 'Organizo APIs, integracoes e fluxos de dados para sustentar produtos escalaveis, consistentes e prontos para evoluir.',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Solucoes digitais completas',
    text: 'Conecto regra de negocio, design e implementacao para transformar necessidades reais em entregas funcionais.',
  },
];

const skillGroups = [
  {
    title: 'Tecnologias em uso',
    items: ['React', 'JavaScript', 'Bootstrap', 'HTML5', 'CSS3', 'Git'],
  },
  {
    title: 'Expansao de stack',
    items: ['Node.js', 'APIs REST', 'MySQL', 'MongoDB', 'TypeScript', 'UX aplicado'],
  },
  {
    title: 'Forma de trabalhar',
    items: ['Responsividade', 'Clean Code', 'Deploy', 'Versionamento', 'Prototipacao', 'Colaboracao'],
  },
];

const portfolioItems = [
  {
    title: 'Landing page de alta conversao',
    description: 'Pagina orientada a captacao de leads, com copy objetiva, hierarquia visual consistente e CTA estrategico.',
    tags: ['React', 'Bootstrap', 'UX'],
  },
  {
    title: 'Dashboard comercial',
    description: 'Painel para acompanhamento de vendas, indicadores e operacao, com foco em leitura rapida e manutencao simples.',
    tags: ['UI', 'Data Viz', 'Front-end'],
  },
  {
    title: 'Catalogo digital de servicos',
    description: 'Experiencia sob medida para apresentar servicos, cases e diferenciais competitivos com visual premium.',
    tags: ['Design System', 'Performance'],
  },
  {
    title: 'Formulario inteligente',
    description: 'Fluxo de contato com validacao clara, feedback imediato e estrutura pronta para integracao com back-end.',
    tags: ['Formularios', 'Validacao', 'Acessibilidade'],
  },
  {
    title: 'Portfolio pessoal',
    description: 'Projeto com secao hero marcante, vitrine de competencias e narrativa profissional objetiva.',
    tags: ['Branding', 'SPA', 'Responsive'],
  },
  {
    title: 'Experiencias sob demanda',
    description: 'Arquitetura front-end preparada para evoluir de landing page para produto completo quando necessario.',
    tags: ['Escalabilidade', 'Vite', 'Componentes'],
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
  const projectHighlights = [
    { value: '100%', label: 'foco em responsividade' },
    { value: '6', label: 'blocos estrategicos na pagina' },
    { value: '1', label: 'experiencia clara de ponta a ponta' },
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
              <h2>Codigo com clareza, visual com intencao e foco no que realmente precisa funcionar.</h2>
            </div>
            <div className="intro-text reveal-up delay-1">
              <p>
                Minha proposta e transformar necessidades de negocio em interfaces objetivas,
                organizadas e prontas para evoluir. Gosto de unir estrutura, boas praticas e uma
                apresentacao que transmita confianca desde o primeiro contato.
              </p>
              <a href="#about" className="text-link">
                Conheca minha forma de trabalhar
              </a>
            </div>
          </div>
          <div className="container stats-grid reveal-up delay-2">
            {projectHighlights.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section section-light" id="about">
          <div className="container">
            <SectionTitle
              eyebrow="Sobre mim"
              title="Apresentacao profissional objetiva, clara e orientada a valor."
              text="Este portfolio foi pensado para destacar repertorio tecnico, cuidado visual e prontidao para contribuir com equipes que valorizam entregas consistentes."
            />

            <div className="about-grid">
              <article className="about-story reveal-up">
                <h3>O que eu entrego</h3>
                <p>
                  Atuo no desenvolvimento de interfaces e experiencias web com atencao especial a
                  estrutura, legibilidade e manutencao. Busco solucoes que funcionem bem no presente
                  sem comprometer os proximos passos do produto.
                </p>
                <p>
                  Hoje estou em busca de oportunidades como Desenvolvedor Full Stack e quero
                  contribuir com projetos que valorizem qualidade, aprendizado continuo e
                  colaboracao real.
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
              eyebrow="Competencias"
              title="Ferramentas e capacidades organizadas para transformar ideias em entregas."
              text="Minha base tecnica combina front-end moderno, organizacao de interface, integracao com dados e atencao a experiencia final."
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
                title="Uma vitrine pensada para causar boa impressao e abrir boas conversas."
                text="Os cards abaixo representam tipos de projeto e desafios que posso ajudar a resolver, sempre com atencao a clareza, consistencia visual e manutencao."
                light
              />
            </div>
          </div>

          <div className="container portfolio-grid">
            {portfolioItems.map((item, index) => (
              <article className={`portfolio-card reveal-up delay-${index % 3}`} key={item.title}>
                <span className="portfolio-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="portfolio-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-light" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy reveal-up">
              <SectionTitle
                eyebrow="Contato"
                title="Vamos conversar sobre sua proxima oportunidade ou projeto?"
                text="Use o formulario para iniciar um contato profissional. Ao enviar, seu aplicativo de e-mail sera aberto com a mensagem estruturada para facilitar a continuidade da conversa."
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
                  Mensagem validada com sucesso. Seu aplicativo de e-mail foi aberto para concluir o envio da proposta de contato.
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
