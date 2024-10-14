const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Carregar variáveis do .env

const app = express();

// Substitua pelo seu token do bot do Telegram
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;
const MY_CHAT = process.env.MY_CHATID;
const VALID_TOKEN = process.env.MY_VALID_TOKEN;

// Rota para enviar mensagem via Telegram (usando GET)
app.get('/txt', async (req, res) => {
    const {
        message,
        token
    } = req.query;

    // Verifica token
    if (token !== VALID_TOKEN) {
        return res.status(403).json({
            success: false,
            message: 'Acesso negado. Token inválido.'
        });
    }

    if (!message) {
        console.log(`Requisição Recebida sem os parametros necessários`);
        return res.status(400).json({
            error: 'O Parametro message é obrigatório',
        });
    }

    try {
        const response = await axios.get(`${TELEGRAM_API_URL}/sendMessage`, {
            params: {
                chat_id: MY_CHAT,
                text: message
            }
        });
        console.log(`Menssagem envida: ${message} | Para: ${MY_CHAT}`);
        return res.status(200).json({
            success: true,
            result: response.data,
        });
    } catch (error) {
        console.log(`ERRO ao enviar msg: ${message} | Para: ${MY_CHAT}`);
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

// Exportar o aplicativo para que a Vercel o use como uma função serverless
module.exports = app;