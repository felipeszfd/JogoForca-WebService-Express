# Jogo da Forca Multiplayer

> Projeto para a disciplina de **Sistemas Distribuídos** do curso de Engenharia de Computação - UNIFEI

Este é um jogo da forca multiplayer, onde vários jogadores podem participar simultaneamente pela rede local, utilizando um webservice construído com **Node.js**, **Express** e **Socket.IO**.

---

## Tecnologias Utilizadas
- Node.js
- Express
- Socket.IO
- HTML, CSS e JavaScript (frontend)

## Como Rodar o Projeto

### 1. Pré-requisitos
- Node.js instalado ([nodejs.org](https://nodejs.org/))
- Git instalado (opcional, para clonar o repositório)

### 2. Instalação

Clone o repositório ou baixe os arquivos do projeto:

```sh
# Clone o repositório
git clone <url-do-repositorio>
cd JogoForca-WebService-Express

# Instale as dependências
npm install
```

### 3. Executando o Servidor

O servidor deve ser iniciado a partir da pasta raiz do projeto (onde está o `package.json`).

```sh
npm start
```

Por padrão, o servidor roda na porta **3000**.

### 4. Acessando o Jogo

#### No computador local:
Abra o navegador e acesse:
```
http://localhost:3000
```

#### Em outros dispositivos na mesma rede (ex: celular, outro notebook):
1. Descubra o IP do computador onde o servidor está rodando. No Windows, use o comando:
	```
	ipconfig
	```
	Procure pelo endereço IPv4 (ex: 192.168.1.10).
2. No navegador do outro dispositivo, acesse:
	```
	http://<IP_DO_SERVIDOR>:3000
	```
	Exemplo: `http://192.168.1.10:3000`
3. Certifique-se de que ambos os dispositivos estão conectados à mesma rede Wi-Fi ou cabo.
4. Se não conseguir acessar, verifique o firewall do Windows e libere a porta 3000 para conexões TCP.
5. Use sempre o IP mostrado pelo terminal onde o servidor está rodando (especialmente se estiver usando o terminal integrado do VS Code).

### 5. Observações Importantes
- O servidor pode ser iniciado pelo terminal integrado do VS Code ou pelo terminal do sistema operacional, sempre na pasta raiz do projeto.
- O IP a ser usado para acesso externo deve ser o mostrado pelo comando `ipconfig` no terminal onde o servidor está rodando.
- O jogo suporta múltiplos jogadores simultâneos na mesma rede.
- Se estiver usando WSL, Docker ou múltiplas interfaces de rede, confira qual IP está realmente ativo na sua rede local.

## Sobre o Projeto
- Projeto desenvolvido para fins acadêmicos na disciplina de Sistemas Distribuídos (UNIFEI).
- Autor: [Seu Nome Aqui]
- Engenharia de Computação - UNIFEI

---

Se tiver dúvidas ou sugestões, fique à vontade para abrir uma issue ou entrar em contato!