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
- garantir boa experiencia em mobile, tablet e desktop.

## Progress

- [x] Auditar o estado inicial do repositorio e os assets disponiveis
- [x] Reescrever o ExecPlan com escopo tecnico, validacao e recuperacao
- [x] Criar a base do projeto React + Vite com dependencias de UI definidas
- [x] Estruturar assets, componentes e estilos globais da landing page
- [x] Implementar navbar fixa e hero principal com foto real do Fabio
- [x] Implementar secao de introducao escura com CTA e resumo profissional
- [x] Implementar secao About Me com narrativa profissional e cards de atuacao
- [x] Implementar secao Skills com grupos de tecnologias e icones
- [x] Implementar secao Portfolio com grade de projetos e destaque visual
- [x] Implementar secao Contact com formulario validado no cliente
- [x] Implementar footer, links sociais e navegacao de retorno ao topo
- [x] Aplicar responsividade e animacoes leves em todas as secoes
- [x] Atualizar README com instrucoes de execucao, build e customizacao
- [x] Executar validacoes finais e registrar resultados no plano

## Surprises & Discoveries

- O repositorio iniciou praticamente vazio: nao havia `package.json`, `src/` nem configuracao de build.
- A foto `screens/Fabio.jpg` e utilizavel como retrato principal do hero sem necessidade de geracao adicional.
- O arquivo foi originalmente salvo com acentuacao corrompida; a reescrita passara a usar ASCII para evitar problemas de encoding.
- A imagem `screens/Portfolio.png` tem mais de 5 MB; usar esse arquivo no bundle final prejudicaria a performance.
- O menu mobile do Bootstrap precisou ser controlado via React para evitar dependencia desnecessaria do bundle JS do Bootstrap.

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

## Outcomes & Retrospective

Entregas concluidas:

- projeto React + Vite configurado do zero;
- landing page de pagina unica implementada com Hero, Intro, About, Skills, Portfolio, Contact e Footer;
- uso da foto real do Fabio no hero principal;
- layout responsivo com identidade visual inspirada na referencia;
- formulario com validacao client-side e feedback visual;
- README criado com setup, scripts e pontos de customizacao.

Validacoes executadas:

- `npm install` concluido com sucesso;
- `npm run build` concluido com sucesso apos a implementacao;
- `npm run build` executado novamente apos refinamento de performance e concluido com sucesso.

Proximas evolucoes possiveis:

- conectar o formulario a uma API, e-mail ou servico de automacao;
- substituir os links sociais placeholder por URLs reais do Fabio;
- adicionar projetos reais com links de demo e repositorio.

## Context and Orientation

Estado inicial:

- projeto sem app React criado;
- arquivos de referencia presentes em `screens/Portfolio.png` e `screens/Fabio.jpg`;
- `README.md` existente, mas ainda vazio para fins praticos.

Diretrizes visuais extraidas da referencia:

- topo e hero sobre fundo preto;
- painel claro inclinado no hero com tipografia forte;
- navegacao minimalista e compacta;
- secoes alternando fundo claro e escuro;
- portfolio com imagem de apoio e cards em grade;
- formulario de contato com estilo minimalista.

Conteudo base a utilizar:

- Nome: Fabio Moreira da Cunha
- Titulo: Desenvolvedor Full Stack
- Objetivo atual: buscando vagas de Desenvolvedor Full Stack
- Proposta de valor: vende solucoes digitais

## Plan of Work

1. Criar a infraestrutura minima do app com Vite, React e dependencias visuais.
2. Montar a arquitetura da landing em componentes e dados locais reutilizaveis.
3. Implementar cada secao principal alinhada a referencia, mas adaptada ao conteudo do Fabio.
4. Ajustar experiencia responsiva, acessibilidade basica e animacoes discretas.
5. Validar build/lint visualmente pelo codigo e registrar tudo no plano e no README.

## Concrete Steps

1. Criar `package.json`, configuracao do Vite e ponto de entrada React.
2. Instalar `react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `bootstrap` e `bootstrap-icons`.
3. Criar `index.html`, `src/main.jsx`, `src/App.jsx` e folhas de estilo.
4. Importar a imagem `Fabio.jpg` no hero e usar `Portfolio.png` como referencia de composicao.
5. Construir componentes/sections para Hero, Intro, About, Skills, Portfolio, Contact e Footer.
6. Definir arrays de dados para skills, servicos, projetos e links sociais.
7. Refinar layout com grid responsivo, espacamentos, tipografia e estados hover/focus.
8. Atualizar `README.md` com setup, scripts e visao geral da estrutura.
9. Rodar validacoes (`npm run build`) e registrar os resultados neste documento.

## Validation and Acceptance

Criticos de aceitacao:

- a aplicacao deve iniciar via Vite sem erros de compilacao;
- `npm run build` deve concluir com sucesso;
- a pagina deve conter Hero, About, Skills, Portfolio, Contact e Footer;
- a foto do Fabio deve aparecer no hero principal;
- a navegacao deve levar para as secoes por ancora;
- o layout deve se adaptar para mobile, tablet e desktop apenas com CSS responsivo;
- o README deve explicar como instalar, executar e gerar build.

Evidencias esperadas:

- arquivos do projeto React criados;
- plano com todos os itens de progresso marcados ao final;
- registro de validacao preenchido em `Outcomes & Retrospective` e/ou `Surprises & Discoveries`.
- `README.md` criado e preenchido com instrucoes praticas.

## Idempotence and Recovery

- Se a instalacao de dependencias falhar, repetir `npm install` apos corrigir conectividade/permissoes.
- Se algum arquivo estrutural ja existir, atualizar seu conteudo em vez de duplicar componentes.
- Se o build falhar, corrigir erros de importacao/JSX/CSS e rerodar a validacao antes de encerrar.
- Se houver divergencia visual relevante com a referencia, priorizar manter a hierarquia visual e a responsividade.

## Artifacts and Notes

Assets locais obrigatorios:

- `screens/Fabio.jpg` para retrato principal;
- `screens/Portfolio.png` como guia visual de composicao.

Direcao de design:

- minimalista;
- preto, branco e cinza como base;
- destaque pontual com cinza quente e sombra suave;
- tipografia forte com espacos amplos;
- animacoes discretas de entrada e hover.

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
