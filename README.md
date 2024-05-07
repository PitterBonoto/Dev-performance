# DOCUMENTAÇÃO FRONT-END - DevPerformance / Front-End

O DevPerformance nasceu com o objetivo de ser um organizador de tarefas, tem como regra procipal listar tarefas em 3 grandes pilares o de Saúde, Estudo e Lazer.

Cada pilar citado acima corresponde a um nicho específico da nossa plataforma, dentro de cada pilar é possível conseguir visualizar as tarefas apenas do pilar em questão bem como ao usuário que ela estará amarrada.

Ainda dentro dos Pilares temos videos / Textos referentes a cada assunto, deixando o entendimento do usuário mais completo, fazendo com que o usuario possa tirar o maximo de proveito e realmente aprender a ser perfomrmaticos nas tarefas do dia a dia.

### Tecnologias Utilizadas

Listado as tecnologias (linguagens, ferramentas, bibliotecas) utilizadas para elaborar o projeto. 

- [DevPerformance](https://github.com/PitterBonoto/project-hackton-react)
- [MongoDB (Atlas)](https://www.mongodb.com/)
- [React Web](https://pt-br.legacy.reactjs.org/)
- [Axios](https://axios-http.com/)
- [Styled-Components](https://styled-components.com/)
- [Yup](https://www.npmjs.com/package/yup)

## Dependências e Versões Necessárias

Listado as dependências necessárias para rodar o projeto e as versões utilizadas.

- axios: 1.6.8
- lucide-react: 0.364.0
- react: 18.2.0
- react-dom: 18.2.0
- react-modal: 3.16.1
- react-router-dom: 6.22.3
- react-scripts: 5.0.1
- react-toastify: 10.0.5
- styled-components: 6.1.8
- styled-react-modal: 3.1.1
- yup: 1.4.0

## Como rodar o projeto ✅

Para esse item, nós efetuamos o deploy do projeto colocamos nos server do mongoDB(atlas) (banco de dados), Netlify(front-end) e Vercel(back-end)

Para acessar base entrar no link abaixo:

### https://devperformance.netlify.app/

## 📌 (DevPerformance) - Informações importantes sobre a aplicação (exemplo) 📌

Um bom exemplo: se você estiver construindo uma API, liste as rotas da aplicação e quais serão os seus retornos. Isso facilita para quem vai consumir a API.

## ⚠️ Problemas enfrentados

No desenvolcimento do aplicativo enfrentamos varios problemas com relação a como traduzir para código aquilo que estavamos em mente vou citar alguns problemas que passamos abaixo:

1 - Construção de Modal
2 - Construção da barra de status das tarefas
3 - Construção do risco que determina quando a tarefa está concluida
4 - Acesso e atualização do status da tarefa vinculado ao banco de dados
5 - Filtrar tarefas pro usuários / categoria

### Problema 1:

Construção de Modal

- Como Solucinar: Foi criado os modais utilizando a dependência "react-modal", porém como foi utilizado styled components no projeto e era preciso editar classes internas do modal, a solução encontrada foi criar um arquivo de estilo css para estilizar essas classes.

### Problema 2:

Construção da barra de status das tarefas

- Como solucionar: Para a construção da barra de progresso, como não estava sendo usado nenhum componente pronto, foram criado duas div´s uma externa onde limita o tamanho da barra e uma interna que simula o progresso da mesma.Foi criado um função que faz a média das tarefas executadas e tranforma em porcentagem. Foi criado uma função com uma condicional que muda o width da div interna e o colore de acordo com a porcentagem do progresso (começando do vermelho até chegar ao verde que é 100%).

### Problema 3:

Construção do risco que determina quando a tarefa está concluida

- Como solucionar: para conseguir que a aplicação entendesse que estava querendo efetuar o risco foi ncessário a criação de um prop e na prop conseguir achar o status necessario de true ou false (clicado ou não clicado) e poder passar por prop para que o styled-components pudesse efetuar a mudança.

### Problema 4:

Acesso e atualização do status da tarefa vinculado ao banco de dados

- Como solucionar: a solução foi mais complexa aqui como eu já tinha a prop relaciona ao meu status, eu teria que efetuar a passagem dela para que a função pudesse entender e atualizar dentro do back-end, para conseguir que tudo fosse direciona para lá e funcionasse corretamente tive que criar uma função de alteração e nela criar uma lógica onde conforme o estado do componente ele faria ou não a alteração do status no banco fazendo a verificação de que se tivesse já marcado deveria desmarcar e caso não estivesse marcado deveria marcar.

### Problema 5:

Filtrar tarefas pro usuários

- Como solucionar: para conseguir fazer o procedimento do jeito que estava imaginando nesse caso foi necessário eu criar no back-end na estrutura do objeto o campo categoria para que dentro do front eu pudesse fazer o filtro e pegar apenas as tarefas daquele usuario em específico. No front-end o que precisei fazer foi criar uma variável e colocar um categoria nela para que quando fosse rodar o filtro dentro do código ele conseguisse identificar qual a tela que o usuario estava e filtrar apenas aquelas tarefas.

## ⏭️ Próximos passos

1. O objetivo futuramente é melhorar esse projeto, deixando ele ainda mais funcional, melhorar o seu código, a idéia é acrescentar um calendário para que quando a tarefa for agenda pelo usuario possa ter a possibilidade de alertas que e contagem de tempos dessas tarefas, por exemplo se definir uma tarefa com tempo de 90 dias o app ir fazendo essa conta e monstrando para o usuario o tempo restante e caso não seja cumprida a tarefa emitir algum alerta para o usuario do sistema dizendo que o tempo estimado da tarefa não foi cumprido.

2. Implementar a filtragem de tarefas de acordo com filtros específicos que o usuários desejar, deixando mais facil a interação da aplicação com o usuário.

3. Implementar funcionaldades como metodogia de estudos como o Técnica Pomodoro

# Novas alterações para poder baixar no projeto

### instalar o axios

    -> yarn add axios
    -> utilizar essa forma de import onde for usar ==> import axios from "axios";

### instalar o uuid

    -> yarn add uuid
    -> utilizar essa forma de import onde for usar ==> import { v4 } from "uuid";

### instalar o uuid

    -> yarn add yup
