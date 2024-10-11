const express = require('express');
const router = express.Router();

// Rota para exibir a documentação da API
router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Bem-vindo à API de envio de mensagens via Telegram!",
        endpoints: {
            "/txt": {
                method: "GET",
                description: "Envia uma mensagem de texto para o chat do Telegram.",
                queryParams: {
                    "token": "Token de acesso (obrigatório)",
                    "message": "Texto da mensagem a ser enviada (obrigatório)"
                },
                example: "GET /txt?token=[seutoken]&message=Olá%20mundo"
            },
            "/img": {
                method: "GET",
                description: "Envia uma imagem e uma legenda para o chat do Telegram.",
                queryParams: {
                    "token": "Token de acesso (obrigatório)",
                    "image_url": "URL da imagem a ser enviada (obrigatório)",
                    "caption": "Texto da legenda da imagem (obrigatório)"
                },
                example: "GET /img?token=[seutoken]&image_url=https://link-da-imagem.com/foto.jpg&caption=Minha+legenda"
            }
        },
        environmentVariables: {
            "TELEGRAM_BOT_TOKEN": {
                description: "Token de autenticação do seu bot do Telegram. Fornecido pelo BotFather.",
                example: "TELEGRAM_BOT_TOKEN=123456789:ABCDEFGHIJKLMNO_PQRSTUVWXYZ"
            },
            "MY_CHATID": {
                description: "ID do chat onde as mensagens serão enviadas.",
                example: "MY_CHATID=987654321"
            },
            "TOKEN": {
                description: "Um token personalizado para autorizar o uso da API. Neste caso, deve ser 'FMC2024'.",
                example: "TOKEN=AbCd123"
            }
        },
        notes: "Certifique-se de incluir o token de acesso em cada requisição e de configurar as variáveis de ambiente corretamente."
    });
});

module.exports = router;