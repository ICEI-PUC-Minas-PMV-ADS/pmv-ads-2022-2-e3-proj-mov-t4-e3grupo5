
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A Metodologia consiste nas definições da ferramenta utilizada pelo grupo tanto para a manutenção dos códigos e outros artefatos, como para a associação e compreensão do time no cumprimento das tarefas. Portanto, é necessário definir os objetivos, para que as partes envolvidas compreendam os padrões preestabelecidos a fim de garantir que o projeto seja desenvolvido de forma eficiente.

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue

Ambiente|Plataforma|Link de Acesso
|:--------|:----------:|:--------------:|
|Repositório|GitHub|  [GitHub](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t4-e3grupo5)|
|Documentos do projeto|GitHubDocs| [GitHubDocs](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t4-e3grupo5/tree/main/docs)|
|Projeto de Interface e  Wireframes|Figma|Figma |[GitHu](Figma | Ferramenta de colaboração e design de UI/UX rápida e avançada)|
|Gerenciamento do Projeto|GitHub| [Trello](https://trello.com/b/rxMEyT0C/fut) |

## Gestão de Código Fonte

Para gestão do código fonte do software desenvolvido pela equipe, o grupo utiliza um processo baseado no Git Flow abordado por Vietro (2015), mostrado na Figura a seguir. Desta forma, todas as manutenções no código são realizadas em branches separados, identificados como Hotfix, Release, Develop e Feature. Uma explicação rápida sobre este processo é apresentada no vídeo "[The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)".

![Fluxo de Controle do Código Fonte](https://media.discordapp.net/attachments/876909612006256694/1028778210319679548/unknown.png)

- `“Hotfix”` ou “maintenance branch: usado para correções rápidas de erros;
- `Release` branch: é a branch para entrega, desenvolvida quando as funcionalidades do ciclo estão prontas. Deve ser integrada com as branches Master e Develop;
- `Develop`: é o branch principal para o desenvolvimento, também utilizado para guardar o histórico do projeto. É neste branch que são integradas todas as novas funcionalidades (feature branches);
- `Feature` branch: ao iniciar o desenvolvimento de uma nova funcionalidade, esta deve ter seu próprio branch que, posteriormente, serão integradas no branch develop.
## Controle de Versão

A ferramenta de controle de versão utilizada será o Git. Para hospedagem do repositório, será utilizado o GitHub.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

> **Links Úteis**:
>
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Gerenciamento de Projeto

A equipe irá utilizar o framework Scrum, para que seja possível ter entregas que geram mais valor ao cliente, validando a hipótese enquanto é desenvolvida. Assim também, conseguimos obter um melhor gerenciamento da equipe de acordo com histórias passadas.

A equipe está organizada da seguinte maneira:

- Scrum Master: Gabriel Souza Castro
- Product Owner: Julia Berto Rosa
- Equipe de Desenvolvimento:
  - Raíssa Araújo Oliveira Queiroz Lopes
  - Hector Florenca da Silva Mendes
  - Jonatas Tonin Coelho

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o quadro kanban do Trello.

O quadro está estruturado em: <br>
**Recursos** - Ferramentas, links e softwares usados no projeto <br>
**Backlog** - Pilha do que deve ser desenvolvido <br>
**To do** - Pilha do que deve ser desenvolvido prioritariamente <br>
**Doing** - Pilha do que está sendo desenvolvido naquela sprint <br>
**Test** - Pilha do que está sendo testado <br>
**Code Review** - Pilha do que está passando por Code review dos desenvolvedores <br>
**Done** - Pilha do que foi concluído <br>
**Locked** - Pilha do que se encontra bloqueado

![](https://media.discordapp.net/attachments/876909612006256694/1028774646566354954/unknown.png?width=957&height=428)

## Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código: Visual Studio Code.
- Ferramentas de comunicação: Microsoft Teams, Whatsapp.
- Ferramentas para criação de diagramas: BPMN.io.
- Ferramentas de desenho de tela (_wireframing_): Figma.

O editor de código foi escolhido porque ele possui uma integração com o
sistema de versão. As ferramentas de comunicação utilizadas são acessíveis por já terem sido usadas por todos anteriormente, além de possuir tudo que é necessário para a comunicação, como: chamadas de vídeo (com opção de compartilhamento de tela) e aúdio, mensagens escritas via chat e compartilhamento de fotos. Escolhemos o BPMN.io pois ele tem recursos interessantes e é mais prático e, por fim, para criar wireframings utilizamos o Figma por ser uma ferramenta gratuita e que permite acesso por mais de um usuário.

<!-- Descreva aqui a metodologia de trabalho do grupo para atacar o problema. Definições sobre os ambiente de trabalho utilizados pela  equipe para desenvolver o projeto. Abrange a relação de ambientes utilizados, a estrutura para gestão do código fonte, além da definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times). -->

<!-- ## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito deverá ser apresentada em uma tabela que especifica que detalha Ambiente, Plataforma e Link de Acesso. 
Nota: Vide documento modelo do estudo de caso "Portal de Notícias" e defina também os ambientes e frameworks que serão utilizados no desenvolvimento de aplicações móveis.

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.

> **Links Úteis**:
> - [Microfundamento: Gerência de Configuração](https://pucminas.instructure.com/courses/87878/)
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Gerenciamento de Projeto

### Divisão de Papéis

Apresente a divisão de papéis entre os membros do grupo.

Exemplificação: A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A equipe está organizada da seguinte maneira:
- Scrum Master: Felipe Domingos;
- Product Owner: Rommel Carneiro;
- Equipe de Desenvolvimento: Pedro Penna, Pedro Ivo, Rodrigo Richard;
- Equipe de Design: Simone Nogueira.

> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles)

### Processo

Coloque  informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo deverá fazer uso do recurso de gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
 
> **Links Úteis**:
> - [Planejamento e Gestáo Ágil de Projetos](https://pucminas.instructure.com/courses/87878/pages/unidade-2-tema-2-utilizacao-de-ferramentas-para-controle-de-versoes-de-software)
> - [Sobre quadros de projeto](https://docs.github.com/pt/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)
 -->
