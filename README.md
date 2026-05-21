# Landing Page Portfolio

Portfolio pessoal desenvolvido com React, Vite, Bootstrap e Bootstrap Icons para apresentar Fabio Moreira da Cunha como Desenvolvedor Full Stack.

## Visao geral

O projeto entrega uma landing page de pagina unica com:

- hero principal com foto real e CTAs;
- secao de resumo profissional com titulo tecnico e tres cards de especialidade;
- secao de portfolio com card principal em destaque no topo e malha secundaria equilibrada abaixo em CSS Grid;
- secoes de About Me, Skills, Portfolio e Contact;
- secao "Sobre mim" com cards de servico organizados para fechamento visual mais consistente;
- secao de competencias com foco explicito em tecnologias usadas para aplicacoes full stack modernas;
- card principal de portfolio com imagem clicavel para um case real;
- formulario com validacao no cliente;
- layout responsivo para mobile, tablet e desktop;
- identidade visual inspirada na referencia da pasta `screens`.

## Tecnologias

- React 18
- Vite 5
- Bootstrap 5
- Bootstrap Icons
- CSS customizado

## Como executar

### 1. Instalar dependencias

```bash
npm install
```

### 2. Rodar em desenvolvimento

```bash
npm run dev
```

### 3. Gerar build de producao

```bash
npm run build
```

### 4. Visualizar o build localmente

```bash
npm run preview
```

## Estrutura principal

```text
.
|-- screens/
|   |-- Fabio.jpg
|   |-- Leads.png
|   `-- Portfolio.png
|-- src/
|   |-- App.jsx
|   |-- main.jsx
|   `-- styles.css
|-- index.html
|-- package.json
`-- vite.config.js
```

## Personalizacao rapida

- Atualize os textos principais em `src/App.jsx`.
- Ajuste a copy da secao "Sobre mim" no `SectionTitle` do bloco `about-section` em `src/App.jsx`.
- Ajuste a copy da secao "Competencias" no `SectionTitle` do bloco `skills-section` em `src/App.jsx`.
- Ajuste a copy da secao "Contato" no `SectionTitle` do bloco `contact-section` em `src/App.jsx`.
- Edite o array `summaryCards` em `src/App.jsx` para trocar os tres cards do resumo profissional.
- Substitua os links sociais do array `socialLinks` em `src/App.jsx`.
- Edite o array `portfolioItems` em `src/App.jsx` para trocar imagem, titulo, descricao, tags, link e posicao visual dos cards do portfolio.
- Ajuste cores, espacamentos, animacoes, a composicao da grid do portfolio e o fechamento visual dos cards da secao "Sobre mim" em `src/styles.css`.
- Caso queira integrar o formulario, conecte o `handleSubmit` a uma API, servico de e-mail ou automacao.

## Validacao executada

- `npm run build` executado com sucesso em 21 de maio de 2026.

## Observacoes

- `screens/Fabio.jpg` e usado como imagem principal do hero.
- `screens/Leads.png` e usado como imagem do case principal da secao Portfolio.
- `screens/Portfolio.png` foi mantido como referencia visual de design e nao e enviado no bundle final para evitar peso excessivo.
- O bloco de resumo profissional agora usa cards textuais de especialidade em vez de indicadores numericos.
- A secao Portfolio usa `grid-template-areas` para destacar o case principal no topo e manter conteudo interno visivel apenas no card principal.
