# Landing Page Portfolio

Portfolio pessoal desenvolvido com React, Vite, Bootstrap e Bootstrap Icons para apresentar Fabio Moreira da Cunha como Desenvolvedor Full Stack.

## Visao geral

O projeto entrega uma landing page de pagina unica com:

- hero principal com foto real e CTAs;
- secoes de resumo profissional, About Me, Skills, Portfolio e Contact;
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
- Substitua os links sociais do array `socialLinks` em `src/App.jsx`.
- Edite o primeiro item do array `portfolioItems` em `src/App.jsx` para trocar imagem, titulo, descricao, tags e link do case principal.
- Ajuste cores, espacamentos e animacoes em `src/styles.css`.
- Caso queira integrar o formulario, conecte o `handleSubmit` a uma API, servico de e-mail ou automacao.

## Validacao executada

- `npm run build` executado com sucesso em 20 de maio de 2026.

## Observacoes

- `screens/Fabio.jpg` e usado como imagem principal do hero.
- `screens/Leads.png` e usado como imagem do case principal da secao Portfolio.
- `screens/Portfolio.png` foi mantido como referencia visual de design e nao e enviado no bundle final para evitar peso excessivo.
