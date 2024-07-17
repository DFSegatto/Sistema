Sistema de Gerenciamento de Restaurante
Autores

Introdu��o
As novas tecnologias revolucionaram a maneira como os restaurantes operam e interagem com seus clientes. O Sistema de Gerenciamento de Restaurante foi desenvolvido para proporcionar uma experi�ncia digital aprimorada tanto para os administradores do restaurante quanto para os clientes. Este sistema oferece funcionalidades como gest�o de usu�rios, cadastro de pratos, envio de mensagens de contato e gerenciamento de reservas, otimizando a opera��o do restaurante e melhorando a satisfa��o do cliente.

Objetivo
O objetivo deste projeto � desenvolver um sistema de gerenciamento de restaurante que permita uma administra��o eficiente dos pratos do menu, facilite o processo de reserva de mesas e melhore a comunica��o com os clientes por meio de um formul�rio de contato.

Metodologia
Este projeto foi desenvolvido utilizando uma abordagem pr�tica e aplicada, focando na cria��o de um sistema funcional e intuitivo. Utilizamos as seguintes tecnologias e metodologias:

Frontend: Desenvolvido em React, utilizando React Router para navega��o entre as p�ginas.
Backend: Constru�do com Node.js e Express, com integra��o ao banco de dados PostgreSQL via Sequelize.
Banco de Dados: PostgreSQL, com modelagem relacional para armazenar informa��es de usu�rios, pratos, contatos e reservas.
Metodologia de Desenvolvimento: Desenvolvimento �gil com itera��es cont�nuas e feedback frequente.

Modelo Relacional do Banco de Dados
Tabela usuarios
Coluna	Tipo	Restri��es
id	SERIAL	PRIMARY KEY
nome	VARCHAR(255)	NOT NULL
email	VARCHAR(255)	UNIQUE, NOT NULL
senha	VARCHAR(255)	NOT NULL
Tabela pratos
Coluna	Tipo	Restri��es
id	SERIAL	PRIMARY KEY
nome	VARCHAR(255)	NOT NULL
descricao	TEXT	
preco	DECIMAL(10,2)	NOT NULL
quantidade	INTEGER	NOT NULL
Tabela contatos
Coluna	Tipo	Restri��es
id	SERIAL	PRIMARY KEY
nome	VARCHAR(255)	NOT NULL
email	VARCHAR(255)	NOT NULL
mensagem	TEXT	NOT NULL
Tabela reservas
Coluna	Tipo	Restri��es
id	SERIAL	PRIMARY KEY
usuario_id	INTEGER	FOREIGN KEY REFERENCES usuarios(id)
data	DATE	NOT NULL
hora	TIME	NOT NULL
convidados	INTEGER	NOT NULL

Resultados
O Sistema de Gerenciamento de Restaurante oferece uma plataforma integrada para administra��o de pratos, gerenciamento de reservas e comunica��o com clientes. Entre os principais resultados, destacam-se:

Efici�ncia Operacional: Facilita o gerenciamento do menu e reservas, otimizando a opera��o do restaurante.
Melhoria na Comunica��o: Atrav�s do formul�rio de contato, os clientes podem enviar mensagens diretamente ao restaurante, melhorando a intera��o e atendimento.
Gerenciamento de Usu�rios: Permite a administra��o de contas de usu�rios com seguran�a, facilitando o acesso e uso do sistema.
Conclus�o
Com base neste projeto, foi poss�vel desenvolver um sistema robusto e eficiente para o gerenciamento de restaurantes. As funcionalidades de inbound marketing e a estrutura de personas ajudaram a criar campanhas mais eficazes para atrair e reter clientes. Para continuar aprimorando o sistema, recomenda-se o desenvolvimento de um mapa da jornada do cliente, a fim de entender melhor o comportamento dos clientes antes, durante e ap�s a experi�ncia de compra.

Palavras-chave
Sistema de Restaurante, Gerenciamento de Pratos, Reservas de Mesas, Formul�rio de Contato, Inbound Marketing.