# Landing Page Portfolio
Este ExecPlan e um documento vivo. Ele sera atualizado conforme a implementacao avanca.

## Purpose / Big Picture
Construir um portfolio web moderno, responsivo e visualmente forte para Fabio Moreira da Cunha, inspirado na referencia da pasta `screens`, usando React com Vite, Bootstrap e Bootstrap Icons.

Objetivos do produto:

- apresentar Fabio de forma profissional;
- destacar habilidades e servicos;
- mostrar projetos em formato visual;
- oferecer uma secao de contato funcional no front-end;
- reproduzir a atmosfera minimalista da referencia com hero assimetrico, secoes bem marcadas e contraste preto/branco/cinza;
- garantir boa experiencia em mobile, tablet e desktop;
- destacar o projeto de CRM/gestao de leads como case principal dentro da secao Portfolio.

## Progress

- [x] Auditar o estado atual do repositorio, assets e build do projeto
- [x] Estruturar a SPA em React + Vite com Hero, Intro, About, Skills, Portfolio, Contact e Footer
- [x] Configurar CTA de WhatsApp e fluxo de `mailto` no formulario
- [x] Criar e manter `README.md` com setup, scripts e pontos de customizacao
- [x] Corrigir a copy geral do front-end e estabilizar o arquivo `src/App.jsx`
- [x] Refinar a copy profissional da secao de contato
- [x] Reescrever este ExecPlan com tarefas tecnicas, validacoes e criterios verificaveis
- [x] Atualizar o titulo principal do `SectionTitle` da secao Portfolio para destacar projetos e servicos
- [x] Atualizar os dados do primeiro `portfolio-card` para o case de SDR CRM com IA
- [x] Importar e exibir `screens/Leads.png` no primeiro card do portfolio
- [x] Tornar a imagem do primeiro card clicavel para `https://superb-cranachan-294219.netlify.app`
- [x] Ajustar o CSS do portfolio para suportar media responsiva dentro do card sem quebrar o grid
- [x] Atualizar o README com o novo asset e a nova personalizacao do card principal
- [x] Executar validacao final com `npm run build`
- [x] Atualizar `PLANS.md` com resultados finais, decisoes, descobertas e artefatos desta rodada

## Surprises & Discoveries

- O repositorio iniciou praticamente vazio: nao havia `package.json`, `src/` nem configuracao de build.
- A foto `screens/Fabio.jpg` era utilizavel como retrato principal do hero sem necessidade de geracao adicional.
- O plano foi originalmente mantido em ASCII para evitar problemas de encoding no Windows.
- A imagem `screens/Portfolio.png` tem mais de 5 MB; usar esse arquivo no bundle final prejudicaria a performance.
- O menu mobile do Bootstrap precisou ser controlado via React para evitar dependencia desnecessaria do bundle JS do Bootstrap.
- Durante revisoes anteriores, os textos em portugues chegaram a ficar corrompidos por encoding; isso exige cautela ao regravar `src/App.jsx`.
- O formulario de contato ainda nao possui backend; a implementacao viavel neste escopo continua sendo abrir o cliente de e-mail do usuario com assunto e corpo preenchidos.
- Surgiu um novo asset local `screens/Leads.png`, adequado para representar visualmente o principal case de portfolio.
- As novas instrucoes de negocio para Portfolio foram registradas no proprio `PLANS.md` por uma pessoa nao tecnica, com trechos de encoding corrompido; foi necessario traduzi-las para tarefas tecnicas claras.
- O novo asset `screens/Leads.png` entrou no bundle final com cerca de 1,5 MB, o que funciona para esta rodada, mas merece futura otimizacao se a pagina for publicada com foco mais agressivo em performance.

## Decision Log

- Decisao: usar uma SPA simples em React com uma unica pagina e navegacao por anchors em vez de React Router.
  Motivo: o escopo e uma landing page unica; isso reduz complexidade e acelera a entrega.
- Decisao: usar Bootstrap apenas como base de grid/utilitarios e criar identidade visual propria via CSS customizado.
  Motivo: a referencia pede um layout mais autoral do que o visual padrao do Bootstrap.
- Decisao: usar dados estaticos locais para portfolio, skills e servicos.
  Motivo: nao existe backend no escopo e o objetivo e uma landing page demonstrativa.
- Decisao: manter `Portfolio.png` apenas como referencia de design e nao como asset renderizado.
  Motivo: o arquivo pesa mais de 5 MB e nao agrega valor suficiente para justificar esse custo na versao publicada.
- Decisao: validar o formulario apenas no cliente e exibir mensagem de sucesso local.
  Motivo: o escopo nao inclui backend; a validacao ja deixa o fluxo pronto para integracao futura.
