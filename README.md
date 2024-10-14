
# API de Envio de Mensagens via Telegram hospedada na VERCEL

Esta é uma API simples para enviar mensagens de texto e imagens para um chat do Telegram. A API é construída com Node.js e Express.
Esta alicação esta parametrizada para ser executada em abiente serverless VERCEL.

## Funcionalidades

- Envio de mensagens de texto para o Telegram.
- Envio de imagens com legendas para o Telegram.
- Configuração fácil de variáveis de ambiente.

## Pré-requisitos

- Conta na VERCEL (https://www.vercel.com)
- Um bot do Telegram (criado através do [BotFather](https://core.telegram.org/bots#botfather))
- Um chat ID para enviar mensagens

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/fabiomatys/api-telegram-messages.git
   ```


2. Crie um projeto na VERCEL com base neste repositório

3. Configure as variaveis de ambiente na VERCEL `.env`, adicione as seguintes variáveis:

```plaintext
   TELEGRAM_BOT_TOKEN=123456789:ABCDEFGHIJKLMNO_PQRSTUVWXYZ
   MY_CHATID=123456789
   TOKEN=[SEUTOKEN]
```

### Endpoints

#### 1. Enviar Mensagem de Texto

**Endpoint:** `/txt`

**Método:** `GET`

**Parâmetros de consulta:**

- `token`: Token de acesso (obrigatório)
- `message`: Texto da mensagem a ser enviada (obrigatório)

**Exemplo de requisição:**

```plaintext
GET /txt?token=seutoken&message=Olá%20mundo
```

#### 2. Enviar Imagem

**Endpoint:** `/img`

**Método:** `GET`

**Parâmetros de consulta:**

- `token`: Token de acesso (obrigatório)
- `image_url`: URL da imagem a ser enviada (obrigatório)
- `caption`: Texto da legenda da imagem (obrigatório)

**Exemplo de requisição:**

```plaintext
GET /img?token=seutoken&image_url=https://link-da-imagem.com/foto.jpg&caption=Minha+legenda
```

## Notas

- Certifique-se de incluir o token de acesso em cada requisição e de configurar as variáveis de ambiente corretamente.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
