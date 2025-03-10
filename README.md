
# BiblioTech
Seu sistema de bibliotecas!

## 1. Estratégias de Desenvolvimento
Para garantir um desenvolvimento eficiente e organizado, adotaremos as seguintes estratégias:

- **Gerenciamento de Projeto:** Utilizaremos o **JIRA** para planejar, acompanhar e documentar tarefas, facilitando a colaboração e a transparência entre os membros da equipe.
  ## Link do JIRA: https://anamilchert.atlassian.net/jira/software/projects/DW21/boards/5
- **Versionamento de Código:** O código será versionado utilizando **Git**, armazenado em um repositório para controle de mudanças e colaboração.
- **Deploys Semanais:** Realizaremos **deploys semanais**, garantindo que novas funcionalidades e correções de bugs sejam entregues de forma constante e segura.

## 2. Arquitetura do Sistema
O **BiblioTech** adotará uma **arquitetura monolítica**, na qual o frontend e backend estarão integrados em um único projeto. Essa escolha se deve a:

**Simplicidade na Implementação:** Um único repositório facilita o desenvolvimento e a manutenção.  
**Menor Complexidade Inicial:** Não há necessidade de gerenciar múltiplos serviços e comunicação entre eles.  
**Facilidade de Deploy:** Apenas um ponto de implantação, reduzindo o tempo de configuração.  


## 3. Tecnologias Utilizadas e Justificativas

### Frontend:
- **React**: Biblioteca JavaScript para criação de interfaces dinâmicas e reativas, garantindo uma experiência fluida para o usuário.
- **JavaScript**: Linguagem principal do frontend, amplamente utilizada e compatível com React.

### Backend:
- **Node.js**: Ambiente de execução assíncrono e escalável, ideal para aplicações web modernas.
- **Express.js**: Framework minimalista para Node.js, que simplifica a criação de APIs robustas e eficientes.

### Banco de Dados:
- **MongoDB**: Banco de dados NoSQL baseado em documentos, flexível para armazenar informações de livros, usuários e transações.

## 4. Requisitos Funcionais

- **Cadastro de novos livros:** O sistema deve permitir o cadastro de livros com informações como título, autor, gênero e ano de publicação.
- **Listagem de todos os livros:** O sistema deve exibir uma lista de todos os livros cadastrados, com informações detalhadas.
- **Edição das informações de um livro:** O sistema deve permitir a edição das informações de um livro já cadastrado, como título, autor e status de disponibilidade.
- **Exclusão de um livro:** O sistema deve permitir a exclusão de um livro do banco de dados.
- **Indicar se o livro está disponível ou não:** O sistema deve mostrar se o livro está disponível para empréstimo ou já foi emprestado.
- **Registrar empréstimo para usuários:** O sistema deve registrar quando um usuário realiza o empréstimo de um livro.
- **Impedir empréstimo de livros já emprestados:** O sistema deve impedir que um livro seja emprestado novamente enquanto não for devolvido.
- **Registro de devolução:** O sistema deve permitir registrar quando um livro é devolvido.
- **Atualizar o status do livro:** O sistema deve atualizar o status de um livro (disponível/emprestado) após a devolução.

Essas funcionalidades garantirão o controle adequado de livros e empréstimos, permitindo uma gestão eficiente da biblioteca.

## 5. Requisitos Não Funcionais

- **Desempenho:**  
  O sistema deve ser capaz de processar e exibir informações de livros e registros de empréstimos em tempo real, com um tempo de resposta inferior a 2 segundos para qualquer ação do usuário.
- **Escalabilidade:**  
  O sistema deve ser capaz de crescer e se adaptar à medida que o número de livros e usuários aumenta. A arquitetura deve permitir a adição de novos recursos sem comprometer a performance.
- **Segurança:**  
  O sistema deve garantir a segurança dos dados do usuário e dos livros. Senhas devem ser armazenadas de forma segura utilizando criptografia (exemplo: hashing com bcrypt), e a comunicação entre o cliente e o servidor deve ser realizada de forma segura utilizando HTTPS.
- **Usabilidade:**  
  A interface do sistema deve ser intuitiva e fácil de usar, com uma navegação clara e design responsivo que se adapte a diferentes dispositivos (desktop e mobile).


  por Ana Luisa Milchert