- Decisao: direcionar o CTA "Falar comigo" para `https://wa.me/5565996900584` com mensagem inicial predefinida.
  Motivo: atende ao pedido do usuario sem depender de backend e funciona bem em mobile e desktop.
- Decisao: fazer o formulario abrir `mailto:fabiomoreiradacunha1@gmail.com` com assunto e corpo preenchidos.
  Motivo: e a opcao funcional mais completa dentro do escopo front-end atual, preservando os dados digitados pelo visitante.
- Decisao: modelar o primeiro card do portfolio com campos opcionais de imagem e link externo.
  Motivo: permite destacar o case principal sem transformar todos os cards em componentes especiais.
- Decisao: deixar apenas a imagem do case principal como elemento clicavel.
  Motivo: atende ao pedido funcional sem alterar o comportamento dos demais cards nem introduzir links acidentais em toda a superficie do card.
- Decisao: manter o titulo da secao Portfolio como `Meus Projetos e Servicos`, preservando o eyebrow `Portfólio`.
  Motivo: reforca a mensagem comercial solicitada sem perder a ancora conceitual da secao.
- Decisao: documentar no README a personalizacao do card principal e o novo asset `Leads.png`.
  Motivo: reduz friccao para futuras alteracoes de portfolio e mantem a documentacao coerente com o codigo entregue.

## Outcomes & Retrospective

Entregas concluidas ate o momento:

- projeto React + Vite configurado do zero;
- landing page de pagina unica implementada com Hero, Intro, About, Skills, Portfolio, Contact e Footer;
- hero atualizado com retrato atual do Fabio;
- CTA principal secundario direcionando para WhatsApp;
- link de e-mail e formulario preparados para abrir o cliente de e-mail com os dados preenchidos;
- textos revisados para tom mais profissional;
- secao de contato refinada com copy mais profissional para aproximacao comercial e oportunidades;
- secao Portfolio atualizada com titulo mais comercial;
- primeiro card do portfolio transformado em case principal com imagem, link externo e stack atualizada;
- layout responsivo com identidade visual inspirada na referencia;
- formulario com validacao client-side e feedback visual;
- README criado com setup, scripts e pontos de customizacao;
- README atualizado para refletir o novo asset e a customizacao do card principal.

Validacoes executadas ate o momento:

- `npm install` concluido com sucesso;
- `npm run build` concluido com sucesso apos a implementacao inicial;
- `npm run build` executado novamente apos refinamentos de copy e concluido com sucesso;
- `npm run build` executado apos ajustes de contato e concluido com sucesso.
- `npm run build` executado apos a atualizacao do card principal do portfolio e concluido com sucesso.

Pendencias desta rodada:

- nenhuma; todos os itens do `Progress` foram concluidos.

## Context and Orientation

Estado atual observado:

- projeto React funcional em `src/` com layout responsivo ja implementado;
- `README.md` presente e utilizavel;
- asset novo `screens/Leads.png` disponivel para uso no primeiro case do portfolio;
- `PLANS.md` recebeu instrucoes de negocio adicionais no fim da secao de contexto.

Diretrizes visuais relevantes:

- topo e hero sobre fundo preto;
- painel claro inclinado no hero com tipografia forte;
- navegacao minimalista e compacta;
- secoes alternando fundo claro e escuro;
- portfolio com destaque visual e cards em grade;
- formulario de contato com estilo minimalista.

Conteudo base a utilizar:

- Nome: Fabio Moreira da Cunha
- Titulo: Desenvolvedor Full Stack
- Objetivo atual: buscando vagas de Desenvolvedor Full Stack
- Proposta de valor: vende solucoes digitais
- WhatsApp: 65 99690-0584
- E-mail: fabiomoreiradacunha1@gmail.com
- Titulo do portfolio: `Meus Projetos e Servicos`
- Case principal:
  - titulo: `SDR CRM | Plataforma de Gestao de Leads com IA`
  - descricao: `CRM full-stack para pre-vendas com leads, kanban, campanhas, metricas e IA, usando React, Node, Supabase.`
  - tags: `Node.js`, `PostgreSQL`, `Docker`, `API`
  - imagem: `screens/Leads.png`
  - link: `https://superb-cranachan-294219.netlify.app`

## Plan of Work

1. Reestruturar o ExecPlan para refletir o estado atual do projeto e tornar as proximas tarefas verificaveis.
2. Ajustar a camada de dados do portfolio em `src/App.jsx` para comportar um case principal com imagem e link.
3. Atualizar a secao Portfolio para refletir a nova mensagem comercial e o novo case principal.
4. Ajustar `src/styles.css` para que o card com imagem mantenha a mesma linguagem visual e permaneça responsivo.
5. Atualizar `README.md` com o novo asset e a forma de customizar o card principal.
6. Rodar `npm run build`, validar o resultado e registrar tudo no plano.

