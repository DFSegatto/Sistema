Sistema de Gerenciamento de Restaurante
Autores

Introdução
As novas tecnologias revolucionaram a maneira como os restaurantes operam e interagem com seus clientes. O Sistema de Gerenciamento de Restaurante foi desenvolvido para proporcionar uma experiência digital aprimorada tanto para os administradores do restaurante quanto para os clientes. Este sistema oferece funcionalidades como gestão de usuários, cadastro de pratos, envio de mensagens de contato e gerenciamento de reservas, otimizando a operação do restaurante e melhorando a satisfação do cliente.

Objetivo
O objetivo deste projeto é desenvolver um sistema de gerenciamento de restaurante que permita uma administração eficiente dos pratos do menu, facilite o processo de reserva de mesas e melhore a comunicação com os clientes por meio de um formulário de contato.

Metodologia
Este projeto foi desenvolvido utilizando uma abordagem prática e aplicada, focando na criação de um sistema funcional e intuitivo. Utilizamos as seguintes tecnologias e metodologias:

Frontend: Desenvolvido em React, utilizando React Router para navegação entre as páginas.
Backend: Construído com Node.js e Express, com integração ao banco de dados PostgreSQL via Sequelize.
Banco de Dados: PostgreSQL, com modelagem relacional para armazenar informações de usuários, pratos, contatos e reservas.
Metodologia de Desenvolvimento: Desenvolvimento ágil com iterações contínuas e feedback frequente.

Modelo Relacional do Banco de Dados
Tabela usuarios
Coluna	Tipo	Restrições
id	SERIAL	PRIMARY KEY
nome	VARCHAR(255)	NOT NULL
email	VARCHAR(255)	UNIQUE, NOT NULL
senha	VARCHAR(255)	NOT NULL
Tabela pratos
Coluna	Tipo	Restrições
id	SERIAL	PRIMARY KEY
nome	VARCHAR(255)	NOT NULL
descricao	TEXT	
preco	DECIMAL(10,2)	NOT NULL
quantidade	INTEGER	NOT NULL
Tabela contatos
Coluna	Tipo	Restrições
id	SERIAL	PRIMARY KEY
nome	VARCHAR(255)	NOT NULL
email	VARCHAR(255)	NOT NULL
mensagem	TEXT	NOT NULL
Tabela reservas
Coluna	Tipo	Restrições
id	SERIAL	PRIMARY KEY
usuario_id	INTEGER	FOREIGN KEY REFERENCES usuarios(id)
data	DATE	NOT NULL
hora	TIME	NOT NULL
convidados	INTEGER	NOT NULL

Resultados
O Sistema de Gerenciamento de Restaurante oferece uma plataforma integrada para administração de pratos, gerenciamento de reservas e comunicação com clientes. Entre os principais resultados, destacam-se:

Eficiência Operacional: Facilita o gerenciamento do menu e reservas, otimizando a operação do restaurante.
Melhoria na Comunicação: Através do formulário de contato, os clientes podem enviar mensagens diretamente ao restaurante, melhorando a interação e atendimento.
Gerenciamento de Usuários: Permite a administração de contas de usuários com segurança, facilitando o acesso e uso do sistema.
Conclusão
Com base neste projeto, foi possível desenvolver um sistema robusto e eficiente para o gerenciamento de restaurantes. As funcionalidades de inbound marketing e a estrutura de personas ajudaram a criar campanhas mais eficazes para atrair e reter clientes. Para continuar aprimorando o sistema, recomenda-se o desenvolvimento de um mapa da jornada do cliente, a fim de entender melhor o comportamento dos clientes antes, durante e após a experiência de compra.

Palavras-chave
Sistema de Restaurante, Gerenciamento de Pratos, Reservas de Mesas, Formulário de Contato, Inbound Marketing.