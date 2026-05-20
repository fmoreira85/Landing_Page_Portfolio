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
- [x] Botao de fale comigo direciona para o WhatsApp 65 99690-0584
- [x] O formulario de contato direciona a mensagem para o e-mail `fabiomoreiradacunha1@gmail.com`
- [x] Normalizar textos profissionais e corrigir inconsistencias de encoding no front-end

## Surprises & Discoveries

- O repositorio iniciou praticamente vazio: nao havia `package.json`, `src/` nem configuracao de build.
- A foto `screens/Fabio.jpg` era utilizavel como retrato principal do hero sem necessidade de geracao adicional.
- O plano foi originalmente mantido em ASCII para evitar problemas de encoding no Windows.
- A imagem `screens/Portfolio.png` tem mais de 5 MB; usar esse arquivo no bundle final prejudicaria a performance.
- O menu mobile do Bootstrap precisou ser controlado via React para evitar dependencia desnecessaria do bundle JS do Bootstrap.
- Durante a revisao do `src/App.jsx`, os textos em portugues estavam corrompidos por encoding mesmo apos o refinamento de copy; foi necessario regravar o arquivo para restaurar a acentuacao corretamente.
- O formulario de contato ainda nao possui backend; a implementacao viavel neste escopo e abrir o cliente de e-mail do usuario com assunto e corpo preenchidos.

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
- Decisao: regravar integralmente `src/App.jsx` apos a descoberta de encoding corrompido.
  Motivo: um patch incremental sobre o arquivo atual seria menos confiavel do que restaurar o conteudo consistente em uma unica gravacao.

## Outcomes & Retrospective

Entregas concluidas:

- projeto React + Vite configurado do zero;
- landing page de pagina unica implementada com Hero, Intro, About, Skills, Portfolio, Contact e Footer;
- hero atualizado com retrato atual do Fabio;
- CTA principal secundario direcionando para WhatsApp;
- link de e-mail e formulario preparados para abrir o cliente de e-mail com os dados preenchidos;
- textos revisados para tom mais profissional e acentuacao correta;
- layout responsivo com identidade visual inspirada na referencia;
- formulario com validacao client-side e feedback visual;
- README criado com setup, scripts e pontos de customizacao.

Validacoes executadas:

- `npm install` concluido com sucesso;
- `npm run build` concluido com sucesso apos a implementacao inicial;
- `npm run build` executado novamente apos refinamento de performance e concluido com sucesso;
- `npm run build` executado apos a troca da foto do hero e concluido com sucesso;
- `npm run build` executado apos os ajustes de copy e link de e-mail e concluido com sucesso;
- `npm run build` executado apos WhatsApp, `mailto` no formulario e correcao de encoding, concluido com sucesso.

Proximas evolucoes possiveis:

- conectar o formulario a uma API, e-mail transacional ou servico de automacao para envio sem depender do cliente local;
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
- WhatsApp: 65 99690-0584
- E-mail: fabiomoreiradacunha1@gmail.com

## Plan of Work

1. Criar a infraestrutura minima do app com Vite, React e dependencias visuais.
2. Montar a arquitetura da landing em componentes e dados locais reutilizaveis.
3. Implementar cada secao principal alinhada a referencia, mas adaptada ao conteudo do Fabio.
4. Ajustar experiencia responsiva, acessibilidade basica e animacoes discretas.
5. Validar build/lint visualmente pelo codigo e registrar tudo no plano e no README.
6. Fechar os pendentes de contato com ligacao para WhatsApp e encaminhamento por e-mail no front-end.

## Concrete Steps

1. Criar `package.json`, configuracao do Vite e ponto de entrada React.
2. Instalar `react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `bootstrap` e `bootstrap-icons`.
3. Criar `index.html`, `src/main.jsx`, `src/App.jsx` e folhas de estilo.
4. Importar a imagem principal do Fabio no hero e usar `Portfolio.png` como referencia de composicao.
5. Construir componentes/sections para Hero, Intro, About, Skills, Portfolio, Contact e Footer.
6. Definir arrays de dados para skills, servicos, projetos e links sociais.
7. Refinar layout com grid responsivo, espacamentos, tipografia e estados hover/focus.
8. Atualizar `README.md` com setup, scripts e visao geral da estrutura.
9. Fechar os fluxos de contato com `wa.me` e `mailto`.
10. Rodar validacoes (`npm run build`) e registrar os resultados neste documento.

## Validation and Acceptance

Criticos de aceitacao:

- a aplicacao deve iniciar via Vite sem erros de compilacao;
- `npm run build` deve concluir com sucesso;
- a pagina deve conter Hero, About, Skills, Portfolio, Contact e Footer;
- a foto do Fabio deve aparecer no hero principal;
- a navegacao deve levar para as secoes por ancora;
- o layout deve se adaptar para mobile, tablet e desktop apenas com CSS responsivo;
- o README deve explicar como instalar, executar e gerar build;
- o CTA "Falar comigo" deve abrir o WhatsApp do Fabio;
- o formulario de contato deve encaminhar o usuario para o e-mail do Fabio com os dados preenchidos.

Evidencias esperadas:

- arquivos do projeto React criados;
- plano com todos os itens de progresso marcados ao final;
- registro de validacao preenchido em `Outcomes & Retrospective` e/ou `Surprises & Discoveries`;
- `README.md` criado e preenchido com instrucoes praticas;
- `src/App.jsx` configurado com `wa.me` e `mailto`.

## Idempotence and Recovery

- Se a instalacao de dependencias falhar, repetir `npm install` apos corrigir conectividade/permissoes.
- Se algum arquivo estrutural ja existir, atualizar seu conteudo em vez de duplicar componentes.
- Se o build falhar, corrigir erros de importacao/JSX/CSS e rerodar a validacao antes de encerrar.
- Se houver divergencia visual relevante com a referencia, priorizar manter a hierarquia visual e a responsividade.
- Se o cliente de e-mail nao estiver configurado no dispositivo do visitante, manter o link direto `mailto:` como fallback explicito e considerar integracao futura com backend.

## Artifacts and Notes

Assets locais obrigatorios:

- `screens/Fabio-portrait.png` como retrato principal do hero;
- `screens/Portfolio.png` como guia visual de composicao.

Arquivos alterados nesta etapa:

- `src/App.jsx`
- `PLANS.md`

Comandos executados nesta etapa:

- `Get-Content "c:\\Users\\fabio\\Landing_Page_Portfolio\\PLANS.md"`
- `git status --short`
- `git log --oneline -5`
- `Get-Content "c:\\Users\\fabio\\Landing_Page_Portfolio\\src\\App.jsx"`
- `npm run build`

Observacoes de implementacao:

- o CTA "Falar comigo" usa `wa.me` com mensagem inicial;
- o envio do formulario permanece front-end only e abre o cliente de e-mail local do visitante;
- o arquivo `src/App.jsx` foi regravado para remover texto corrompido por encoding e consolidar os ajustes de copy.

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

Interfaces externas em uso:

- `https://wa.me/5565996900584`
- `mailto:fabiomoreiradacunha1@gmail.com`