## Concrete Steps

1. Atualizar o `Progress` deste ExecPlan com tarefas atômicas e verificaveis.
2. Importar `screens/Leads.png` em `src/App.jsx`.
3. Estender o objeto do primeiro item de `portfolioItems` com `image` e `href`.
4. Alterar o `SectionTitle` do bloco Portfolio para `Meus Projetos e Servicos`.
5. Renderizar a imagem do primeiro card dentro de um link externo com `target="_blank"` e `rel="noreferrer"`.
6. Atualizar titulo, descricao e tags do primeiro card com o novo case.
7. Criar classes CSS para media do card: moldura, hover e comportamento responsivo.
8. Atualizar `README.md` para incluir `Leads.png` na estrutura e na personalizacao.
9. Executar `npm run build`.
10. Registrar validacoes, arquivos alterados, comandos usados e conclusoes em `PLANS.md`.

## Validation and Acceptance

Criticos de aceitacao:

- `npm run build` deve concluir com sucesso;
- a secao Portfolio deve exibir o titulo `Meus Projetos e Servicos`;
- o primeiro card deve mostrar a imagem `screens/Leads.png`;
- ao clicar na imagem do primeiro card, o link configurado deve apontar para `https://superb-cranachan-294219.netlify.app`;
- o primeiro card deve exibir o novo titulo, nova descricao e as tags `Node.js`, `PostgreSQL`, `Docker` e `API`;
- o layout deve permanecer responsivo sem sobreposicoes ou quebras obvias no grid do portfolio;
- `README.md` deve mencionar o novo asset e onde customizar o card principal;
- todos os itens de `Progress` devem estar marcados como concluidos ao encerrar.

Evidencias esperadas:

- `src/App.jsx` atualizado com o novo case principal;
- `src/styles.css` atualizado com classes para media no card;
- `README.md` atualizado;
- `PLANS.md` com progresso, descobertas, decisao e retrospective finais;
- `npm run build` executado com sucesso ao final.

## Idempotence and Recovery

- Se algum asset local nao for encontrado, revalidar a lista de arquivos em `screens/` antes de alterar importacoes.
- Se o build falhar apos alterar o card, revisar primeiro importacoes, JSX condicional e classes CSS novas.
- Se a imagem causar desequilibrio visual no grid, ajustar somente as classes do card principal em vez de refatorar toda a secao Portfolio.
- Se houver nova regressao de encoding no `App.jsx`, regravar o arquivo inteiro em UTF-8 consistente.
- Se o link externo precisar mudar depois, manter o dado no array `portfolioItems` para edicao simples e isolada.

## Artifacts and Notes

Assets locais relevantes:

- `screens/Fabio-portrait.png` como retrato principal do hero;
- `screens/Portfolio.png` como guia visual de composicao;
- `screens/Leads.png` como imagem do case principal do portfolio.

Arquivos previstos para alteracao nesta rodada:

- `src/App.jsx`
- `src/styles.css`
- `README.md`
- `PLANS.md`

Comandos ja executados nesta rodada:

- `Get-Content "c:\\Users\\fabio\\Landing_Page_Portfolio\\PLANS.md"`
- `Get-Content "c:\\Users\\fabio\\Landing_Page_Portfolio\\README.md"`
- `git status --short --branch`
- `git log --oneline -6`
- `rg --files .`
- `rg -n "portfolio-card|portfolio-grid|portfolio-banner|section-title|portfolio-tags|portfolio-index" src/styles.css -S`
- `npm run build`

Observacoes de implementacao:

- o primeiro card do portfolio recebera tratamento de destaque, mas sem transformar a grade inteira em um novo componente complexo;
- o arquivo `screens/Leads.png` esta atualmente nao rastreado no Git, mas pode ser referenciado normalmente pelo projeto local;
- o primeiro card passou a aceitar `image` e `href` no array `portfolioItems`;
- a imagem do case principal foi inserida acima do conteudo textual com hover discreto;
- o plano final registra os comandos adicionais e os resultados do build desta rodada.

## Interfaces and Dependencies

Stack alvo:

- JavaScript
- React
- Vite
- Bootstrap
- Bootstrap Icons
- Git
- GitHub

Dependencias previstas:

- `react`
- `react-dom`
- `bootstrap`
- `bootstrap-icons`
- `vite`
- `@vitejs/plugin-react`

Interfaces externas em uso:

- `https://wa.me/5565996900584`
- `mailto:fabiomoreiradacunha1@gmail.com`
- `https://superb-cranachan-294219.netlify.app`
