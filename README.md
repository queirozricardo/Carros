# Carros
 Cadastro de carros Node.js and MongoDB


# Instalação
Faça o clone do repositório e no terminal navegue até a pasta;

Instale as dependências do projeto com yarn;

Edite o arquivo /.env e adicione as suas próprias configurações de conexão com o MongoDB na variavel MONGO_URL.

Rode o servidor de desenvolvimento com yarn dev.

O endpoint do serviço estará disponível em http://localhost:3510 .


# Métodos API : 
URL:
localhost:3510/carro

Method: GET
    localhost:3510/carro/buscar-todos
    localhost:3510/carro/buscar-por-atributo?marca=&model=&versao=&anoIni=&anoFim=&km=&cambio=&precoini=&precofim=

Method: POST
    localhost:3510/carro/cadastrar-carro

parameters: Body
{
	"marca": "",
	"model": "",
	"versao": "",
	"ano": ,
	"km": ,
	"cambio": "",
	"precovenda": 
}


Method: PUT
    localhost:3510/carro/editar-carro?id=

parameters: 
query:
id

Body:
{
	"marca": "",
	"model": "",
	"versao": "",
	"ano": ,
	"km": ,
	"cambio": "",
	"precovenda": 
}