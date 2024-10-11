const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Carregar variáveis do .env

const app = express();
const PORT = process.env.PORT || 3300;

// Substitua pelo seu token do bot do Telegram
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;
const MY_CHAT = process.env.MY_CHATID;

let cont = 0; // Inicializa o contador

// Rota para enviar mensagem via Telegram (usando GET)
app.get('/', async (req, res) => {
    cont++;
    const {
        message
    } = req.query;

    if (!message) {
        console.log(`Requisição Recebida sem os parametros necessários`);
        return res.status(400).json({
            error: 'Parametro message é obrigatório',
            contador: cont
        });
    }

    try {
        const response = await axios.get(`${TELEGRAM_API_URL}/sendMessage`, {
            params: {
                chat_id: MY_CHAT,
                text: message + " - " + cont
            }
        });
        console.log(`Menssagem envida: ${message} | Para: ${MY_CHAT}`);
        return res.status(200).json({
            success: true,
            result: response.data,
            contador: cont
        });
    } catch (error) {
        console.log(`ERRO ao enviar msg: ${message} | Para: ${MY_CHAT}`);
        return res.status(500).json({
            success: false,
            error: error.message,
            contador: cont
        });
    }
});

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});