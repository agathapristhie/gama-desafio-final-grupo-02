# DESAFIO FINAL - HIRING CODERS - GRUPO 02 - TEMA AWS

## Integrantes: 
* #### Cecilia Garcia Amora;
* #### Felipe Gomes Belarmino;
* #### Glauber Jesus Loiola;
* #### Hugo Leonardo Baltazar;
* #### Jade Pardo Buck;
* #### Joel Oliveira;
* #### Lucas dos Santos Xavier;
* #### Pedro Thiago Marmello;
* #### Priscila Palma Portes Del Vacchio.
* #### Vinícius da Silva Soares

## DIVISAO DO GRUPO
Fizemos uma subdivisão em nosso grupo em, **BACKEND e FRONTEND**, com o intuito de agilizar mais algumas das nossas tarefas, ficando algumas pessoas responsáveis pela criação da página (frontEnd) e outras pela instituição do Servidor e APIs (backEnd) conforme pedia o briefing do desafio. 

## UTILIZAÇÃO DA METODOLOGIA ÁGIL
Para auxiliar e conduzir nosso projeto utilizamos uma das metodologias ágeis, mais simples, porém que gera muitos resultados e é bem fácil de organizar as tarefas que é o **KANBAN**. Kanban é uma metodologia ágil japonesa criada na __década de 40__, no Japão, dentro da fábrica de veículos **TOYOTA**, e seu nome quer dizer __"cartão"__. Como ferramenta utilizamos o aplicativo **PIPEFY** para criar os cartões com cada tarefa a ser concluida, e cada etapa a ser passada, até chegar ao DEPLOY e à finalização. 
A divisão destas tarefas ficou a cargo com as habilidades de cada dev, tanto no front quanto no backEnd.

## CONSTRUÇÃO DO SITE - FRONT END
Na construção da página do nosso "cliente", na parte de front-end, utilizamos a construção em blocos com o Store Framework da Vtex. Ele usa o Partial Hydration do React e, por conta disso, é possível obter uma maior performance do site. 

Enquanto isso, o React permite a componentização das partes do código, que faz com que o site fique com estrutura de certa maneira simples e fácil de entender, simplificando o suporte e manutenção do mesmo. 

A performance é um dos fatores críticos para o êxito de um e-commerce, pois a velocidade do carregamento da página interfere na quantidade de conversões. Essa foi uma preocupação nossa e, para isso, lançamos mão de medidas como usar o bloco de fold para melhorar o load inicial na home e usar imagens leves, principalmente em svg, localizadas na pasta assets. 

Uma vez que grande parte dos acessos das stores vêm pelo celular, também deixamos o layout responsivo para mobile.

A estilização do site do nosso "cliente" foi feito através do **CSS** e **styled components** para os componentes react.

Como o briefing sugeriu utilizamos o tema da **AWS**, também para integrar a nossa loja de produtos. Dentro desta loja os clientes poderão acessar os produtos da AWS divididos em algumas seções que criamos, ou até mesmo pesquisar por algum produto que já tenha em mente. 

Para os nossos primeiro clientes separamos uma **SUPER PROMOÇÃO** de 10% de desconto, apenas para a primeira compra. Onde o mesmo deve preencher um pequeno cadastro para ter acesso à esse desconto. 

A página inicial, HOME, contém informações sobre a AWS, onde os clientes poderão conhecer um pouco da Empresa e também quem são alguns dos clientes e parceiros. 

Instituimos a página Sobre Nós, onde nossos clientes terão algumas informações sobre o que é a AWS, alguns conceitos, missão e valores da empresa. 

## BACKEND 
Como Mencionado acima nossos clientes podem ter acesso a um desconto para a primeira compra preenchendo um pequeno cadastro, que leva menos de 1 minuto pra ser concluido. 

Nesse cadastro, para salvar os dados dos nossos possíveis clientes, utilizamos uma API da AWS Lambda e os dados são salvos no banco de dados DynamoDB da AWS. 

Estes dados são exportados para a tela do admin conforme demonstrado em nossa apresentação.


